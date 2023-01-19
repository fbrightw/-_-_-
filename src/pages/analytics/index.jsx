import React, {useState} from 'react';
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2';
import TitleForm from "../../utils/TitleForm";
import {useSelector} from "react-redux";
import {animalSpecies} from "../../utils/data";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const barData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 3, 10],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1, 6, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const data = {
  labels: animalSpecies.map(el => el.name),
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

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

  const giftsStore = useSelector(state => state.giftArray.givenGifts);
  // const [speciesChartData, setSpeciesChartData] = useState(defaultData);

  console.log("ana", giftsStore)

  // function computeData() {
  //   let arrOfSpecies =  giftsStore.map(el => el.species);
  //   let arrSpeciesCount = new Map();
  //   for (let i = 0; i <= arrOfSpecies.length; i++) {
  //     if (arrSpeciesCount.has(arrOfSpecies[i]))
  //       arrSpeciesCount.set(arrOfSpecies[i], arrSpeciesCount.get(arrOfSpecies[i]) + 1);
  //     else
  //       arrSpeciesCount.set(arrOfSpecies[i], 1)
  //   }
  //   return arrSpeciesCount;
  // }

  // useEffect(() => {
  //   let stateCopy = [...speciesChartData];
  //   setSpeciesChartData(prev => {
  //     return {
  //       ...prev,
  //       datasets: [
  //           ...datasets[0],
  //           data: computeData()
  //       ]
  //     }
  //   })
  // })

  return (
      <>
        <TitleForm title="Распределение по сказочным животным"/>
        {/*{(data.datasets.data.length > 0 ?*/}
            <div style={{margin: 'auto', width: "40%", height: "40%"}}>
              <Pie data={data}/>
              <Bar options={options} data={barData} />;
            </div>
        {/*    :*/}
        {/*    null*/}
        {/*)}*/}
      </>
  );
}
