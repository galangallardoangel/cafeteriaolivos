import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cerrar menú al pulsar Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Cerrar menú al navegar
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${scrolled ? "header-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      {/* LOGO */}
      <a href="#inicio" className="header-logo" onClick={closeMenu}>
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Cafetería Restaurante Los Olivos"
        />
      </a>

      {/* NAVEGACIÓN */}
      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <a href="#nosotros" onClick={closeMenu}>
          Sobre nosotros
        </a>

        <a href="#carta" onClick={closeMenu}>
          Carta
        </a>

        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>

        <a href="tel:957454534" className="mobile-phone">
          Reservas: 957 45 45 34
        </a>
      </nav>

      {/* TELÉFONO ESCRITORIO */}
      <a href="tel:957454534" className="header-phone">
        Reservas: 957 45 45 34
      </a>

      {/* BOTÓN HAMBURGUESA */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="header-navigation"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
