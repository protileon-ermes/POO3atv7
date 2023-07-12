import Iconsole from "../console/Iconsole";
import Iplay from "./Iplay";

export default class play implements Iplay{
    constructor(private plataform : Iconsole){}
    
    playing(): void {
        console.log("iniciando o game")
    }
    result() : void {
        console.log("** Jogo iniciado **")
    }
}