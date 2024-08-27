import "./styles.css";

export default function Videos() {
  return (
    <section>
      <h2>Imagem & Vídeo</h2>
      <div class="container">
        <div>
          <figure>
            <img
              width="400"
              height="300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlTqo4Ii_vaBC6eVpQXEsiqe7VmwD4Ej4eg&s"
              alt="Rei Leão"
            />
          </figure>
        </div>

        <div>
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/zXwXhebwgsg?si=ZIGAt1RG4y-jQDRw"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
