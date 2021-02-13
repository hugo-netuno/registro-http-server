class Registro{
constructor(param){
this._registro= param;
Object.freeze(this);
}
get registro(){
  return this._registro;
}


}
