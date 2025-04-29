// import logo from './logo.svg';
// import './App.css';
// import Try from './Try';
// import Card from './card';
// import Counter from './components/Counter';
// import Counter from './Counter';
// import User_Card from './components/User_Card';
// import Tic_Tac_Toe_game from './components/Tic_Tac_Toe_game';
// import Event_propogation from './components/Event_propogation';
// import Form from './components/Form';
// import { useState } from "react";
// import LogIn from "./components/LogIn";
// import LogOut from "./components/LogOut";
// import Navbar from "./components/navbar";
// import EventHandler from "./components/EventHandler";
// import List from "./components/List";
// import { createContext, useState } from "react";
// import SetTimer from "./components/SetTimer";
// import UseEffect from "./components/UseEffect";
// import Toggle from "./Projects/Toggle";

// redux
    // import { increment,decrement,reset } from "./features/counterSlice";
    // import { useSelector, useDispatch } from 'react-redux'


// import Api from "./components/Api";
import Todo from "./Projects/Todo/Todo";
// import Toggle from "./Projects/ToggleSwitch/Toggle";

//useContext
// import { createContext, useState } from "react";
// import ChildA from "./components/ChildA";
// const UserContext= createContext();
// const ChangeTheme= createContext();

function App() {

  //Todo list
  return(
    <div>
      <Todo/>
      {/* <Api/> */}
    </div>
  )






  //useContext
  // const [user,setUser]=useState({
  //   name:"Ram",
  //   age:"27"
  // });
  // const [theme,setTheme]= useState('light');



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


    // redux
        // const count= useSelector((state)=>state.counter.value)
        // const dispatch=useDispatch()
        // function handleIncrementClick(){
        //   dispatch(increment());

        // }
        // function handleDecrementClick(){
        //   dispatch((decrement()));
        // }
        // function handleResetClick(){
        //   dispatch((reset()));
        // }

  // return(

    // <div >
    //     {/* <Try/> 
    //     <Counter/>
    //     <Card /> 

    //     <User_Card name="user Name"/>
    //     <User_Card name="love babbar">
    //         <h1>hii</h1>
    //         <h2>this is react code</h2>
    //     </User_Card> */}

    //     {/* <Tic_Tac_Toe_game/> */}

    //     {/* <Navbar/> */}

    //     {/* <EventHandler/> */}
    //     {/* <List/> */}

    //     {/* <UseEffect/> */}

    //     {/* <SetTimer/> */} 
    // </div> 



    // useContext
    // <div>
    //   {/* <Event_propogation/> */}
    //   {/* <Form/> */}
    //   <UserContext.Provider value={user}>
    //     <ChangeTheme.Provider value={{theme,setTheme}}>
    //       <div style={{width:"500px", height:"300px", backgroundColor:theme==='light'?'beige':'black', color:theme==='light'?'black':'white'}}>    
            
    //         <ChildA/> 

    //       </div>
    //     </ChangeTheme.Provider>
    //   </UserContext.Provider>
    // </div>

  // )

  // return(
  //   <div>
  //     {/* <Toggle/> */}
  //     <div style={{
  //       width:'300px',
  //       height:'300px',
  //       backgroundColor:'skyblue',
  //       display:"flex",
  //       flexDirection:'column',
  //       justifyContent:'space-evenly',
  //       alignItems:'center',
  //       margin:'auto',
  //       marginTop:'200px',
  //       padding:'auto',
  //       gap:'3px',
  //     }}>
  //       <button onClick={handleIncrementClick} style={{
  //         width:'60px',
  //         height:'30px',
  //         display:'flex',
  //         flexDirection:'center',
  //         justifyContent:'center',
  //         alignItems:'center',
  //         backgroundColor:'yellow',
  //         fontSize:'1.5rem'
  //       }}>+</button>

  //       <p style={{
  //         fontSize:'2rem',
  //         fontWeight:'bold',
  //         display:'flex',
  //         flexDirection:'center',
  //         justifyContent:'center',
  //         alignItems:'center',
  //       }}>count: {count}</p>
        
  //       <button onClick={handleDecrementClick} style={{
  //         width:'60px',
  //         height:'30px',
  //         display:'flex',
  //         flexDirection:'center',
  //         justifyContent:"center",
  //         alignItems:'center',
  //         backgroundColor:'yellow',
  //         fontSize:'1.5rem',

  //       }}>-</button>

  //       <button onClick={handleResetClick} style={{
  //         width:'60px',
  //         height:'30px',
  //         display:'flex',
  //         flexDirection:'center',
  //         justifyContent:'center',
  //         alignItems:'center',
  //         backgroundColor:'yellow',
  //         fontSize:'1.2rem',
  //         // margin:'auto'
  //       }}>Reset</button>
  //     </div>
  //   </div>
  // );


  //toggle switch
        // return(
        //   <div>
        //     <Toggle/>
        //   </div>
        // )

}

export default App;

//useContext
// export {UserContext}
// export{ChangeTheme}
