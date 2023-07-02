export const fetchInternetUsersByYear = async (year) => {
  const response = await fetch(`http://localhost:8080/internet-users/${year}`, {
    method: "GET",
  });
  const usersData = await response.json();
  return usersData;
};

export const fetchInternetUsersByCountryAndYear = async (country, year) => {
  const response = await fetch(
    `http://localhost:8080/country/${country}/year/${year}`,
    {
      method: "GET",
    }
  );
  const countryData = await response.json();
  return countryData;
};

export const fetchAllCountriesByYear = async (year) => {
  const response = await fetch(`http://localhost:8080/year/${year}`, {
    method: "GET",
  });
  const yearData = await response.json();
  return yearData;
};

export const fetchCountries = async () => {
  const response = await fetch(`http://localhost:8080/countries`, {
    method: "GET",
  });
  const countryList = await response.json();
  return countryList;
};

export const clearTimeoutsAnimation = (timeoutIds) => {
  timeoutIds.forEach((id) => {
    clearTimeout(id);
  });
};

export const getRandomYear = () => {
  return years[(Math.random() * years.length).toFixed(0)];
};

export const getRandomCountry = (countries) => {
  return countries[(Math.random() * countries.length).toFixed(0)];
};

export const longDelay = 10000;

export const years = [
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

export const funnelYears = [
  "1990",
  "1992",
  "1994",
  "1996",
  "1998",
  "2000",
  "2002",
  "2004",
  "2006",
  "2008",
  "2010",
  "2012",
  "2014",
  "2016",
  "2018",
  "2020",
];

export const convertToRoundedBillion = (number) => {
  return (number / 1000000000).toFixed(2);
};

export const convertToRoundedMillion = (number) => {
  return number ? (number / 1000000).toFixed(0) : 0;
};

export const convertToMillion = (number) => {
  return number ? number / 1000000 : 0;
};

export const getTop10 = (data) => {
  return data
    .sort((a, b) => {
      return b.data - a.data;
    })
    .slice(0, 10);
};

export const getColor = (key) => {
  switch (key) {
    case 1:
      return "#f9f3a7";
    case 2:
      return "#fff983";
    case 3:
      return "#df68e1";
    case 4:
      return "#ffeb6f";
    case 5:
      return "#ff9c71";
    case 6:
      return "#fc82bd";
    case 7:
      return "#e579d1";
    case 8:
      return "#ffff59";
    case 9:
      return "#fa57e2";
    default:
      return "#fe97a7";
  }
};
