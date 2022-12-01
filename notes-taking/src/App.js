import {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import React, {useEffect} from 'react';
import Login from './componentes/no-auth/Login';
import Wall from './componentes/wall/Wall';
import { collection, getDocs } from "firebase/firestore"; 
import db from "./firebase/config"

function App() {
  useEffect(()=>{ 
    const getData =async()=>{
      const data= await getDocs(collection(db, 'usuarios'));
      console.log(data)
     }

     getData();
    }, []);

  const [user, setUser]=useState(undefined);
  return (
<Routes>
  {user? <Route path="/" element={<Wall/>}/> :<Route path="/" element={<Login setUser={setUser}/>}/>
  }
  </Routes>
   
  );
}

export default App;
