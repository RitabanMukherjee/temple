import React from 'react';

class Notebook extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '',
                        open: true};
      }
    render(){
        return(
            <div className="note">
                <div className="spl l">
        <p>I AM: {this.props.id}</p>
                <ol>
                    
        {this.props.id !== null ?
        this.props.characteristicsList.map((charac)=><li>{charac}</li>)
        : null
        }
        
                </ol>
                </div>
                <div className="spl c">
                
                </div>
                <div className="spl r">
                
                </div>
                
            </div>
        );
    }
}

export default Notebook;