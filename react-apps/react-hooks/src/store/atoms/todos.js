import { atomFamily, selectorFamily } from "recoil";
import axios from "axios"
export const todos = atomFamily({
    key:"todos",
    default:selectorFamily({
        key:"todosSelector",
        get:(id)=>async ({get})=>{
            const response = await axios.get("http://localhost:3000/todos");
            const data = response.data;
            
            if(!id)return data;
            
            const todo = data.find((t)=>t.id === id);
            return todo;
        }
    })
})