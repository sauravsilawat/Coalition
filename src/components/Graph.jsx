import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

import up from "../assets/icon/ArrowUp.svg"
import down from "../assets/icon/ArrowDown.svg"

const Graph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [monthsToShow, setMonthsToShow] = useState(6);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const filteredData = data.slice(0, monthsToShow);

    const labels = filteredData.map(entry => `${entry.month.substring(0, 3) + ","} ${entry.year}`);

    const systolicData = filteredData.map(entry => entry.blood_pressure.systolic.value);
    const diastolicData = filteredData.map(entry => entry.blood_pressure.diastolic.value);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Systolic',
          backgroundColor: '#E66FD2',
          borderColor: '#C26EB4',
          data: systolicData,
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
          pointRadius: 6, // Increase point size
          pointHoverRadius: 10,
          borderWidth: 3, // Set line width
          pointBorderWidth: 1,
          pointBorderColor: 'white', // Point border color
        },
        {
          label: 'Diastolic',
          backgroundColor: '#8C6FE6',
          borderColor: '#7E6CAB',
          data: diastolicData,
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
          pointRadius: 6, // Increase point size
          pointHoverRadius: 10,
          borderWidth: 3, // Set line width
          pointBorderWidth: 1,
          pointBorderColor: 'white', // Point border color
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false, // Show legend
        },
      },
      scales: {
        x: {
          grid: {
            display: false, // Remove vertical grid lines
          },
        },
      },
      onClick: (e) => {
        const canvasPosition = getRelativePosition(e, chartInstance.current);

        const dataX = chartInstance.current.scales.x.getValueForPixel(canvasPosition.x);
        const dataY = chartInstance.current.scales.y.getValueForPixel(canvasPosition.y);

        console.log(`Data X: ${dataX}, Data Y: ${dataY}`);
      },
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: options,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, monthsToShow]);

  return (
    <div className='flex bg-[#F4F0FE] mt-4 rounded-xl p-4 gap-4'>

      <div className='w-[70%]'>
        <div className='flex justify-between items-center mb-3'>
          <h1 className='text-base pl-1 font-manrope font-800'>Blood Pressure</h1>
          <label className='text-sm font-manrope font-500 pr-8'>
            Last
            <select className='bg-[#F4F0FE]' onChange={(e) => setMonthsToShow(Number(e.target.value))} value={monthsToShow}>
              <option value={1}>1 month</option>
              <option value={3}>3 months</option>
              <option value={6}>6 months</option>
              <option value={12}>12 months</option>
            </select>
          </label>
        </div>
        <canvas ref={chartRef} />
      </div>

      <div className='w-[30%] flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='flex font-manrope font-800 text-[14px] items-center gap-2'><span className='bg-[#E66FD2] rounded-full w-3 h-3'></span>Systolic</h1>
          <h1 className='text-[20px] font-manrope font-700'>160</h1>
          <p className='flex items-center gap-2 font-manrope font-500 text-[14px]'><img src={up} alt="icon"></img>Higher than Average</p>
        </div>
        <figure className='bg-[#CBC8D4] h-[1px] w-full'></figure>
        <div className='flex flex-col gap-1'>
          <h1 className='flex font-manrope font-800 text-[14px] items-center gap-2'><span className='bg-[#8C6FE6] rounded-full w-3 h-3'></span>Diastolic</h1>
          <h1 className='text-[20px] font-manrope font-700'>78</h1>
          <p className='flex items-center gap-2 font-manrope font-500 text-[14px]'><img src={down} alt='icon'></img>Lower than Average</p>
        </div>
      </div>

    </div>
  );
};

export default Graph;
