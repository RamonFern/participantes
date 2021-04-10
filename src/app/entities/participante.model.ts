import { IParticipanteModel } from "./participante-model";

export class ParticipanteModel implements IParticipanteModel{
    public name: string;
    public age: number;
    public address: string;

    constructor(){
        this.name = '';
        this.age = 0;
        this.address = '';
    }
}