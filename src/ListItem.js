import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "./Redux/action";

const listItem = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              {item.message}
              <button onClick={() => props.deleteItem(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});
const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(listItem);
