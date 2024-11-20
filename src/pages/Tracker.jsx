import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Chart } from "chart.js/auto";

const Tracker = () => {
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  });

  const [showError, setShowError] = useState(false);
  const [displayChart, setDisplayChart] = useState(false);
  const [chartType, setChartType] = useState("pie");
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [rincian, setRincian] = useState({
    cards: [],
  });

  const incrementValue = (key) => {
    setValues((prev) => ({
      ...prev,
      [key]: (parseInt(prev[key], 10) || 0) + 1,
    }));
  };

  const decrementValue = (key) => {
    setValues((prev) => ({
      ...prev,
      [key]: (parseInt(prev[key], 10) || 0) > 0 ? (parseInt(prev[key], 10) || 0) - 1 : 0,
    }));
  };

  const handleInputChange = (key, value) => {
    if (value === "") {
      setValues((prev) => ({
        ...prev,
        [key]: 0, // Set ke 0 jika input kosong
      }));
    } else {
      const intValue = parseInt(value, 10);
      setValues((prev) => ({
        ...prev,
        [key]: isNaN(intValue) ? 0 : intValue,
      }));
    }
  };

  const calculateTotal = () => {
    return Object.values(values).reduce((a, b) => a + (parseInt(b, 10) || 0), 0);
  };

  const handleTrack = () => {
    const totalValues = calculateTotal();

    if (totalValues === 0) {
      setShowError(true);
      setDisplayChart(false);
    } else {
      setShowError(false);
      setDisplayChart(true);
      generateChart();
    }
  };

  const getData = () => {
    let trash = [];
    let objects = [
      "Bottle Plastic",
      "Plastic Bags",
      "Straws",
      "Food Packaging",
    ];
    let percentConvert = [];
    let sigma = 0;

    const multipliers = {
      value1: 480,
      value2: 220,
      value3: 93,
      value4: 150,
    };

    trash = Object.keys(values).map(
      (key) => (parseInt(values[key], 10) || 0) * multipliers[key]
    );
    sigma = trash.reduce((a, b) => a + b, 0);

    percentConvert = trash.map((t) =>
      sigma > 0 ? ((t / sigma) * 100).toFixed(2) : 0
    );

    const sortedTrash = percentConvert.map((value, index) => ({
      value: parseFloat(value),
      object: objects[index],
      pcs: trash[index],
    }));

    sortedTrash.sort((a, b) => b.value - a.value);

    const rincianCards = sortedTrash
      .filter((item) => item.pcs > 0)
      .map((item, index) => ({
        id: index + 1,
        title: item.object,
        percent: item.value,
        pcs: item.pcs,
        compos: trashCompos(item.pcs),
        save: (item.pcs / 12).toFixed(0),
      }));

    setRincian({ cards: rincianCards });

    return {
      sortedValues: sortedTrash.map((item) => item.value),
      sortedObjects: sortedTrash.map((item) => item.object),
    };
  };

  const trashCompos = (a) => {
    const perSampah = a / 12;
    const perbulan = perSampah * 450;
    return perbulan.toFixed(0);
  };

  const generatePieChart = (sortedValues, sortedObjects) => {
    if (chartInstance) chartInstance.destroy();

    const newChart = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: sortedObjects,
        datasets: [
          {
            data: sortedValues,
            backgroundColor: [
              "#FF6969",
              "#FFBA69",
              "#FFDE69",
              "#F3FF69",
              "#D3FF56",
              "#82FF56",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    setChartInstance(newChart);
  };

  const generateChart = () => {
    const { sortedValues, sortedObjects } = getData();
    if (chartType === "pie") {
      generatePieChart(sortedValues, sortedObjects);
    }
  };

  useEffect(() => {
    if (displayChart) {
      generateChart();
    }
  }, [displayChart, chartType]);

  return (
    <div className="w-full pt-16 bg-cover bg-center flex flex-col justify-center items-center gap-10">
      <div className="p-4 rounded-box max-w-full md:max-w-2xl">
        {showError && (
          <div className="alert alert-error mb-6 flex items-center p-3 bg-red-100 text-red-700 rounded-lg fixed">
            <span>Error! Please Enter at least 1 item.</span>
          </div>
        )}
        <ul className="flex flex-col items-center gap-12 lg:gap-16 mb-9 text-black">
          {["Bottle Plastic", "Plastic Bags", "Straws", "Food Packaging"].map(
            (item, index) => (
              <li
                key={index}
                className="flex flex-col justify-between gap-6 md:gap-10 items-center"
              >
                <p className="text-xl font-semibold text-center text-black dark:text-white">
                  How Much{" "}
                  <span className="text-secondary dark:text-primary font-bold">{item}</span> do
                  You Use?
                </p>
                <div className="flex items-center justify-center gap-2 bg-opacity-35 bg-base-300 p-2 rounded-box w-full max-w-xs md:max-w-md">
                  <button
                    onClick={() => decrementValue(`value${index + 1}`)}
                    className="text-black dark:text-white text-lg"
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    placeholder="0"
                    value={values[`value${index + 1}`]}
                    onChange={(e) =>
                      handleInputChange(`value${index + 1}`, e.target.value)
                    }
                    className="w-16 text-lg font-medium bg-transparent text-center appearance-none outline-none text-black dark:text-white"
                  />
                  <button
                    onClick={() => incrementValue(`value${index + 1}`)}
                    className="text-black dark:text-white text-lg"
                  >
                    <FaPlus />
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
        <div className="mt-16">
          <button
            onClick={handleTrack}
            className="bg-third dark:bg-primary text-white p-4 w-full rounded-box"
          >
            Track Waste
          </button>
        </div>
      </div>

      {/* Rincian Section */}
      {rincian.cards.length > 0 && (
        <section
          className="min-h-screen py-12 md:py-24 px-7 md:px-16 w-full"
          id="rincian"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center pb-12 text-black dark:text-white">
            Details Tracking Waste
          </h1>
          <div className="mt-8 lg:mt-12 flex flex-col gap-16">
            {rincian.cards.map((card) => (
              <div
                key={card.id}
                className="bg-slate-300/30 w-full flex flex-col gap-6 md:gap-8 p-4 md:p-8 py-6 rounded-box"
              >
                {/* Head */}
                <div className="bg-opacity-60 p-3 px-4 md:px-6 rounded-box flex justify-between items-center">
                  <p className="text-[25px] md:text-3xl lg:text-4xl font-semibold text-black dark:text-white">
                    {card.title}
                  </p>
                </div>
                <div className="lg:flex justify-between items-center lg:gap-12">
                  {/* Body */}
                  <div className="flex flex-col bg-opacity-60 rounded-box py-5 md:py-8 lg:px-10 items-center gap-3 md:gap-8">
                    {/* Number */}
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center bg-third min-w-48 md:min-w-96 min-h-48 md:min-h-96 rounded-full text-center">
                        <p className="text-2xl md:text-3xl font-medium text-white">
                          {card.percent}%
                        </p>
                      </div>
                      <div className="hidden justify-center items-center border-2 md:border-4 border-gray-500 bg-white min-w-48 md:min-w-96 min-h-48 md:min-h-96 rounded-full text-center">
                        <p className="dark:text-white text-black text-lg md:text-xl flex flex-col">
                          <span className="text-2xl md:text-3xl font-medium">
                            {card.pcs}
                          </span>
                          Pcs / year
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Deskripsi */}
                  <div className="flex flex-col gap-2 md:gap-5 lg:gap-5 mt-8 lg:mt-0">
                    <div className="flex justify-between items-center">
                    <p className="text-base md:text-3xl font-semibold lg:text-2xl text-black dark:text-white ">
                        Generating Waste A Year : {" "}
                      </p>
                      <p className="text-xs md:text-lg">
                        <span className="text-lg md:text-3xl font-medium text-black dark:text-white">
                          {card.pcs}
                        </span>{" "}
                        Pcs
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base md:text-3xl font-semibold lg:text-2xl text-black dark:text-white ">
                        Drain Time : {" "}
                      </p>
                      <p className="text-xs md:text-lg">
                        <span className="text-lg md:text-3xl font-medium text-black dark:text-white">
                          {card.compos}
                        </span>{" "}
                        Year
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg md:text-3xl font-semibold lg:text-2xl text-black dark:text-white ">
                        You can save :
                      </p>
                      <p className="text-xs md:text-lg">
                        <span className="text-lg md:text-3xl font-medium text-black dark:text-white">
                          {card.save}
                        </span>{" "}
                        Pcs / Month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Tracker;
