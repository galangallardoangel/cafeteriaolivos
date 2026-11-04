function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* HORARIOS */}
        <div className="footer-hours">
          <h3>Horario</h3>

          <p>
            <strong>Miércoles, Jueves y Viernes:</strong>
            <br />
            07:30 – 16:00 h. / 19:30 – 00:00 h.
          </p>

          <p>
            <strong>Sábados:</strong>
            <br />
            09:30 – 16:00 h. / 19:30 – 00:00 h.
          </p>

          <p>
            <strong>Domingos:</strong>
            <br />
            10:00 – 17:00 h.
          </p>

          <p>
            <strong>Lunes:</strong> CERRADO
          </p>
        </div>

        {/* LOGO EN EL CENTRO */}
        <div className="footer-logo">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Cafetería Restaurante Los Olivos"
          />
        </div>

        {/* CONTACTO */}
        <div className="footer-contact">
          <p>
            <strong>Reservas</strong>
            <br />
            <a href="tel:+34957454534">957 45 45 34</a>
          </p>

          <a
            className="footer-instagram"
            href="https://www.https://www.instagram.com/restaurante_losolivos.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="0.8" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
