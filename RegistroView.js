class RegistroView extends View {

    constructor(elemento) {
       super(elemento);
    }

    template(model) {
      return `
      ${model.ficheiro.map(n => `
      <p>${n._registro}</p><br>
      `)}
      `;
    }
}
