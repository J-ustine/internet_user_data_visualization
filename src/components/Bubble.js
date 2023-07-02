import React from "react";
import { BubbleChart, BubbleSeries } from "reaviz";
import { Select } from "./Select";
import {
  clearTimeoutsAnimation,
  convertToRoundedMillion,
  fetchAllCountriesByYear,
  getColor,
  getRandomYear,
  getTop10,
  longDelay,
  years,
} from "../utils";

export const Bubble = () => {
  const [data, setData] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState("2020");

  const timeoutIds = [];

  const selectRandomYear = () => {
    const randomYear = getRandomYear();
    if (randomYear) {
      setSelectedYear(randomYear);
    }
    const timeout = setTimeout(selectRandomYear, longDelay);
    timeoutIds.push(timeout);
  };

  React.useEffect(() => {
    if (timeoutIds.length > 0) {
      clearTimeoutsAnimation(timeoutIds);
    }
    const timeoutId = setTimeout(selectRandomYear, longDelay);
    timeoutIds.push(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllCountriesByYear(selectedYear);
      const countryData = [];

      Object.keys(response.Data).forEach((key) => {
        countryData.push({
          key,
          data: convertToRoundedMillion(
            response.Data[key].internet_users_number
          ),
        });
      });

      setData(countryData);
    };

    fetchData();
  }, [selectedYear]);

  const top10 = getTop10(data);

  if (top10.length > 0) {
    return (
      <>
        <h2 className="graph03">
          Top 10 Countries with the largest number of internet user (in M) per
          year
        </h2>
        <div className="filters">
          <h4 className="subtitle">Let's play with the filter !</h4>
          <Select
            onChange={setSelectedYear}
            value={selectedYear}
            options={years}
          />
        </div>
        <BubbleChart
          data={top10}
          height={450}
          series={
            <BubbleSeries
              colorScheme={(_data, index) => getColor(index)}
              animated={true}
            />
          }
        />
      </>
    );
  }
};
