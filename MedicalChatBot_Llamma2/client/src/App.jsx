import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screen/Home";
import About from "./Screen/About";
import { NewsProvider } from "./ContexApi/Newsprovider";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ContactUs from "./Screen/Contact";
import Loader from "./components/Loader";
import NEWS from "./Screen/NEWS";
import Chatbot from "./components/Chatbot";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function App() {
  const [loading, setLoading] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);

  const [token, settoken] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.jsontoken) {
      console.log("yes there is token: ", user.jsontoken);
      settoken(user.jsontoken);
    }
  }, [token]);

  useEffect(() => {
    // Simulate loading time for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <NewsProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/news" element={<NEWS />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/chatbot" element={<Chatbot />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/chatbot" element={<Chatbot/>}/>
                </Routes>
              </BrowserRouter>
        </NewsProvider>
      )}
    </>
  );
}

export default App;