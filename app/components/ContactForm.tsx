export default function ContactForm() {
  return (
    <form className="contact-form" action="https://formspree.io/f/xzzdgkly" method="POST">
      <div className="form-row">
        <label htmlFor="name">Your Name<input id="name" name="name" type="text" autoComplete="name" required /></label>
        <label htmlFor="email">Email<input id="email" name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label htmlFor="subject">Subject<input id="subject" name="subject" type="text" required /></label>
      <label htmlFor="message">Message<textarea id="message" name="message" rows={6} required /></label>
      <button type="submit">Submit <span aria-hidden="true">⟶</span></button>
    </form>
  );
}
