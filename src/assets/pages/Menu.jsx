import { useState } from "react";

const menuData = [
  {
    title: "Para el centro",
    description: "Para empezar bien el día.",
    columns: ["Plato", "Tapa", "1/2 Ración", "Ración"],
    items: [
      ["Jamón serrano", "4,50 €", "9,00 €", "12,50 €"],
      ["Queso curado", "4,50 €", "9,00 €", "12,50 €"],
      ["Patatas Bravas", "4,80 €", "9,00 €", "12,50 €"],
      ["Ensaladilla rusa", "4,50 €", "7,00 €", "10,00 €"],
      ["Callos caseros", "4,80 €", "7,50 €", "10,00 €"],
      ["Boquerones en vinagre", "5,00 €", "9,50 €", "13,50 €"],
      ["Sangre encebollada", "4,50 €", "7,00 €", "10,00 €"],
      ["Salmorejo cordobés", "4,50 €", "7,00 €", "10,00 €"],
      ["Carne con tomate", "4,80 €", "7,50 €", "10,50 €"],
      ["Riñones en salsa", "4,80 €", "7,50 €", "10,50 €"],
      ["Salpicón de marisco", "5,00 €", "8,00 €", "10,50 €"],
      ["Calamares en salsa", "5,50 €", "9,50 €", "14,00 €"],
      [
        "Croquetas caseras (jamón, rabo de toro o espinacas)",
        "—",
        "8,50 €",
        "12,50 €",
      ],
      ["Cochifrito ibérico", "—", "9,80 €", "14,00 €"],
      ["Almejas a la marinera", "—", "—", "15,00 €"],
      ["Gambas al ajillo", "—", "—", "14,00 €"],
      ["Patatas pelotón", "—", "—", "12,00 €"],
    ],
  },
  {
    title: "De la huerta",
    description: "Frescura y sabor de nuestra tierra.",
    columns: ["Plato", "1/2 Ración", "Ración"],
    items: [
      ["Cogollitos al ajillo", "6,80 €", "9,80 €"],
      ["Cogollitos con ventresca", "—", "13,00 €"],
      ["Cogollitos con boquerones en vinagre", "8,50 €", "12,00 €"],
      ["Tomate con ventresca", "—", "12,00 €"],
      ["Ensalada de la casa", "7,50 €", "11,00 €"],
      ["Berenjenas a la miel o salmorejo", "8,50 €", "12,00 €"],
      ["Alcachofas a la montillana", "—", "11,50 €"],
    ],
  },
  {
    title: "Revueltos",
    description: "Elaborados al momento.",
    columns: ["Plato", "1/2 Ración", "Ración"],
    items: [
      ["De setas con gambas y jamón", "9,50 €", "12,50 €"],
      [
        "De la casa (setas, verduras, champiñón, jamón y huevo)",
        "9,50 €",
        "12,50 €",
      ],
      ["De espárragos trigueros", "9,50 €", "12,50 €"],
      ["De habitas con jamón", "9,50 €", "12,50 €"],
      ["De bacalao", "9,50 €", "12,50 €"],
    ],
  },
  {
    title: "Pescados",
    description: "Sabores del mar en nuestra cocina.",
    columns: ["Plato", "1/2 Ración", "Ración"],
    items: [
      ["Bacalaílla frita", "8,00 €", "12,00 €"],
      ["Choco frito", "9,00 €", "12,50 €"],
      ["Rosada frita", "9,00 €", "12,50 €"],
      ["Boquerones fritos", "9,50 €", "13,50 €"],
      ["Bacalao frito", "11,50 €", "15,50 €"],
      ["Calamares fritos", "10,00 €", "14,50 €"],
      ["Calamares plancha", "—", "16,00 €"],
      ["Sepia a la plancha", "—", "16,50 €"],
      ["Bacalao plancha", "—", "19,00 €"],
      ["Fritura de pescado (para 2 personas)", "—", "22,00 €"],
      ["Cazón en adobo", "9,50 €", "13,50 €"],
    ],
  },
  {
    title: "Carnes",
    description: "El sabor de nuestra cocina.",
    columns: ["Plato", "Precio"],
    items: [
      ["Rabo de toro", "20,00 €"],
      ["Carrillada en salsa", "20,00 €"],
      ["Solomillo de cerdo a la plancha", "20,00 €"],
      ["Solomillo de cerdo a la cordobesa o Pedro Ximénez", "21,50 €"],
      ["Presa ibérica a la plancha", "22,50 €"],
      ["Codillo de cerdo confitado", "18,00 €"],
      ["Puntas de solomillo a la plancha", "17,50 €"],
      ["Puntas de solomillo al whisky o salsa de la casa", "21,00 €"],
      ["Chuletitas de cordero plancha", "22,00 €"],
      ["Entrecot de ternera a la plancha", "22,00 €"],
      ["Lomo a la plancha con patatas", "15,00 €"],
      ["Flamenquín casero", "12,50 €"],
      ["San Jacobo casero", "12,50 €"],
      ["Cachopo especial de ternera", "16,00 €"],
      ["Pechuga de pollo empanada o plancha", "13,50 €"],
    ],
  },
  {
    title: "Platos combinados",
    description: "Platos completos para disfrutar.",
    columns: ["Plato", "Precio"],
    items: [
      ["San Jacobo, huevo frito y patatas", "11,50 €"],
      ["Lomo plancha, beicón y ensaladilla rusa", "11,50 €"],
      ["Flamenquín casero, huevo frito y patatas", "11,50 €"],
      ["Riñones en salsa, callos caseros y patatas", "11,50 €"],
      ["Choco frito, boquerones fritos y rosada frita", "11,50 €"],
      ["Carne con tomate, croquetas caseras y patatas", "11,50 €"],
      ["Pechuga de pollo empanada, huevo frito y patatas", "11,50 €"],
      ["Sangre encebollada, carne con tomate y patatas", "11,50 €"],
      ["Pechuga de pollo plancha, croquetas y ensalada", "11,50 €"],
      ["Calamares en salsa, cazón en adobo y patatas", "11,50 €"],
    ],
  },
  {
    title: "Bocadillos",
    description: "Nuestros bocadillos para cualquier momento.",
    columns: ["Bocadillo", "Precio"],
    items: [
      ["Jamón serrano", "5,80 €"],
      ["Lomo a la plancha", "6,00 €"],
      ["Lomo con queso", "6,80 €"],
      ["Beicón con queso", "5,00 €"],
      ["Tortilla de jamón", "5,00 €"],
      ["Queso curado", "5,50 €"],
      ["Jamón York", "4,00 €"],
      ["Beicón plancha", "4,50 €"],
      ["Tortilla francesa", "4,00 €"],
    ],
  },
  {
    title: "Postres caseros",
    description: "El toque dulce para terminar.",
    columns: ["Postre", "Precio"],
    items: [
      ["Flan de huevo", "4,70 €"],
      ["Natillas de la abuela", "4,70 €"],
      ["Arroz con leche", "4,70 €"],
      ["Yogur con tocino de cielo", "4,70 €"],
      ["Tarta de queso con gachas de mosto", "4,70 €"],
      ["Tarta de chocolate de la abuela", "4,70 €"],
      ["Gachas caseras", "4,70 €"],
    ],
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="menu" id="carta">
      <div className="menu-header">
        <span className="menu-subtitle">SABORES DE LOS OLIVOS</span>
        <h2>Nuestra carta</h2>
        <p>Una selección de sabores para disfrutar de cada momento.</p>
      </div>

      <div className="menu-categories">
        {menuData.map((category) => (
          <button
            type="button"
            className="menu-category"
            key={category.title}
            onClick={() => setSelectedCategory(category)}
          >
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </button>
        ))}
      </div>

      <p className="menu-extra">
        <br></br>
        Servicio de pan y picos: 0,70 € / Bolsa: 0,10 € / Taper: 0,50 €
        <br />
        IVA del 10 % incluido
      </p>

      {selectedCategory && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="menu-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedCategory(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <h2>{selectedCategory.title}</h2>
            <p className="modal-subtitle">{selectedCategory.description}</p>

            <div className="menu-table-wrapper">
              <table className="menu-table">
                <thead>
                  <tr>
                    {selectedCategory.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {selectedCategory.items.map((item, index) => (
                    <tr key={index}>
                      {item.map((value, cellIndex) => (
                        <td key={cellIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Menu;
