import React,{Component} from "react";
import ErrorPage from './ErrorPage';

export class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {error:null}
    }
    componentDidCatch(error){
        this.setState({
            error:error
        })
    }
    render(){
        if(this.state.error){
            return (
                <ErrorPage />
            )
        }
        return (
            this.props.children
        );
    }
}

export default ErrorBoundary