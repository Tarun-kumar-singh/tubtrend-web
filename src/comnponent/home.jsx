import React from 'react';
import { Chart } from "react-google-charts";


const Home = (props) => {

const { value, index } = props
const chartData = [ 
  [
  'Time',
  'Republic Bharat',
  'Aaj Tak',
  'India Tv',
  "News18"
],

  ["6 : 00 pm", 5000, 5020, 1000, 5600],
  ["6 : 10 pm", 1000, 2000, 3200, 7800],
  ["6 : 20 pm", 4000, 6200, 3004, 5800],
  ["6 : 30 pm", 5000, 5020, 1000, 5600],
  ["6 : 40 pm", 1000, 2000, 3200, 7800],
  ["6 : 50 pm", 4000, 6200, 3004, 5800],
  ["7 : 00 pm", 5000, 5020, 1000, 5600],
  ["7 : 10 pm", 1000, 2000, 3200, 7800],
  ["7 : 20 pm", 4000, 6200, 3004, 5800],
  ["7 : 30 pm", 5000, 5020, 1000, 5600],
  ["7 : 40 pm", 1000, 2000, 3200, 7800],
  ["7 : 50 pm", 4000, 6200, 3004, 5800],
  ["8 : 00 pm", 5000, 5020, 1000, 5600],
  ["8 : 10 pm", 1000, 2000, 3200, 7800],
  ["8 : 20 pm", 4000, 6200, 3004, 5800],
  ["8 : 30 pm", 5000, 5020, 1000, 5600],
  ["8 : 40 pm", 1000, 2000, 3200, 7800],
  ["8 : 50 pm", 4000, 6200, 3004, 5800],
  ["9 : 00 pm", 4000, 6200, 3004, 5800],
  ["9 : 10 pm", 1000, 2000, 3200, 7800],
  ["9 : 20 pm", 4000, 6200, 3004, 5800],
  ["9 : 30 pm", 5000, 5020, 1000, 5600],
  ["9 : 40 pm", 1000, 2000, 3200, 7800],
  ["9 : 50 pm", 4000, 6200, 3004, 5800],
  ["10 : 00 pm", 4000, 6200, 3004, 5800]
]
    return(
        <div 
        
        className="App"
        hidden={value !== index}
        >
        <Chart
      width={'1000px'}
      height={'500px'}
      chartType="Line"
      loader={<div>Loading Chart</div>}
      data={
       chartData 
      }
      options={{
        chart: {
          title: 'Prime Time views on hindi news channels',
          subtitle: 'in thousands',
        },
      }}
      rootProps={{ 'data-testid': '3' }}
    />
        </div>
    )

}

export default Home;