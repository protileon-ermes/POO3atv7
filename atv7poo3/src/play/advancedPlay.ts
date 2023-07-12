import Iconsole from "../console/Iconsole";
import play from "./play";

export default class advancedPlay extends play{
    constructor(videogame : Iconsole){
        super(videogame);
    }
    challenge() : void{
        console.log("iniciando o desafio")
    }
}