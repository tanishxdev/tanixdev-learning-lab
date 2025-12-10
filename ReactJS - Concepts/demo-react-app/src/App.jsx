import "./App.css";
import React, { useState } from "react";

// introduction
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import VirtualDomDemo from "./components/VirtualDomDemo";

// core JS integration
import JsxExample from "./components/JsxExample";

// components
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Card from "./components/Card";
import UserCard from "./components/UserCard";
import UserCard2 from "./components/UserCard2";
import DynamicContent from "./components/DynamicContent";
import ListData from "./components/ListData";
import Conditional from "./components/Conditional";

// state & events
import EventDemo from "./components/EventDemo";
import StateDemo from "./components/StateDemo";

// styling & UI system
import StyledBox from "./components/StyledBox";

// context & state management
import UserProfile from "./components/UserProfile";
import UserContext from "./context/UserContext";
import Parent from "./components/Parent";

// advanced topics
import AdvancedKeys from "./components/AdvancedKeys";
import Modal from "./components/Modal";

// hooks
import UseStateExample from "./components/UseStateExample";
import Example1_Counter from "./components/Example1_Counter";
import Example2_Toggle from "./components/Example2_Toggle";
import Example3_FormInput from "./components/Example3_FormInput";
import Example4_ShoppingCart from "./components/Example4_ShoppingCart";

import Effect1_PageLoad from "./components/Effect1_PageLoad";
import Effect2_Dependency from "./components/Effect2_Dependency";
import Effect3_API from "./components/Effect3_API";
import Effect4_Timer from "./components/Effect4_Timer";
import Example1_ReducerCounter from "./components/Example1_ReducerCounter";
import Example2_Bank from "./components/Example2_Bank";
import Example1_Focus from "./components/Example1_Focus";
import Example2_NoRender from "./components/Example2_NoRender";
import Example1_NoMemo from "./components/Example1_NoMemo";
import Example2_UseMemo from "./components/Example2_UseMemo";
import Example3_Filter from "./components/Example3_Filter";
import CounterComponent from "./components/CounterComponent";
import ToggleComponent from "./components/ToggleComponent";

// Framer Motion
// import AnimatedCard from "./components/framer-motion/AnimatedCard";
// import AnimatedButton from "./components/framer-motion/AnimatedButton";
// import HoverCard from "./components/framer-motion/HoverCard";
// import AnimatedModal from "./components/framer-motion/AnimatedModal";
// import AnimatedList from "./components/framer-motion/AnimatedList";
// import ScrollReveal from "./components/framer-motion/ScrollReveal";

// React Basics Project
import Counter from "./components/01. basics projects/01.Counter/Counter";
import Todo from "./components/01. basics projects/02.Todo/Todo";

// React state managemetn
import StateCounter from "./components/state management/StateCounter";
import PropsVsState from "./components/state management/PropsVsState";
import UseStateDeep from "./components/state management/UseStateDeep";
import ReRenderCycle from "./components/state management/ReRenderCycle";
import ControlledVsUncontrolled from "./components/state management/ControlledVsUncontrolled";
import StateUpdateQueue from "./components/state management/StateUpdateQueue";



const App = () => {
  const [showModal, setShowModal] = useState(false);
  const userName = "Tanish";

  return (
    <div>
      {/* <h1 className="font-bold text-blue-500 mt-5px mb-5px">React Concepts</h1> */}

      {/* 🌙 Introduction */}
      {/* <Greeting /> */}
      <Welcome />
      {/* <VirtualDomDemo /> */}

      {/* ⭐ Core JS Integration */}
      {/* <JsxExample /> */}

      {/* 💥 Components */}
      {/* 
      <Header />
      <Profile />
      <Footer />
      */}

      {/* <Card>
        <h3>User Details</h3>
        <p>Name : Tanish</p>
      </Card> */}
      {/* <UserCard name="Tanish" age="21" role="Frontend Dev" /> */}
      {/* <UserCard2 name="Tanish" age="21" role="Frontend Dev" exp="2 yoe" /> */}
      {/* <DynamicContent /> */}
      {/* <ListData /> */}
      {/* <Conditional /> */}

      {/* State & Events */}
      {/* <EventDemo /> */}
      {/* <StateDemo /> */}

      {/* 🌙 Styling & UI System */}
      {/* <StyledBox /> */}

      {/* ⭐ Context & State Management */}
      {/*
      <UserContext.Provider value={userName}>
        <Parent />
      </UserContext.Provider>
      */}
      {/* <UserProfile name="Tanish" age={21} role="Developer" /> */}

      {/* 💥 Advanced Topics */}
      {/* <AdvancedKeys /> */}
      {/*
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      */}

      {/* 👉 Hooks */}

      {/* useState */}
      {/* <UseStateExample /> */}
      {/* <Example1_Counter /> */}
      {/* <Example2_Toggle /> */}
      {/* <Example3_FormInput /> */}
      {/* <Example4_ShoppingCart /> */}

      {/* 🧠 useEffect() */}      
      {/* <div>
        <h1>useEffect Real Examples</h1>

        <Effect1_PageLoad />
      
        <hr />

        <Effect2_Dependency />
      
        <hr />

        <Effect3_API />
      
        <hr />

        <Effect4_Timer />
      </div> */}

      {/* 👉 useReducer() */}
        {/* <Example1_ReducerCounter />  */}
        {/* <Example2_Bank />  */}

      {/* 🧠 useRef() */}
      {/* <Example1_Focus />  */}
      {/* <Example2_NoRender />  */}

      {/* useMemo() */}
      {/* <Example1_NoMemo />  */}
      {/* <Example2_UseMemo /> */}
      {/* <Example3_Filter />  */}

      {/* ⭐ custom hooks */}
      {/* <CounterComponent />  */}
      {/* <ToggleComponent />  */}

      {/* 🌙 framer-motion */}
      {/* <AnimatedCard />
      <AnimatedButton />
      <HoverCard />  */}
      {/* <AnimatedModal /> */}
      {/* <AnimatedList /> */}
      {/* <ScrollReveal /> */}


      {/* ⭐ basic-projects */}
      {/* <Counter /> */}
      {/* <Todo /> */}

        {/* 🎯 state management */}
        {/* <StateCounter /> */}
        {/* <PropsVsState /> */}
        {/* <UseStateDeep /> */}
        {/* <ReRenderCycle /> */}
        {/* <ControlledVsUncontrolled /> */}
        {/* <StateUpdateQueue /> */}
      {/* Quiz */}
      {/* quiz content component if added later */}


      {/* 🌟 Interivew Question Practice */}
      
      {/* Session 1. React Basics (Core Foundation) */}
      {/* Session 1. React Basics (Core Foundation) */}
      
    </div>
  );
};

export default App;
