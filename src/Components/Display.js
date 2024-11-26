import React,{useContext, useState} from 'react';
import {store} from '../App';

const Display = () => {
    const [data,setData] = useContext(store);
    const [name,setName] = useState(' ');
    const submitHandler = e =>{
        e.preventDefault();
        setData([...data,{brandname:name}])
    }
  return (
    <div className='card'>
    <div className='card-body'>
      {data.map(item => <h3 className='card-title'>{item.brandname}</h3>)}
      <form className='form' onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='enter your brand'></input>
        <input type="submit" value="Add"></input>
      </form>
    </div>
  </div>
  )
}

export default Display
