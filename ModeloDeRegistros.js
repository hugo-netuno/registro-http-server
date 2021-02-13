class ModeloDeRegistros {
constructor(){
this._ficheiro = [];
}

adicionaRegistro(obj) {
this._ficheiro.push(obj);
}
get ficheiro() {
return [].concat(this._ficheiro);
}
set ficheiro(fchr) {
  this._ficheiro = fchr;
}
}
