import React from "react";

const HOC = (component) => {
    return (
        class extends React.Component {
            state = {
                auth : true
            }
            render(){
                return(
                    <div>
                        {this.state.auth ? <component name="loka" /> : <h1>Please Login</h1>}
                    </div>
                )
            }
        }
    )
}

export default HOC;