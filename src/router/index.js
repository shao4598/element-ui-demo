/*
 * @Author: jwt 1974890451@qq.com
 * @Date: 2022-08-04 14:40:10
 * @LastEditors: jwt 1974890451@qq.com
 * @LastEditTime: 2022-08-22 19:08:00
 * @FilePath: \element-ui-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AsyncCascader from '@/views/async-cascader.vue';
import TheSort from '@/views/the-sort.vue';
import ExclusiveSwitch from '@/views/exclusive-switch.vue';
import GridLayout from '@/views/grid-layout.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/AsyncCascader',
    name: 'AsyncCascader',
    component: AsyncCascader,
  },
  {
    path: '/TheSort',
    name: 'TheSort',
    component: TheSort,
  },
  {
    path: '/exclusive-switch',
    name: 'exclusive-switch',
    component: ExclusiveSwitch,
  },
  {
    path: '/grid-layout',
    name: 'grid-layout',
    component: GridLayout,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
