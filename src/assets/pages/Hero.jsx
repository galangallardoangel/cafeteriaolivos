function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <img
          src="/logo.png"
          alt="Cafetería Restaurante Los Olivos"
          className="hero-logo"
        />

        <div className="hero-buttons">
          <a href="tel:NUMERO_TELEFONO">Reservar</a>
          <a href="#nosotros">Descúbrenos</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
