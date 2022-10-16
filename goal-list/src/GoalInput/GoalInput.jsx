import { useState } from "react";
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
      <label>Enter Goal</label>
      <input type="text" value={goalMsg} onChange={goalMsgHandler} required/>
      <button type="submit" >Add Goal</button>
    </form>
  );
};
export default GoalInput;
