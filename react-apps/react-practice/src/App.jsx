import React from "react";
import Post from "./components/Post";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Clock from "./components/Clock";

const styleObject = {
  margin: "20px 5px",
  fontSize: 18,
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clock />}/>
        
        <Route path="/app" element={<Layout />}>
          <Route path="/app/home" element={<Home />} />
          <Route path="/app/about" element={<About />} />
          <Route path="/app/services" element={<Services />} />
          <Route path="/app/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function Layout() {
  return (
    <div className="navbar">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "30vw",
          listStyle: "none",
          padding: 10,
          fontSize: 18,
        }}
      >
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#dfe6e9",
            padding: 10,
            border: "2px solid black",
            borderRadius: "7px",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#dfe6e9",
            padding: 10,
            border: "2px solid black",
            borderRadius: "7px",
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#dfe6e9",
            padding: 10,
            border: "2px solid black",
            borderRadius: "7px",
          }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#dfe6e9",
            padding: 10,
            border: "2px solid black",
            borderRadius: "7px",
          }}
        >
          Contact
        </Link>
      </ul>
      <br />
      <div style={{ height: "62.4vh" }}>
        <Outlet />
      </div>

      <div
        className="footer"
        style={{
          width: "100vw",
          backgroundColor: "#1B1464",
          color: "white",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: 20,
          placeItems: "center",
          gap: 100,
        }}
      >
        <div>
          <div style={styleObject}>About</div>
          <div style={styleObject}>About us</div>
        </div>
        <div>
          <div style={styleObject}>Blog</div>
          <div style={styleObject}>News</div>
        </div>
        <div>
          <div style={styleObject}>EduBlogs</div>
          <div style={styleObject}>Privacy policy</div>
        </div>
      </div>
    </div>
  );
}
function Home() {
  return <div>Home Component</div>;
}

function Contact() {
  return <div>Contact Component</div>;
}

function About() {
  return <div>About Component</div>;
}

function Services() {
  return <div>Services Component</div>;
}
export default App;
