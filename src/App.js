import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Utilities/themeContext";
import { PeerProvider } from "./Utilities/peer";
import { Toaster } from "react-hot-toast";
import PreventSigninRoute from "./Utilities/preventSignRoute";
import PrivateRoute from "./Utilities/PrivateRoute";
import Toggle from "./Utilities/toggle";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import "./App.css";

function App() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <div className="bg-white dark:bg-dark-bg min-h-screen">
        <div className="  absolute right-12 top-0 p-2 ">
          <Toggle />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: theme === "dark" ? "#24242B" : "#FFFFFF",
                color: theme === "dark" ? "#FFFFFF" : "#5063F0",
              },
            }}
          ></Toaster>
        </div>
        <PeerProvider>
          <Routes>
            <Route path="/" element={<PreventSigninRoute />}>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route exact path="/dashboard" element={<Home />} />
            </Route>
          </Routes>
        </PeerProvider>
      </div>
    </>
  );
}

export default App;
