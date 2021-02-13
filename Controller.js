class Controller{
  constructor(){
  this._input = document.querySelector('#input');
  this._modeloDeRegistros = new ModeloDeRegistros();
  this._registroView = new RegistroView(document.querySelector('#mercurio'));
  }
_setter(){
  let string = this._modeloDeRegistros.ficheiro;
  localStorage.setItem("ficheiro", JSON.stringify(string));
  }

_getter(){
  this._modeloDeRegistros._ficheiro = [];
  JSON.parse(
  localStorage.getItem("ficheiro"))
  .map(registro =>
  this._modeloDeRegistros.adicionaRegistro(registro));
  }

_updater(){
  this._registroView.update(this._modeloDeRegistros);
  }

_cast(){
  event.preventDefault(event);
  this._getter();
  this._modeloDeRegistros.adicionaRegistro(new Registro(
    this._input.value));
  this._setter();
  this._updater();
  }
}
