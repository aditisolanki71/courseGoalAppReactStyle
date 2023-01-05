import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList"
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput"
import './App.css';

function App() {
  const [courseGoal,setCourseGoal] = useState([
    {name: "React", id: "1"},
    {name: "Webpack", id: "2"},
    {name: "Microfrontend", id: "3"},
    {name: "Typescript", id: "4"},
    {name: "Javascript", id: "5"},
    {name: "GraphQL", id: "6"},
    {name: "Node", id: "7"}
  
  ]);
  const handleCourseInputSubmit = (course) => {
    setCourseGoal((previouseCourses) => [...previouseCourses,course])
  }
  const handleCourseGoalDelete = (id) => {
    console.log("id is",id);
    setCourseGoal(courseGoal.filter(course => course.id !== id));
  }
  return (
    <div>
      <div id="goals">
        <CourseGoalList onCourseGoalDelete={handleCourseGoalDelete} items={courseGoal}/>
      </div>
    </div>
  );
}

export default App;
