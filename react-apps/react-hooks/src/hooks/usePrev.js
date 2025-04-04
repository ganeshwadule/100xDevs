import { useEffect, useRef } from "react";

export function usePrev(value){
    const ref = useRef();

    useEffect(()=>{
        ref.current = value
    },[value])

    // this get's executed first & then useEffect's code get executed
    // it is property of React that it returns first & then Executes Effects
    return ref.current;
}