import React from "react";

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items:[],
            input :"",
        };
    }
    removeItem = (id) =>{
        console.log(id);
        let new_items = this.state.items.filter((item)=> item.id !== id);
        this.setState({ items: new_items });
    };
    renderitems = () =>{
        return this.state.items.map((item) => (
               <li key={item.id}>{item.title} <button onClick = { () => this.removeItem(item.id)} >Delete</button> </li>
        ));
    };

    upadateItem = () =>{
        let new_item = {
            id : this.state.items.length,
            title : this.state.input,
        };
        if(this.state.input){
            this.setState({
                items:[...this.state.items, new_item],
                input:"",
            });
        }
    };

    render(){
        return(
            <>
                <h1>My Todo Lists</h1>
                <ul>
                    {this.renderitems()}
                </ul>
                <input placeholder="New Item"
                 value={this.state.input}
                 onChange={(e) => this.setState({input : e.target.value })} />
                <button onClick={this.upadateItem}>Add New </button>
           </>
        );
    }

}

export default Todo;