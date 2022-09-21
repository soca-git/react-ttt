import React from "react";

class Square extends React.Component {
    
    constructor(props) {
        super(props);
        // in js classes, always need to call the parent (super) class constructor.

        console.log(props);
        // props is saved as a property of this object when the object is initialized.
        
        this.state = {
            value: null
        };
        // state represents the memory of a component, i.e. how it can "remember" things.
    }

    whenClicked()
    {
        this.logClick(this.props.number);
        this.setState({value: 'X'});
    }
    
    logClick(i) {
        console.log(`clicked square ${i}!`);
    }

    render() {
        return (
        <button className="square" onClick={() => this.whenClicked()}>
            {this.state.value}
        </button>
        );
    }
}

export default Square;
