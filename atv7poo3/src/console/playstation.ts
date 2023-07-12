import Iconsole from "./Iconsole";

export class playstation implements Iconsole{
    constructor(){
        this.configureGame();
        console.log("playstation configurado")
    }
    configureGame() : void {
        this.authToken()
        console.log("playstation continua configurado")
    }

    authToken() : void{
        console.log("playstation autorizando tokens")
    }
}