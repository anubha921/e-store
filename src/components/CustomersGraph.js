import React from 'react';
import {
    Chart,
    ArcElement,
    Legend
} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';

Chart.register(
    ArcElement,
    Legend
)
const CustomersGraph = () => {
    const data = {
        datasets: [
            {
                label: 'Poll',
                data: [3,6,9],
                backgroundColor: [
                    '#f23c9c','#7c4fea','#f2efff'
                ],
            }
        ]
    }
    
   
const sliceThickness = {
    id: 'sliceThickness',
    beforeDraw(chart, plugins){
        let sliceOuterThicknessPixel = [260, 270, 300];
        sliceOuterThicknessPixel.forEach((thickness, index)=>{
            chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thickness) * 100;
        })
        let sliceInnerThicknessPixel = [454, 420, 400];
        sliceInnerThicknessPixel.forEach((thickness, index)=>{
            chart.getDatasetMeta(0).data[index].innerRadius = (chart.chartArea.width / thickness) * 100;
        })
        const {ctx,data} = chart;
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const text = "65%\nTotal New\nCustomers";
        const lineheight = 20;
        const lines = text.split("\n");
        lines.forEach((item,i)=>{
            ctx.fillText(item,xCoor,130 + (i * lineheight));
        })
    }          
}
const options = {
    elements: {
        arc: {
            borderWidth: 0
        }
    }
}
  return (
    <div style={{margin:"20px"}}>
        <h3>Customers</h3>
        <span>Customers that buy products</span>
      <div className='doughnut-graph'>
        <div>
        <Doughnut 
            data={data} 
            options={options}
            plugins={[sliceThickness]}
           />
        </div>
      </div>
    </div>
  )
}

export default CustomersGraph
