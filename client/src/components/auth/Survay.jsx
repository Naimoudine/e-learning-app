import { useState } from "react";

export default function Survay() {
  const [role, setRole] = useState("");
  const [category, setCategory] = useState("");
  const [index, setIndex] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is your goal ?",
      answers: ["Teach", "Learn"],
    },
    {
      id: 2,
      question: "What is your area of expertise ?",
      answers: ["development", "marketing"],
    },
  ];

  return <div></div>;
}
