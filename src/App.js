// import logo from './logo.svg';
// import './App.css';
// import Try from './Try';
// import Card from './card';
// import Counter from './components/Counter';
// import Counter from './Counter';
// import User_Card from './components/User_Card';
// import Tic_Tac_Toe_game from './components/Tic_Tac_Toe_game';

// import { useState } from "react";
// import LogIn from "./components/LogIn";
// import LogOut from "./components/LogOut";
// import Navbar from "./components/navbar";
import EventHandler from "./components/EventHandler";

function App() {
  //const [isLoggedIn, setLoggedIn]=useState(false);
  // conditional rendring using if-else
      // if(isLoggedIn){
      //   return <LogOut/>
      // }
      // else{
      //   return <LogIn/>
      // }
  //conditional rendring using ternory operator
      // return(
      //   <div>
      //     {isLoggedIn ? <LogOut/> : <LogIn/>}
      //   </div>
      // )

  //conditional rendring using logical operator
    // return(
    //   <div>
    //     {isLoggedIn && <LogOut/>}
    //     {!isLoggedIn && <LogIn/>}
    //   </div>
    // )



  return (
    <div >
        {/* <Try/> 
        <Counter/>
        <Card /> 

        <User_Card name="user Name"/>
        <User_Card name="love babbar">
            <h1>hii</h1>
            <h2>this is react code</h2>
        </User_Card> */}

        {/* <Tic_Tac_Toe_game/> */}

        {/* <Navbar/> */}

        <EventHandler/>
    </div>
  );

}

export default App;
