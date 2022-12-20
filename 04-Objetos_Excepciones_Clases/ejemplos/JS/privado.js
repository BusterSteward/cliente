"use strict";

class Privado{

    #privado;
        constructor(){
            this.#privado="privado";
        }
        #privateMethod() {
          console.log( 'hello world');
        }
      
        getPrivateMessage() {
            return this.#privateMethod();
        }
        getPrivado(){
            console.log(this.#privado);
        }
}

const part=new Privado();
part.getPrivateMessage();
part.getPrivado();
part.#privateMethod();
part.#privado;
