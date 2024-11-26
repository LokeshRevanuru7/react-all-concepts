import React from 'react'

const Componentb1 = () => {
    const [count,setCount] = React.useState(0);
  return (
    <div>
      <hr />
      <center>
        <h1> ComponentB : {count}</h1>
        <button onClick={() =>setCount(count+1)}>ComponentB Increment</button>
      </center>
    </div>
  )
}

export default Componentb1
