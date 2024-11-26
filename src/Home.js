import React,{useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Home = () => {
 let history =useHistory();
  return (
    <div>
       <center>
            <h4>Welcome to Home Page</h4>
            <button onClick={()=>history.push('./About')}>Log In</button>
      </center>
    </div>
  )
}

export default Home
