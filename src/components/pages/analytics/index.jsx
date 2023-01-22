import React, {useEffect, useState} from 'react';
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2';
import TitleForm from "../../../utils/TitleForm";
import {useSelector} from "react-redux";
import {barData, pieChartObject} from "../../../utils/data";
import renderIf from "../../../utils/renderIf";

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

  function noname(gender) {
    let array = givenGifts.filter(el => el.gender === gender).map(el => el.age);
    let map = computeBarChartData(array);

    let baseArray = new Array(11).fill(0);
    for (let [key, value] of map) {
      baseArray[parseInt(key) - 2] = value;
    }

    return baseArray
  }

  function computeDatasetArray() {

    let males = noname('М');
    let females = noname('Ж');

    let datasetsArray = barChartData.datasets;
    datasetsArray[0].data = males;
    datasetsArray[1].data = females;

    return datasetsArray;
  }

  useEffect(() => {
    let datasetArray = computeDatasetArray();
    setBarChatData(prevState => ({
      ...prevState,
      datasets: datasetArray
    }))
  },[])

  return (
      <>
        <TitleForm title="Распределение по сказочным животным"/>
        {renderIf(speciesChartData.datasets[0].data.length > 0,
            <div style={{margin: 'auto', width: "40%", height: "40%"}}>
              <Pie data={speciesChartData}/>
              <Bar options={options} data={barData} />
            </div>
        )}
      </>
  );
}
