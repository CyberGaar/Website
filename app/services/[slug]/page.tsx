import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { categoryContent, getService, services } from "../../data/services";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const category = categoryContent[service.category];
  return {
    title: `${service.name} | ${category.label} | Cybergaar`,
    description: `${service.name} support from Cybergaar for ${service.appliesTo.toLowerCase()}. Includes scoping, assessment, evidence, remediation guidance and clear next steps.`,
    keywords: [
      service.name,
      service.shortName ?? service.name,
      category.label,
      "Cybergaar",
      "security audit",
      "application security",
      "vulnerability scanning",
      "penetration testing",
      "security implementation",
    ],
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const category = categoryContent[service.category];
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: { "@type": "Organization", name: "Cybergaar", url: "https://cybergaar.com" },
    serviceType: category.label,
    areaServed: service.region,
    audience: service.appliesTo,
    description: `${service.name} support for ${service.appliesTo}. ${service.risk}`,
    offers: { "@type": "Offer", priceCurrency: "USD", description: service.price },
  };

  return (
    <main className="inner-page service-detail-page" id="top">
      <SiteHeader />
      <section className="service-detail-hero">
        <div className="service-breadcrumbs">
          <a href="/services">Services</a><span>/</span>
          <a href={`/services/${service.category}`}>{category.label}</a>
        </div>
        <div className="service-detail-title">
          <p className="eyebrow"><span /> {category.label.toUpperCase()}</p>
          <h1>{service.name}</h1>
        </div>
        <div className="service-detail-summary">
          <p>Built for</p>
          <h2>{service.appliesTo}</h2>
          <span>{service.region}</span>
        </div>
      </section>

      <section className="service-evidence-grid">
        <article className="risk-panel">
          <p>WHY IT MATTERS</p>
          <h2>The exposure if this is missed</h2>
          <span>{service.risk}</span>
        </article>
        <article className="price-panel">
          <p>INDICATIVE CYBERGAAR READINESS / DELIVERY</p>
          <h2>{service.price}</h2>
          <span>{service.priceDetails}</span>
        </article>
        {service.formalPrice && (
          <article className="price-panel formal-panel">
            <p>FORMAL AUDIT OR CERTIFICATION</p>
            <h2>{service.formalPrice}</h2>
            <span>{service.formalDetails}</span>
          </article>
        )}
      </section>

      <section className="delivery-section">
        <div>
          <p className="eyebrow"><span /> A CLEARER ENGAGEMENT</p>
          <h2>From scope to evidence, without the guesswork.</h2>
        </div>
        <ol>
          <li><span>01</span><div><h3>Define the scope</h3><p>We agree the systems, locations, stakeholders and assurance outcome before work begins.</p></div></li>
          <li><span>02</span><div><h3>Assess and validate</h3><p>Our team gathers evidence, tests what matters and separates genuine risk from noise.</p></div></li>
          <li><span>03</span><div><h3>Make action obvious</h3><p>You receive prioritised findings, practical remediation guidance and a clear route to closure.</p></div></li>
        </ol>
      </section>

      <section className="detail-cta">
        <div><p>START A CONVERSATION</p><h2>Ready to scope your {service.shortName ?? service.name} engagement?</h2></div>
        <a href="mailto:hello@cybergaar.com">Talk to Cybergaar <span aria-hidden="true">⟶</span></a>
      </section>
      <p className="pricing-disclaimer">Indicative planning ranges only. Final pricing depends on scope, complexity, access, evidence quality and assessor requirements. Regulatory readiness support is not legal advice.</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <SiteFooter />
    </main>
  );
}
