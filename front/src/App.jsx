import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CsrfToken from './components/CsrfToken';
import axios from 'axios';
import { useEffect } from 'react';
import MyNavBar from './components/nav';
import AllItems from './pages/AllItems';
import IndivItem from './pages/IndivItem';

function App() {
  const [user,setUser]=useState(null)
  

  async function curr_user(){
    const response = await axios.get('/curr_user/')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }
  
  useEffect(()=>{
    curr_user()
  },[])

  return (
    <div className="App">
      {CsrfToken()}
      <MyNavBar/>
      <h3>Welcome {user && user.name}</h3>
      
      <Router>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='signup/' element={<SignUp/>} />
          <Route path='signin/' element={<SignIn/>} />
          <Route path='allitems/' element={<AllItems/>}/>
          <Route path='item/:id/' element={<IndivItem />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
