import React from "react";
import "./CourseGoalItem.css"

const CourseGoalItem = (props) => {
    const handleDelete = () =>{
        props.onDelete(props.id)
    }
    return (
        <li className="goal-item" onClick={handleDelete}>{props.children}</li>
    )
}
export default CourseGoalItem;