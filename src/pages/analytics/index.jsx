import React, {useEffect, useState} from 'react';
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2';
import TitleForm from "../../utils/TitleForm";
import {useSelector} from "react-redux";
import {barData, pieChartObject} from "../../utils/data";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export default function (props) {

  const givenGifts = useSelector(state => state.giftArray.givenGifts);
  const [speciesChartData, setSpeciesChartData] = useState(pieChartObject);
  const [barChartData, setBarChatData] = useState(barData);

  function handleMapValues(arr, map) {
    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i]))
        map.set(arr[i], map.get(arr[i]) + 1);
      else
        map.set(arr[i], 1)
    }
    return map
  }

  function computePieChartData() {
    let arrOfSpecies =  givenGifts.map(el => el.species);
    let speciesCountMap = new Map();
    return handleMapValues(arrOfSpecies, speciesCountMap);
  }

  function computeBarChartData(arr) {
    let mapByGender = new Map();

    return (new Map([...handleMapValues(arr, mapByGender)].sort((a, b) => a[1] - b[1])))
  }

  useEffect(() => {
    let mapLabelData = computePieChartData();
    let dataSetsObject = speciesChartData.datasets;
    dataSetsObject[0].data  = [...mapLabelData.values()];
    setSpeciesChartData(prevState => ({
      ...prevState,
      labels: [...mapLabelData.keys()],
      datasets: dataSetsObject
    }))
  }, [])

  useEffect(() => {
    let arrOfFemales = givenGifts.filter(el => el.gender === 'Ж').map(el => el.age);
    let arrOfMales = givenGifts.filter(el => el.gender === 'М').map(el => el.age);
    let females = computeBarChartData(arrOfFemales);
    let males = computeBarChartData(arrOfMales);
    let dataSetsArr = barChartData.datasets;
    dataSetsArr[0].data = [...males.values()];
    dataSetsArr[1].data = [...females.values()];
    setBarChatData(prevState => ({
      ...prevState,
      datasets: dataSetsArr
    }))
  },[])


  return (
      <>
        <TitleForm title="Распределение по сказочным животным"/>
        {(speciesChartData.datasets[0].data.length > 0 ?
            <div style={{margin: 'auto', width: "40%", height: "40%"}}>
              <Pie data={speciesChartData}/>
              <Bar options={options} data={barData} />;
            </div>
            :
            null
        )}
      </>
  );
}
