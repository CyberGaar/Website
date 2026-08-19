import type { Service } from "../data/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="catalog-card">
      <div className="catalog-card-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{service.region}</span>
      </div>
      <h2>{service.name}</h2>
      <p>{service.appliesTo}</p>
      <a href={`/services/${service.slug}`}>
        View service <span aria-hidden="true">⟶</span>
      </a>
    </article>
  );
}

