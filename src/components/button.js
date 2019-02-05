import React from 'react';


export default class Button extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: "original title"
        }
    }

    onClick(){
        this.setState({title: "look, it has a new dynamic value on click"})
    }

    render() {
        return(
            <button onClick={() => { this.onClick()}}>{this.state.title}</button>
        )
    }
}