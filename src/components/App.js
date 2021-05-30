import React, { useEffect, useState } from "react";
import { authService } from "fbase";
import AppRouter from "components/Router";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedin, setLoggedin] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLoggedin(true);
      } else {
        setLoggedin(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedin={isLoggedin} /> : "is logging..."}
      <footer>&copy; {new Date().getFullYear()}Nwitter</footer>
    </>
  );
}

export default App;
