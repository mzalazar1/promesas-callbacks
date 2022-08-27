import { call } from "file-loader";

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
//callback retorna...
export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if(heroe){
       callback( null, heroe);
    } else {
        // un error
       callback(`No existe un heroe con el id ${ id }`);
    }

  //  callback( heroe );
}