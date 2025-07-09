import React from "react";
import Counter from "./A1.components/counter";
import Header from "./A1.components/header";
import UserProfile from "./A1.components/userprofile";
import UserList from './UserList';
import Timer from './Timer';
import TaskList from './TaskList';
import Wrapper from './Wrapper';

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
      <Wrapper>
        <h2>1. Users from API</h2>
        <UserList />
      </Wrapper>
      
      <Wrapper>
        <h2>2. Timer</h2>
        <Timer />
      </Wrapper>
      
      <Wrapper>
        <h2>3. Task List</h2>
        <TaskList />
      </Wrapper>
      
    </div>
  );
}

export default App;
