import React from 'react'

function Example () {
    const inputRef = React.useRef('');
    const submitHandler = e =>{
        e.preventDefault();
        alert(inputRef.current.value)
    }

    return (
        <div>
          <form onSubmit={submitHandler}>
            <input type="text" ref={inputRef} />
            <input type="submit" value="submit" />
          </form>
        </div>
    )
}
  


export default Example
