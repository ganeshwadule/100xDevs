import {atom, selector} from "recoil"


export const counterAtom = atom({
    key:"counter",
    default:0
})

// derived state
export const isEvenSelector = selector({
    key:"isEven",
    get:function({get}){
        const count = get(counterAtom)
        return count % 2 === 0;
    }
})