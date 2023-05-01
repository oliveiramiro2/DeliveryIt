import { ICategoriesData } from '../@types';

import butcher from '../assets/imgs/acougue.png';
import drinks from '../assets/imgs/bebidas.png';
import candies from '../assets/imgs/bomboniere.png';
import colds from '../assets/imgs/frios.png';
import hortifruti from '../assets/imgs/hortifruti.png';
import foods from '../assets/imgs/lanchonete.png';
import cleaner from '../assets/imgs/limpeza.png';
import backer from '../assets/imgs/padaria.png';

export const categoriesData: ICategoriesData[] = [
    {
        id: 0,
        name: 'Açougue',
        image: butcher,
    },
    {
        id: 1,
        name: 'Bebidas',
        image: drinks,
    },
    {
        id: 2,
        name: 'Doces',
        image: candies,
    },
    {
        id: 3,
        name: 'Frios',
        image: colds,
    },
    {
        id: 4,
        name: 'Hortifruti',
        image: hortifruti,
    },
    {
        id: 5,
        name: 'Lanches',
        image: foods,
    },
    {
        id: 6,
        name: 'Limpeza',
        image: cleaner,
    },
    {
        id: 7,
        name: 'Padaria',
        image: backer,
    },
];
