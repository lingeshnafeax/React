import { useState } from "react";
import "./GoalInput.css"
const GoalInput = (props) => {
  const [goalMsg, setGoalMsg] = useState("");
  const goalMsgHandler = (event) => {
    setGoalMsg(event.target.value);
  };
  const msgSubmit = (event) => {
    event.preventDefault();
    props.getGoal(goalMsg);
    setGoalMsg("")
  };

  return (
    <form onSubmit={msgSubmit}>
      <div>
        <label className="entergoal">Enter Goal</label>
      </div>
      <div>
        <input className="search" type="text" value={goalMsg} onChange={goalMsgHandler} required />
        <button className="submit" type="submit">Add Goal</button>
      </div>
    </form>
  );
};
export default GoalInput;
