import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
  }

  return data;
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: generateData(2.5, 12, 0.5),
    };
  }
// take data from db and update this.state.data use componentWillMount
  componentDidMount(){
    fetch('https://172.16.9.194/perform/getstartup_data.php',{
      method:'GET',
      headers:{
        accept:'application/json',
        'Content-Type':'application/json'
    },
    }).then((response)=>response.text())
    .then((responseJSON)=>{
        // update state with response data
        this.setState({data:generateData(responseJSON.start,responseJSON.end,responseJSON.step )})

    }).catch((error)=>console.log(error))
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="line"
            valueField="lineValue"
            argumentField="argument"
          />
          <SplineSeries
            name="spline"
            valueField="splineValue"
            argumentField="argument"
          />
        </Chart>
      </Paper>
    );
  }
}
