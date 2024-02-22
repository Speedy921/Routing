import React, {Component} from 'react';

export default class Acomponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        };
    }


    render(){
        return(
            <div>
               
                <h1>Hello,{this.props.name}</h1>

            </div>
        )
    }
}