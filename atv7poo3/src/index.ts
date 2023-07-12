import Iconsole from "./console/Iconsole";
import { playstation } from "./console/playstation";
import { xbox } from "./console/xbox";
import advancedPlay from "./play/advancedPlay";

function startAdvPlay(plataform: Iconsole){
    const jogo = new advancedPlay(plataform);
    jogo.playing();
    jogo.result();
    jogo.challenge();
}

startAdvPlay(new playstation());
startAdvPlay(new xbox());