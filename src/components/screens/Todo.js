import React from "react";

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items:[],
        };
    }
    renderitems = () =>{
        this.state.items.map((item) =>{
            return(
                <li key={item.id}>{item.title} <button>Delete</button> </li>
            );
        });
    }
    render(){
        return(
            <>
                <h1>My Todo Lists</h1>
                <ul>
                    {this.renderitems()}
                </ul>
                <input placeholder="New Item" />
                <button>Add New</button>
           </>
        );
    }

}

export default Todo;