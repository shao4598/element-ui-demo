<!--
 * @Author: jwt 1974890451@qq.com
 * @Date: 2022-08-22 19:03:17
 * @LastEditors: jwt 1974890451@qq.com
 * @LastEditTime: 2022-08-22 19:19:16
 * @FilePath: \element-ui-demo\src\views\Sort.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <SortButtonGroup v-model="sortBy" @change="onChange">
    <SortButton value="1">综合</SortButton>
    <SortButton value="2">价格</SortButton>
    <SortButton value="3">销量</SortButton>
  </SortButtonGroup>
</template>

<script>
import SortButton from '@/components/sort-button.vue';
import SortButtonGroup from '@/components/sort-button-group.vue';
export default {
  components: { SortButton, SortButtonGroup },
  data() {
    return {
      sortBy: {
        value: '1',
        sort: 1,
      },
    };
  },
  methods: {
    onChange(val) {
      console.log('onChange', val);
    },
  },
};
</script>
