import React, { useState } from "react";

const Post = () => {
  const [count, setCount] = useState(0);

  const increment = ()=>{
    if(count === "99+")return;
    if(count === 99){
        setCount(99+"+")
    }
    else{
        setCount(count+1);
    }
    
  }
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        padding: "20px 45px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        class="mercado-match"
        width="44"
        height="44"
        focusable="false"
        color="blue"
      >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="grey"
        class="mercado-match"
        width="30"
        height="30"
        focusable="false"
      >
        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
      </svg>

      <div
        className="noti-count"
        style={{ position: "absolute", left: "1307px", top: "13px",backgroundColor:"red",color:"white",borderRadius:"50%",padding:"1px 3px"}}
      >
        {count}
      </div>
    </div>
    <button onClick={increment}>Add Post</button>
    </>
  );
};

export default Post;
