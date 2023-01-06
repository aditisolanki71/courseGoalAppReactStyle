import React,{ useState } from "react";
import styles from "./CourseInput.module.css"
import Button from "../../UI/Button/Button.js"
//import styled from "styled-components";

// const FormControl = styled.div`
//    margin: 0.5rem 0;
//    & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }
  
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? "red" : "#ccc"};
//     background: ${props => (props.invalid ? "#ffd7d7" : "transparent")}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
  
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `
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
        <form className={styles['form-control']} onSubmit={handleButtonChange}>
        <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        {/* <FormControl invalid={!isValid}> */}
            <label>Add Course</label>
            <input type="text" value={enteredCourse} onChange={handleChange}/>
        {/* </FormControl> */}
        </div>
        <Button type="submit">Add Goal</Button>
    </form>
    )
}
export default CourseInput;