import React from 'react';


class Main extends React.Component{
    render(){
        
        return (
            <div className="Main">
                <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}

export default Main;