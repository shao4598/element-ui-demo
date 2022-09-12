<!--
 * @Author: chase shao4598@outlook.com
 * @Date: 2022-09-11
 * @LastEditors: chase shao4598@outlook.com
 * @LastEditTime: 2022-09-12
 * @FilePath: /element-ui-demo/src/views/grid-layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-form>
      <el-form-item label="听证内容记录">
        <el-input v-model="records" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <div class="container">
      <div class="t-a-r">案由：</div>
      <div class="border-b t-a-l"></div>
      <div class="t-a-r">听证时间：</div>
      <div class="time">
        <div class="border-b t-a-r p-l-8">2022</div>
        <div>年</div>
        <div class="border-b t-a-r p-l-8">6</div>
        <div>月</div>
        <div class="border-b t-a-r p-l-8">31</div>
        <div>日</div>
        <div class="border-b t-a-r p-l-8">19</div>
        <div>时</div>
        <div class="border-b t-a-r p-l-8">23</div>
        <div>分至</div>
        <div class="border-b t-a-r p-l-8">23</div>
        <div>时</div>
        <div class="border-b t-a-r p-l-8">50</div>
        <div>分</div>
      </div>
      <div class="t-a-r">听证地点：</div>
      <div class="border-b t-a-l"></div>
      <div class="t-a-r">听证机关：</div>
      <div class="units">
        <div class="border-b t-a-l"></div>
        <div>听证方式：□公开 □不公开</div>
      </div>
      <div class="t-a-r">听证内容记录：</div>
      <div class="border-b t-a-l" v-text="firstLine"></div>
      <div
        v-for="(item, index) in wrapContent"
        :key="index"
        class="grid-col-line border-b t-a-l"
      >
        <span ref="`span-${index}`" style="display: inline-block">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      records:
        'abcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyz',
    };
  },
  computed: {
    firstLine() {
      return this.records.substring(0, 43);
    },
    wrapContent() {
      if (this.records.length - 43 < 1) {
        return [];
      }
      const content = this.records.substring(43);
      const x = 61;
      const count = Math.ceil(content.length / x);
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(content.substring(i * x, (i + 1) * x));
      }
      return arr;
    },
    autoWidth() {
      return document.querySelector('.aaa').offsetWidth;
    },
  },
};
</script>

<style scoped>
.container {
  width: 500px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: 20px;
  row-gap: 10px;
}

.grid-col-line {
  grid-column: 1/-1;
}

.p-l-8 {
  padding-right: 8px;
}

.border-b {
  border-bottom: solid;
}

.t-a-l {
  text-align: left;
}

.t-a-r {
  text-align: right;
}

.time {
  display: grid;
  grid-template-columns: repeat(7, 1fr auto);
}

.units {
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>
