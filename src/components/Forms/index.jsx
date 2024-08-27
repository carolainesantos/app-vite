import { useState } from "react";
import "./styles.css";

/* Essa função Forms cria um objeto com as propriedades de nome, email, senha e anexo. 
  E usa o useState para adicionar o estado local em componentes funcionais.
  O useState retorna um array com dois elementos: o estado atual e uma função que permite atualizar esse estado
  A [formData, setFormData] usa desestruturação para atribuir os dois
  elementos do array retornado pelo useState a duas variáveis:
  formData: Esta é uma variável que contém o estado atual.
  formData é um objeto que contém dados de um formulário.
  setFormData: é uma função usada para atualizar o estado formData
*/
export default function Forms() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    // anexo: null,
  });

  /*  Esta função é usada como um manipulador de eventos 
   para mudanças (geralmente em campos de input em um formulário).
   Ela recebe um argumento e, que representa o evento que é 
   disparado quando um input muda. */
  const handleChange = (e) => {
    /* essa linha representa o elemento q disparou o evento, 
    ele extrai as propriedades name= identifica o campo do formulario, 
    value= o valor atual do campo input, 
    type= tipo do elemento (text, checkbox, file, etc) e files= uma lista de arquivos. */
    const { name, value, type, files } = e.target;
    setFormData({
      // Função usada para atualizar o estado do formulário (formData)
      ...formData, // faz uma cópia do estado atual  das propriedades (formData) para um novo objeto
      [name]: type === "file" ? files[0] : value, //  Atualiza a propriedade correspondente ao nome do campo que mudou
    });
    console.log(name, value, type, files);
  };

  return (
    <section class="last">
      <div>
        <h2>Formulário Simples</h2>
        <form>
          <div>
            <label for="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <label for="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>
          <div class="form-group show-password">
            {/* <input type="checkbox" id="mostrarSenha" />
            <label for="mostrarSenha">Mostrar senha</label> */}
          </div>

          {/* <div>
            <label for="anexo">Anexo:</label>
            <input
              type="file"
              id="anexo"
              name="anexo"
              value={formData.anexo}
              onChange={handleChange}
            />
          </div> */}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
