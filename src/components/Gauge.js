import React from "react";
import { RadialGauge, RadialGaugeSeries } from "reaviz";
import { Select } from "./Select";
import {
  clearTimeoutsAnimation,
  convertToMillion,
  fetchCountries,
  fetchInternetUsersByCountryAndYear,
  getRandomYear,
  longDelay,
  years,
} from "../utils";

export const Gauge = () => {
  const [countries, setCountries] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState("United States");
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
    const fetchData = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData.Countries);
    };

    fetchData();

    if (timeoutIds.length > 0) {
      clearTimeoutsAnimation(timeoutIds);
    }
    const timeoutId = setTimeout(selectRandomYear, longDelay);
    timeoutIds.push(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetchInternetUsersByCountryAndYear(
        selectedCountry,
        selectedYear
      );

      if (response.Data[selectedCountry]) {
        const countryData = [
          {
            key: `${selectedCountry} in ${selectedYear}`,
            data: convertToMillion(
              response.Data[selectedCountry].internet_users_number
            ),
          },
        ];

        setData(countryData);
      }
    };

    fetchData();
  }, [selectedYear, selectedCountry]);

  if (data.length > 0) {
    return (
      <>
        <h2 className="graph02">
          Internet users (in M) per year and per country
        </h2>

        <div className="filters">
          <h4 className="subtitle">Let's play with the filters !</h4>
          <Select
            onChange={setSelectedYear}
            value={selectedYear}
            options={years}
          />
          <Select
            onChange={setSelectedCountry}
            value={selectedCountry}
            options={countries}
          />
        </div>

        <RadialGauge
          height={400}
          data={data}
          startAngle={0}
          endAngle={Math.PI * 2}
          minValue={0}
          maxValue={1000}
          series={<RadialGaugeSeries arcWidth={30} colorScheme={["#ffeb6f"]} />}
        />
      </>
    );
  }
};
