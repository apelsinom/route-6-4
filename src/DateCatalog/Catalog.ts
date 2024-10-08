import abibasModel1 from '../assets/FotoAbibas/abibasModel1.webp';
import abibasModel2 from '../assets/FotoAbibas/abibasModel2.webp';
import abibasModel3 from '../assets/FotoAbibas/abibasModel3.webp';
import pumaModel1 from "../assets/FotoPuma/pumaModel1.webp";
import pumaModel2 from "../assets/FotoPuma/pumaModel2.webp";
import pumaModel3 from "../assets/FotoPuma/pumaModel3.webp";
import adidasModel1 from "../assets/FotoAdidas/adidasModel1.webp";
import adidasModel2 from "../assets/FotoAdidas/adidasModel2.webp";
import adidasModel3 from "../assets/FotoAdidas/adidasModel3.webp";
import {v1} from "uuid";

export const PATH = {
    PAGE1: 'adidas',
    PAGE2: 'puma',
    PAGE3: 'abibas',
    ERROR: 'error404',
    PRICES: 'prices',
} as const

export type ModelType = {
    id: string;
    firm: string;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export type FirmType = {
    [firm: string]: ModelType[]
}

export const sneakersArr: FirmType = {
    [PATH.PAGE3]: [
        {
            id: v1(),
            firm: PATH.PAGE3,
            model: 'TREZIOD',
            collection: '2023',
            price: '100200$',
            picture: abibasModel1,

        },
        {
            id: v1(),
            firm: PATH.PAGE3,
            model: 'TREZIOD 2 ',
            collection: '2022',
            price: '200300$',
            picture: abibasModel2
        },
        {
            id: v1(),
            firm: PATH.PAGE3,
            model: 'SAMBA VEGAN ',
            collection: 'SPEEDFUSION',
            price: '300400$',
            picture: abibasModel3
        }
    ],
    [PATH.PAGE2]: [
        {
            id: v1(),
            firm: PATH.PAGE2,
            model: 'PUMA Trinity',
            collection: '2023',
            price: '100200$',
            picture: pumaModel1,

        },
        {
            id: v1(),
            firm: PATH.PAGE2,
            model: 'UMA RS-X TRIPLE',
            collection: '2022',
            price: '200300$',
            picture: pumaModel2
        },
        {
            id: v1(),
            firm: PATH.PAGE2,
            model: 'PUMA BMW M RE',
            collection: 'SPEEDFUSION',
            price: '300400$',
            picture: pumaModel3
        }
    ],
    [PATH.PAGE1]: [
        {
            id: v1(),
            firm: PATH.PAGE1,
            model: 'ADIDAS ADIFOM TRXN',
            collection: 'new collection1',
            price: '100200$',
            picture: adidasModel1,

        },
        {
            id: v1(),
            firm: PATH.PAGE1,
            model: 'ADIDAS ADIFOM SUPER',
            collection: 'new collection22',
            price: '200300$',
            picture: adidasModel2
        },
        {
            id: v1(),
            firm: PATH.PAGE1,
            model: 'ADIDAS SUPER SUPERSKI',
            collection: 'new collection333',
            price: '300400$',
            picture: adidasModel3
        }
    ],
}