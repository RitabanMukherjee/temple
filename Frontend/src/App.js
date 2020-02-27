import React, { Component } from 'react';
import Main from './views/main.js';
import Input from './views/input.js';
import Notebook from './views/notebook.js';
import './App.css';

class App extends Component
constructor(props){
    super(props);
    this.state = 
    {
        {name:'Rohan',
        visionList: [],
        characteristicsList: [],
        id: ''};
    
        this.onGetNotebook=this.onGetNotebook.bind(this);
        this.onInputSubmit=this.onInputSubmit.bind(this);
        this.onCharacteristicsSubmit=this.onCharacteristicsSubmit.bind(this);
    }


    onInputSubmit = (visionList) => 
    {
        this.setState({visionList})
    }
    onCharacteristicsSubmit = (characteristicsList) =>
    {
        this.setState({characteristicsList})
    }
    onGetNotebook = (id) => 
    {
        this.setState({id})
    }

    render()
    {
        return (
            <div className="whole">
                <div  className="nav">
                <Main name={this.state.name}/>
                </div>
                <div className="split left">
                <Input visionList={this.state.visionList} onSubmit={this.onInputSubmit} onGet={this.onGetNotebook} onSub={this.onCharacteristicsSubmit}/>
                </div>
                <div className="split right">
                    { this.state.id !== null ? 
                    <Notebook characteristicsList={this.state.characteristicsList} onSub={this.onCharacteristicsSubmit} id={this.state.id} visionList={this.state.visionList}/>
                    : null}
                    </div>
            </div>
        )
    }
}

export default App;
