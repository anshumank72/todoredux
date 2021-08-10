import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { addItem } from "./Redux/action";
const App = (props) => {
  return (
    <div className="main_div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addItem(e.target.addtodo.value);
          e.target.addtodo.value = "";
        }}
      >
        <input placeholder="add todo" type="text" name="addtodo" />
        <button>Submit</button>
      </form>
      <ListItem />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (message) => dispatch(addItem(message)),
});

export default connect(null, mapDispatchToProps)(App);
