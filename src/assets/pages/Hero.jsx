function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Cafetería Restaurante Los Olivos"
          className="hero-logo"
        />

        <div className="hero-buttons">
          <a href="tel:957454534">Reservar</a>
          <a href="#nosotros">Descúbrenos</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
