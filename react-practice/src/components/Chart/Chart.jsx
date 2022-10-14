import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const plotPointsValues = props.plotPoints.map((plotPoint) => {
    return plotPoint.value;
  });
  const totalMaximum = Math.max(...plotPointsValues);
  return (
    <div className="chart">
      {props.plotPoints.map((plotPoint) => (
        <ChartBar
          key={plotPoint.label}
          /*For a list of items we need unique keys here we have 12 labels each label represents each month. So we use labels to repesent keys*/
          value={plotPoint.value}
          maxValue={totalMaximum}
          label={plotPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
