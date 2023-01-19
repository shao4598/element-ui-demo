<!--
 * @Author: jwt 1974890451@qq.com
 * @Date: 2022-08-04 14:59:36
 * @LastEditors: jwt 1974890451@qq.com
 * @LastEditTime: 2022-08-22 19:11:19
 * @FilePath: \element-ui-demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/AsyncCascader">AsyncCascader</router-link>
      |
      <router-link to="/TheSort">TheSort</router-link>
      |
      <router-link to="/exclusive-switch">ExclusiveSwitch</router-link>
      |
      <router-link to="/grid-layout">GridLayout</router-link>
      |
      <router-link to="/infinite-scroll">infinite-scroll</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
