import GoalInput from "./GoalInput/GoalInput";
import GoalOutput from "./GoalOutput/GoalOutput";
import { useState } from "react";
import "./App.css";
const DUMMYGOAL = [
  {
    goal: "",
    key: "",
  },
];
function App() {
  const [goalList, setGoal] = useState(DUMMYGOAL);
  const goalHandler = (goalMsg) => {
    setGoal((prevState) => {
      return [
        ...prevState,
        {
          goal: goalMsg,
          key: (Math.random() * 10).toString(),
        },
      ];
    });
  };
  const deletedList=(filteredList) => {
    setGoal(filteredList)
  }
  return (
    <div>
      <GoalInput getGoal={goalHandler} />
      <GoalOutput delete={deletedList} values={goalList}></GoalOutput>
    </div>
  );
}

export default App;
