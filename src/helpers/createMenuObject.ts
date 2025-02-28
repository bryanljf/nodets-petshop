import { z } from 'zod';

const schema = z.enum(['all', 'dogs', 'cats', 'fishes', '']);

type MenuOptions = z.infer<typeof schema>;

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };
    
    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
} 

