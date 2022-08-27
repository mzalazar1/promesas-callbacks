import { ResolvePlugin } from "webpack";

const heroes = {
    capi: {
    nombre: 'Capitan America',
    poder: 'Aguantar inyecciones sin morir',
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
        },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion a las picaduras de araña',
        }
    }

export const buscarHeroe = (id) => {

    const heroe = heroes[id];
    return new Promise( (resolve, reject) => {
        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${ id }`);
        }
    })
}        
