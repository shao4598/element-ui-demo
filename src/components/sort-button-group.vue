<!--
 * @Author: jwt 1974890451@qq.com
 * @Date: 2022-08-22 19:02:34
 * @LastEditors: jwt 1974890451@qq.com
 * @LastEditTime: 2022-08-22 19:21:19
 * @FilePath: \element-ui-demo\src\components\sortButtonGroup.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="f fjsb h100">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SortButtonGroup',
  componentName: 'SortButtonGroup',
  model: {
    event: 'change',
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.h100 {
  height: 100%;
}
.f {
  display: flex;
}
.fjsb {
  justify-content: center;
}
</style>
