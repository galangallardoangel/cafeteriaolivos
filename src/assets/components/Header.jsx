import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <a href="#inicio" className="header-logo">
        <img src="/logo.png" alt="Cafetería Restaurante Los Olivos" />
      </a>

      <nav className="header-nav">
        <a href="#nosotros">Sobre nosotros</a>
        <a href="#carta">Carta</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a href="tel:957454534" className="header-phone">
        Reservas: 957 45 45 34
      </a>
    </header>
  );
}

export default Header;
