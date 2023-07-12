import Iconsole from "./Iconsole";

export class xbox implements Iconsole{
    constructor(){
        this.configureGame();
        console.log("xbox configurado")
    }
    configureGame() : void {
        this.authToken()
        console.log("xbox continuando broadcasting")
    }

    authToken() : void{
        console.log("xbox autorizando tokens")
    }
}