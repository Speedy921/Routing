import React, {Component} from 'react';
import { Button } from '@mui/material';

export default class Bcomponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handeleSubmit = this.handeleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    handeleSubmit(event){
       event.preventDefault()
       this.setState({
        input: this.state.input,
        items: [...this.state.items, this.state.input]
       });
    }

    render(){
        return(
            <div>
                <h1 className="hello">Hello World!</h1>
                <Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
                <form onSubmit={this.handeleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                
                <ul>
                    {this.state.items.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}