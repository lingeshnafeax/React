import "./Card.css";
function Card(props) {
  const classes = "card " + props.className;   /* we can combine two class names */
  return <div className={classes}>{props.children}</div>;  /* Here classes will have card + the props classname */
}
export default Card;
