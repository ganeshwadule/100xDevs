import { useState } from "react";
import useFetch from "./hooks/useFetch"

function App() {
  const [id,setID] = useState(1);
  const {postTitle,loading,error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`,3);

  if(error)return  <div >Some Error occurred</div>
  if(loading)return <>Loading...</>

  return (
    <>
    <div onClick={()=>setID(1)}>1</div>
    <div onClick={()=>setID(2)}>2</div>
    <div onClick={()=>setID(3)}>3</div>
    <br /><br />
     {postTitle}
    </>
  )
}

export default App
