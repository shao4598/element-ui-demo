import Province from "@/common/province-data.js";
import City from "@/common/city-data.js";
import Country from "@/common/country-data.js";

export const getProvinceList = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Province), 1000);
  });
};

export const getCityList = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(City[id]), 1000);
  });
};

export const getCountryList = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Country[id]), 1000);
  });
};
