function Menu() {
  return (
    <section className="menu" id="carta">
      <div className="menu-header">
        <span className="menu-subtitle">SABORES DE LOS OLIVOS</span>
        <h2>Nuestra carta</h2>
        <p>Una selección de sabores para disfrutar de cada momento.</p>
      </div>

      <div className="menu-categories">
        <div className="menu-category">
          <h3>Desayunos</h3>
          <p>Para empezar bien el día.</p>
        </div>

        <div className="menu-category">
          <h3>Tapas y raciones</h3>
          <p>Para compartir y disfrutar.</p>
        </div>

        <div className="menu-category">
          <h3>Platos principales</h3>
          <p>El sabor de nuestra cocina.</p>
        </div>

        <div className="menu-category">
          <h3>Bebidas y postres</h3>
          <p>El toque final perfecto.</p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
