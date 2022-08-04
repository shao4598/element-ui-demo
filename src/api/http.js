/*
 * @Author: jwt 1974890451@qq.com
 * @Date: 2022-08-04 14:40:10
 * @LastEditors: jwt 1974890451@qq.com
 * @LastEditTime: 2022-08-04 14:46:30
 * @FilePath: \element-ui-demo\src\api\http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Province from '@/common/province-data.js';
import City from '@/common/city-data.js';
import Country from '@/common/country-data.js';

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
