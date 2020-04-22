import { Settore } from './settore';
import { Regione, Provincia, Comune } from './place';

export class Risorsa {
    _id: string = "";
    nome: string = "";
    cognome: string = "";
    dataNascita: string = "";
    settore: Settore = new Settore();
    stipendioRAL: number = 0;
    residenza: {
        regione: Regione,
        provincia: Provincia,
        comune: Comune
    };

    constructor(){
        this.residenza = {
            regione: new Regione(),
            provincia: new Provincia(),
            comune: new Comune()
        }
    }
}