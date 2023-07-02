import { Map, MapMarker } from "reaviz";
import data from "../assets/map-data.json";
import { feature } from "topojson-client";
import geojson from "world-atlas/countries-110m.json";
import { convertToRoundedMillion } from "../utils";

const worldData = feature(geojson, geojson.objects.countries);

export const MapChart = () => {
  const markers = data.map((d) => {
    return (
      <MapMarker
        coordinates={[d["Longitude (average)"], d["Latitude (average)"]]}
        tooltip={`${d.Country} - ${convertToRoundedMillion(
          d.internet_users_number
        )} users (in M)`}
      />
    );
  });

  return (
    <>
      <h2 className="graph04">
        Most current World Map internet users visualization (2020)
      </h2>
      <Map
        data={worldData}
        height={900}
        width={1500}
        markers={markers}
        center={true}
        fill={"white"}
        fillFactor={4}
        projection="mercator"
      />
    </>
  );
};
