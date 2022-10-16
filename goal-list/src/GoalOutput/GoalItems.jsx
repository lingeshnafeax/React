const GoalItems = (props) => {
  const deleteList = () => {
    const deletedValue = props.value;
    props.delete(deletedValue);
  }
  return <p style={{fontSize:"20px",margin:"5px"}} onClick={deleteList}>{props.value}</p>;
};
export default GoalItems;
