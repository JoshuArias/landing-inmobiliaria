const benefits = [
  {
    icon: 'home',
    title: 'Propiedades exclusivas',
    description: 'Acceso a las mejores propiedades del mercado',
  },
  {
    icon: 'advice',
    title: 'Asesoría personalizada',
    description: 'Expertos a tu disposición en cada paso',
  },
  {
    icon: 'shield',
    title: 'Proceso seguro',
    description: 'Transacciones transparentes y confiables',
  },
]

function Benefits() {
  return (
    <section className="benefits-section" aria-labelledby="benefits-title">
      <div className="section-heading compact">
        <span className="section-label">Confianza desde el primer contacto</span>
        <h2 id="benefits-title">Una experiencia inmobiliaria más clara</h2>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <span className="benefit-icon" aria-hidden="true">
              <BenefitIcon name={benefit.icon} />
            </span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function BenefitIcon({ name }) {
  if (name === 'advice') {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M8 11.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Zm8 0a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM3.5 18.5a4.6 4.6 0 0 1 9.2 0v.9H3.5v-.9Zm7.8.9v-.9a5.8 5.8 0 0 0-.8-2.9 4.6 4.6 0 0 1 10 2.9v.9h-9.2Z" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 3.4 19 6v5.2c0 4.5-2.8 7.7-7 9.4-4.2-1.7-7-4.9-7-9.4V6l7-2.6Zm3.9 6.3-4.6 4.6-2.1-2.1-1.2 1.2 3.3 3.3 5.8-5.8-1.2-1.2Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="m3.5 11.1 8.5-7 8.5 7-1.1 1.3-1.4-1.2v8.1H6v-8.1l-1.4 1.2-1.1-1.3Zm4.2 6.5h3.1v-4.4h2.4v4.4h3.1v-7.8L12 6.3 7.7 9.8v7.8Z" />
    </svg>
  )
}

export default Benefits
