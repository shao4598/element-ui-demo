<template>
  <el-select
    v-model="value"
    filterable
    placeholder="请选择"
    :filter-method="filter"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
import PinyinMatch from 'pinyin-match';
export default {
  data() {
    return {
      rawOptions: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      value: '',
    };
  },
  created() {
    let test = '123曾经沧海难为水除却巫山不是云';

    // [1, 3]
    console.log(PinyinMatch.match(test, '23曾'));
  },
  methods: {
    filter(val) {
      if (!val) {
        this.options = this.rawOptions;
        return;
      }
      console.log(val);
      this.options = this.rawOptions.filter((item) =>
        PinyinMatch.match(item.label, val),
      );
    },
  },
};
</script>
