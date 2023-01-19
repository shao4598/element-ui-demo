<template>
  <el-table
    v-el-table-infinite-scroll="load"
    :data="data"
    :infinite-scroll-disabled="disabled"
    height="200px"
  >
    <el-table-column type="index" />
    <el-table-column prop="date" label="date" />
    <el-table-column prop="name" label="name" />
    <el-table-column prop="age" label="age" />
  </el-table>
</template>

<script>
import ElTableInfiniteScroll from 'el-table-infinite-scroll';
const dataTemplate = new Array(10).fill({
  date: '2009-01-01',
  name: 'Tom',
  age: '30',
});
export default {
  name: 'InfiniteScroll',
  directives: {
    'el-table-infinite-scroll': ElTableInfiniteScroll,
  },
  data() {
    return {
      data: [],
      page: 0,
      total: 50,
      disabled: false,
    };
  },
  methods: {
    load() {
      console.log('load');
      if (this.disabled) return;

      this.page++;
      if (this.page <= this.total) {
        this.data = this.data.concat(dataTemplate);
      }

      if (this.page === this.total) {
        this.disabled = true;
      }
    },
  },
};
</script>
