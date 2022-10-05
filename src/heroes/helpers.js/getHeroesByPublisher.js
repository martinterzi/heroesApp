import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validationPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validationPublisher.includes( publisher ) ){
        throw new Error(`${publisher} is not a valid publisher`)
    }


    return heroes.filter( x => x.publisher === publisher );


}