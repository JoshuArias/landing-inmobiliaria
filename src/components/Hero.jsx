function Hero({ image, title, subtitle }) {
  return (
    <section className="hero-section" aria-label="Inicio">
      <img className="hero-image" src={image} alt="Casa moderna en un entorno residencial" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-kicker">Bienes raíces premium</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default Hero
