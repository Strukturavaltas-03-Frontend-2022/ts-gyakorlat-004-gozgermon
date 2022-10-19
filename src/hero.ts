import { IHuman } from './hero-interface';

/**
 * Állítsd be helyesen a HumanHero osztályt!
 * Ez az IHuman interfészt implementálja.
 * Neve: HumanHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class HumanHero {
    sex: string;
    age: number;
    health: number;
    id: number;
    name: string;
    //photo: string;

    constructor(id:number,name:string,sex:string,age:number,health:number)
    {
        this.age=age;
        this.health=health;
        this.sex=sex;
        this.name=name; 
        this.id=id
    }

}
