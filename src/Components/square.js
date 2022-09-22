import React from "react";

// class Square extends React.Component {
    
//     constructor(props) {
//         super(props);
//         // in js classes, always need to call the parent (super) class constructor.
        
//         this.state = {
//             value: null
//         };
//         // state represents the memory of a component, i.e. how it can "remember" things.
//         // note: we aren't using the square's state for anything, we uplifted it's state management to the board component,
//         // and pass it down through the props.
//     }

//     whenClicked()
//     {
//         console.log("do something else maybe...");
//         this.props.onClick();
//     }
    
//     render() {
//         return (
//         <button className="square" onClick={() => this.whenClicked()}>
//             {this.props.value}
//         </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}
// In React, function components are a simpler way to write components that only contain a render method and don’t have their own state.
// Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered.
// Function components are less tedious to write than classes, and many components can be expressed this way.
// Functions components generally receive props and return JSX.

export default Square;
