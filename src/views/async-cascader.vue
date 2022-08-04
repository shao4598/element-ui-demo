<!--
 * @Author: jwt 1974890451@qq.com
 * @Date: 2022-08-04 14:40:10
 * @LastEditors: jwt 1974890451@qq.com
 * @LastEditTime: 2022-08-04 14:46:08
 * @FilePath: \element-ui-demo\src\views\async-cascader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1>{{ val.join() }}</h1>
    <el-cascader v-model="val" :props="props"></el-cascader>
  </div>
</template>
<script>
import { getProvinceList, getCityList, getCountryList } from '@/api/http.js';
export default {
  data() {
    return {
      val: [],
      props: {
        lazy: true,
        label: 'name',
        value: 'id',
        lazyLoad(node, resolve) {
          const { level, data } = node;
          switch (level) {
            // 点开级联组件，获取「省」数据源
            case 0:
              getProvinceList().then(resolve);
              break;
            // 点击「省」，获取「市」数据源
            case 1:
              getCityList(data.id).then(resolve);
              break;
            //点击「市」，获取「区」数据源
            case 2:
              getCountryList(data.id).then((res) => {
                // 「区」是叶子节点，为每一项追加 leaf:true
                const tempArr = res.map((item) => {
                  return { ...item, leaf: true };
                });
                resolve(tempArr);
              });
              break;
          }
        },
      },
    };
  },
};
</script>
