import React,{ useState } from "react";
import "./CourseInput.css"
import Button from "../../UI/Button/Button.js"
import styled from "styled-components";

const CourseInput = (props) => {
    const [enteredCourse, setEnteredGoal] = useState();
    const [isValid, setIsValid] = useState(true);

    const handleButtonChange = (e) => {
        e.preventDefault();
        console.log("submit called",enteredCourse?.trim())
        //validation
        if(enteredCourse?.trim().length === 0 || enteredCourse === undefined) {
            console.log("if")
            setIsValid(false);
            return;
        }
        else {
            console.log("else")
            setIsValid(true)
            props.onCourseInpurSubmit({name: enteredCourse, id: Math.random()})
            setEnteredGoal("")
        }
    }
    const handleChange = e => {
        if(e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredGoal(e.target.value)
    }
    return (
        // <form className="form-control" onSubmit={handleButtonChange}>
        //     <div>
        //      <label>Add Course</label>
        //      <input type="text" value={enteredCourse} onChange={(e) => setEnteredGoal(e.target.value)}/>
        //     </div>
        //<Button type="submit">Add Goal</Button>
        // </form>
        <form onSubmit={handleButtonChange}>
        <div className="form-control">
            <label>Add Course</label>
            <input type="text" value={enteredCourse} onChange={handleChange}/>
       </div>
        <Button type="submit">Add Goal</Button>
    </form>
    )
}
export default CourseInput;