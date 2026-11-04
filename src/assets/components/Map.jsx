function Map() {
  return (
    <section className="map-section">
      <iframe
        className="map-iframe"
        src="https://maps.google.com/maps?q=37.8821258,-4.7990419&z=16&output=embed"
        title="Ubicación de Cafetería Restaurante Los Olivos"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default Map;
