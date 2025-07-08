import React from "react";
import Counter from "./A1.components/counter";
import Header from "./A1.components/header";
import UserProfile from "./A1.components/userprofile";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <Counter />
      <hr />
      <Header />
      <UserProfile
        name="Poojithraj Dunde"
        email="poojithrajdunde@gmail.com"
        age={23}
      />
    </div>
  );
}

export default App;
