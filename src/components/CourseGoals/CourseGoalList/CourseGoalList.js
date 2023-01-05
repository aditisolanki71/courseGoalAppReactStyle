import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem"
import "./CourseGoalList.css"
const CourseGoalList = (props) => {
    const {items} = props;
   
    return (
        <ul className="goal-list">
            {items.map((item) => (
                <CourseGoalItem key={item.id} id={item.id} onDelete={props.onCourseGoalDelete}>
                    {item.name}
                </CourseGoalItem>
                ))
            }
        </ul>
    )   
}
export default CourseGoalList;