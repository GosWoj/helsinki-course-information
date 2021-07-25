import React from "react";

const Total = ({ course }) => {
  const exercises = course.parts.map((part) => {
    return part.exercises;
  });

  const sum = exercises.reduce((a, b) => a + b);

  return <h2>Number of exercises {sum}</h2>;
};

export default Total;
