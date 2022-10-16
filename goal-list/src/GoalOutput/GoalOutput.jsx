import GoalItems from "./GoalItems";
const GoalOutput = (props) => {
    const goalList = props.values;
    const goalDelete = (value) => {
        const filteredList = goalList.filter((goal) => goal.goal !== value);
        props.delete(filteredList)
    };
    return goalList.map((goalItem) => (
        <GoalItems value={goalItem.goal} key={goalItem.key}delete={goalDelete}></GoalItems>
  ));
};
export default GoalOutput;
