import React from "react";
import {connect} from 'react-redux';
import { increase, decrease } from "./Action";
import { type } from "@testing-library/user-event/dist/type";

const inc = ({count, increase, decrease}) =>{
    return(
        <div>
            Count From Inc Component: {count} <br></br>
            <button onClick={() => increase()}>Increment</button>
            <button onClick={() => decrease()}>decrease</button>
        </div>
    )
}
const mapStateToProps  = (state) =>({
    count :state
})
const mapDispatchToProps = (dispatch) =>{
    return {
        // dispatching plain actions.
        increase: () => dispatch({type: 'INCREMENT'}),
        decrease: () => dispatch({type: 'DECREMENT'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(inc); 