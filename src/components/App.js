import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  console.log(authService.currentUser);
  const [isLoggedin, setLoggedin] = useState(false);
  return (
    <div>
      <AppRouter isLoggedin={isLoggedin} />
    </div>
  );
}

export default App;
