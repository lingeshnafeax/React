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
    <div className="goal">
      <div className="goal-inner">
        <GoalInput getGoal={goalHandler} />
      </div>
      <div className="output">
        <GoalOutput delete={deletedList} values={goalList}></GoalOutput>
      </div>
    </div>
  );
}

export default App;
