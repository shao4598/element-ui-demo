<!--
 * @Author: jwt 1974890451@qq.com
 * @Date: 2022-08-22 19:02:34
 * @LastEditors: jwt 1974890451@qq.com
 * @LastEditTime: 2022-08-22 19:28:24
 * @FilePath: \element-ui-demo\src\components\sortButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="f fac pointer">
    <div @click="onClickText">
      <slot></slot>
    </div>
    <div class="yz-icon-d-caret">
      <i :class="['el-icon-caret-top', upClass]" @click="onClickUp"></i>
      <i :class="['el-icon-caret-bottom', downClass]" @click="onClickDown"></i>
    </div>
  </div>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter';
export default {
  name: 'SortButton',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    upClass() {
      if (this.$parent.value.value !== this.value) {
        return 'grey';
      }
      return this.$parent.value.sort === 1 ? 'red' : 'grey'; //1:升序，2：降序
    },
    downClass() {
      if (this.$parent.value.value !== this.value) {
        return 'grey';
      }
      return this.$parent.value.sort === 2 ? 'red' : 'grey'; //1:升序，2：降序
    },
  },
  methods: {
    onClickText() {
      console.log('onClickSlot');
      if (this.$parent.value.value !== this.value) {
        return this.onClickUp();
      }
      return this.$parent.value.sort === 1
        ? this.onClickDown()
        : this.onClickUp(); //1:升序，2：降序
    },
    onClickUp() {
      this.dispatch('SortButtonGroup', 'change', {
        value: this.value,
        sort: 1,
      });
    },
    onClickDown() {
      this.dispatch('SortButtonGroup', 'change', {
        value: this.value,
        sort: 2,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.f {
  display: flex;
}
.fac {
  align-items: center;
}
.pointer {
  cursor: pointer;
}
.yz-icon-d-caret {
  display: flex;
  flex-direction: column;
  // margin: 0 3px;
  width: 10px;
  i {
    color: #8d8d8d;
  }
  .el-icon-caret-top {
    height: 7px;
  }
  .red {
    color: #f11111;
  }
}
</style>
