import React from "react";
import { FunnelArc, FunnelChart } from "reaviz";
import {
  convertToRoundedBillion,
  fetchInternetUsersByYear,
  funnelYears as years,
} from "../utils";

export const Funnel = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        years.map(async (year) => {
          const dataPerYear = await fetchInternetUsersByYear(year);
          return {
            data: convertToRoundedBillion(dataPerYear.Data.Total),
            key: year,
          };
        })
      );
      setData(newData);
    };

    fetchData();
  }, []);

  if (data.length > 0) {
    return (
      <>
        <h2 className="graph01">Internet users (in B) per year</h2>
        <FunnelChart
          data={data}
          height={"50vh"}
          arc={<FunnelArc colorScheme={"#fa57e2"} />}
        />
      </>
    );
  }
};
