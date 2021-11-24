import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators} from "../store";

function Home({ toDos, addToDo}) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispetch){
    return {
        addToDo: text => dispetch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
