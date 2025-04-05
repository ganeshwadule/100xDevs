import React, { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("Ganesh");

  return (
    <authContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </authContext.Provider>
  );
};

const ContextAPICompo = () => {
  return (
    <div>
      before context
      <AuthContext>
        <Login />
        <Logout />
      </AuthContext>
    </div>
  );
};

function Login() {
  const { user } = useContext(authContext);
  console.log(user);
  return <h1>Hello {user}</h1>;
}

function Logout() {
  const { user, setUser } = useContext(authContext);
  return (
    <>
      <div>
        <button onClick={() => setUser("")}>logout</button>
      </div>
    </>
  );
}

export default ContextAPICompo;
