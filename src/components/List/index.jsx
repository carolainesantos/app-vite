import "./styles.css";

export default function List({ titulo = "Seção de Listas" }) {
  return (
    <section>
      <h2>{titulo}</h2>
      <div>
        <div>
          <h3>Lista não ordenada:</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>

        <div>
          <h3>Lista ordenada:</h3>
          <ol>
            <li>Primeiro item</li>
            <li>Segundo item</li>
            <li>Terceiro item</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
