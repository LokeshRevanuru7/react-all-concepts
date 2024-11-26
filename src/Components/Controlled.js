import React from 'react';
import Test from './Test';

const Controlled = () => {
    const [name,setName] = React.useState('');
    const changeHandler = e =>{
        setName (e.target.value);
    }
  return (
    <div>
        <center>
            Name : {name} <br/>
            <input type="text" onChange={changeHandler}/> <br />
            <Test changeHandler={changeHandler}/>
        </center>
    </div>
  )
}

export default Controlled
