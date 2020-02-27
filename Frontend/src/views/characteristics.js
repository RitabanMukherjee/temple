import React from 'react';

class Characteristics extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '',
        open:true,
                    characteristicsList: []};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(event){
        this.setState({open: !this.state.open});
    }

    handleSubmit(event){
    event.preventDefault();
    this.setState({characteristicsList: [...this.state.characteristicsList, this.state.value]}, () => 
    {
        this.setState({value: ''});
    });
    this.props.onSub(this.state.characteristicsList);
    }
    
    handleChange(event){
    this.setState({value: event.target.value});
    }
    
    handleEdit(item){
        let userInput = prompt("Enter the edited characteristic");
        let newList = [...this.state.characteristicsList];
        let element1 = newList.indexOf(item);
        newList.splice(element1, 1, userInput);
        this.setState({characteristicsList: [...newList]});
        this.props.onSub(this.state.characteristicsList);
        }

    handleClear(event){
        let newList = [];
        this.setState({characteristicsList: [...newList]});
        this.props.onSub(this.state.characteristicsList);
    }
    

    render(){
        return(
            <div>
                
                <form onSubmit={this.handleSubmit}>
                <label>
                    Enter a characteristic that fits the {this.props.identity} identity: 
                    <input type="text" value={ this.state.value } onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <button onClick={this.togglePanel}>{this.state.open ? "Hide":"Show"} List</button>
            { this.state.open ?
                (<div>
                <p>Characteristics that fit the {this.props.identity} identity : </p>
                <ol>
        {this.state.characteristicsList.map((item) => <li>I AM {item} <button onClick={this.handleEdit.bind(this, item)}>Edit</button></li>)}
                </ol>
            <button onClick={this.handleClear}>Clear Characteristics List</button>
            </div>) : null
    }
            </div>
        );
    }
}

export default Characteristics;