import React from "react";
import { useState } from "react";
import {connect} from "react-redux";

function Home({toDos}){
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        console.log(text)
    }
    return(
        <div>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                <li>{JSON.stringify(toDos)}</li>
            </ul>
        </div>
    );
}

function mapStateToProps(state, ownProps){
    return {toDos:state}
}

export default connect(mapStateToProps) (Home);