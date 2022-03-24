import Chart from "react-google-charts";

const Grafico = ({
  infoName,
  infoDescribe,
  infoUp,
  infoUpValue,
  infoDown,
  infoDownValue,
  infoTittle,
}) => {
  const data = [
    [infoName, infoDescribe],
    [infoUp, infoUpValue],
    [infoDown, infoDownValue],
  ];
  const options = {
    title: infoTittle,
    pieHole: 0.4,
    colors: ["#00a5ae", "#141155"],
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
};
export default Grafico;
