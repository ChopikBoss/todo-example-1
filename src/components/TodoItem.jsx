import React, { memo } from "react";
import PT from "prop-types";
import CN from "classnames";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux"
import { deleteTodo, editTodo, toggleTodo } from "../store/actions"
import "./TodoItem.scss";

const TodoItem = memo(({ done = false, title, idx }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteTodo(idx))
  }
  const handleEditClick = () => {
    dispatch(editTodo(idx))
  }
  const handleToggleClick = () => {
    dispatch(toggleTodo(idx))
  }
  return (
    <div
      className={CN("todo_item", "pt-1", "pb-1", {
        checked: done,
      })}
    >
      <div className="todo_item__left_side" onClick={handleToggleClick}>
        <FontAwesomeIcon className="todo_item__check" icon={faCheckCircle} />
      </div>
      <div className="todo_item__content_wrapper">
        {done ? (
          <input className="todo_item__input" value={title} />
        ) : (
            <h1 className="todo_item__title">{title}</h1>
          )}
      </div>

      <div className="todo_item__right_side">
        <Button color="danger" onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>

      <div className="todo_item_edit">
        <input className="todo_item_edit" value={title} />
        <Button onClick={handleEditClick}>Edit</Button>

      </div>

    </div>
  );
});

TodoItem.propTypes = {
  idx: PT.number.isRequired,
  title: PT.string.isRequired,
  done: PT.bool
};

export default TodoItem;
