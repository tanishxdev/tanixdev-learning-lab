import "./App.css";

import { Card } from "./components/Card";
import { Greeting } from "./components/Greeting";
import Parent from "./components/Parent";
import { UserCard } from "./components/UserCard";
import { UserCard2 } from "./components/UserCard2";
import { UserCard3_ProtoTypes } from "./components/UserCard3_ProtoTypes";
import StyledBox from "./components/StyledBox";
import Effect1_PageLoad from "./components/Effect1_PageLoad";
import Effect2_Dependency from "./components/Effect2_Dependency";
import Effect3_API from "./components/Effect3_API";
import Reducer1_Counter from "./components/Reducer1_Counter";
import Example1_Focus from "./components/Example1_Focus";

const user = {
  name: "Tanish",
  age: 21,
  role: "Frontend Dev",
};

const warning = {
  title: "Warning Box",
  message: "This action is irreversible.",
};

const userName = "Tanishxdev";

function App() {
  return (
    <>
      {/* Module 02. Components */}
      {/* COMPONENTS */}
      <h1>Simple Compnents</h1>
      <Greeting />
      {/* PROPS */}
      <h1>Props Concepts</h1>
      <UserCard name="John" age={21} role={"Backend Dev"} />
      <UserCard name="Mike" age={25} role={"Frontend Dev"} />
      {/* PROP DESTRUCTURING */}
      <UserCard2 name="Sia" age={23} role="Vibe Coder" exp={2} />
      {/* PROPS CHILDREN */}
      <div>
        <h1>Props Children Concepts</h1>

        <Card>
          <h3>User Details</h3>
          <p>Name: Tanish</p>
        </Card>

        <Card>
          <h3>Warning Box</h3>
          <p>This action is irreversible.</p>
        </Card>

        {/* Passed as dynamic data as children */}
        <Card>
          <h3>User Details</h3>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Role: {user.role}</p>
        </Card>
        <Card>
          <h3>{warning.title}</h3>
          <p>{warning.message}</p>
        </Card>
      </div>
      {/* PropTypes */}
      {/* WRITE DATA */}
      <UserCard3_ProtoTypes name={21} age="twenty" role="Backend Dev" />
      {/* WRONG DATA */}
      <UserCard3_ProtoTypes name="Tanish" age={21} role="Frontend Dev" />

      {/* PROP DRILLING */}

      <div>
        <h1>Prop Drilling Example</h1>
        <Parent userName={userName} />
      </div>

      {/* PROP DRILLING SOLUTION CONTEXT API */}

      <div>
        <h1>Context API Example</h1>
        <Parent />
      </div>

      {/* Module 03. Styling in React */}
      <StyledBox />

      {/* Module 07. Hooks */}
      <Effect1_PageLoad />
      <Effect2_Dependency />
      <Effect3_API />

      <Reducer1_Counter />
      <Example1_Focus />
    </>
  );
}

export default App;
