<template>
  <div style="display: flex; justify-content: center">
    <div
      v-for="(item, index) in dataList"
      :key="item.id"
      :class="['switch', switchStatus[index] ? 'on' : 'off']"
      @click="currentId = item.id"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExclusiveSwitch',
  data() {
    return {
      dataList: [
        { id: 1, name: '黑龙江' },
        { id: 2, name: '吉林' },
        { id: 3, name: '辽宁' },
        { id: 4, name: '内蒙古' },
        { id: 5, name: '河北' },
        { id: 6, name: '河南' },
        { id: 7, name: '山东' },
      ],
      currentId: 0,
    };
  },
  computed: {
    switchStatus() {
      return this.dataList.map(({ id }) => id === this.currentId);
    },
  },
};
</script>

<style>
.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  margin-right: 10px;
}

.on {
  background-color: coral;
}

.off {
  background-color: grey;
}
</style>
