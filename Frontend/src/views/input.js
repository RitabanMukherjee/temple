import React from 'react';
import Characteristics from './characteristics';

class Input extends React.Component{
    
        constructor(props) {
            super(props);
            this.state = {value: '',
                            open: true,
                          visionList: [...this.props.visionList]};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
            this.handleClear = this.handleClear.bind(this);
            this.togglePanel = this.togglePanel.bind(this);
           this.handleGet = this.handleGet.bind(this);
          }
        
        

          togglePanel(event){
            this.setState({open: !this.state.open});

          }


          handleChange(event) {
            this.setState({value: event.target.value});
}
        
          handleSubmit(event) {
            event.preventDefault();
            this.setState({visionList: [...this.state.visionList, this.state.value]});
            this.setState({value: ''});

            this.props.onSubmit(this.state.visionList);
            }
                    
          

        

          handleEdit(lst){
            var userInput = prompt("Enter edited element");
            let newList = [...this.state.visionList];
            let element = newList.indexOf(lst);
            newList.splice(element, 1, userInput);
             this.setState({visionList: [...newList]});  
             
             this.props.onSubmit(this.state.visionList);
            }
        
            handleClear(event){
                let newList = [...this.state.visionList];
                newList = [];
                this.setState({visionList: [...newList]});
                event.preventDefault();

                this.props.onSubmit(this.state.visionList);
            }

            handleGet(lst){
              let element = this.state.visionList.indexOf(lst);
              this.props.onGet(element);
            }
          
          render(){
        return (
            <div className="Input">    
            <form onSubmit={this.handleSubmit}>
        <label>
         I AM : 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        
      </form>
    <button onClick={this.togglePanel}>{this.state.open ? "Hide" : "Show"} List</button>
        {this.state.open ? 
       (<div> <ol>{this.state.visionList.map((lst)=> <li>I AM {lst} <button label="Edit" onClick={this.handleEdit.bind(this,lst)}>Edit</button><button onClick={this.handleGet.bind(this,lst)}>Show in Notebook</button><Characteristics identity={lst} onSub={this.props.onSub}/></li>)}</ol>     <button label="clear" onClick={this.handleClear}>Clear Identity List</button> </div>) : null}
 
 </div>
        );
    }

}

export default Input;