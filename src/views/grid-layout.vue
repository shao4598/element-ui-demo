<template>
  <div class="container">
    <div class="box one">One</div>
    <div class="box two">Two</div>
    <div class="box three">Three</div>
    <div class="box four">Four</div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'one one'
    'two three'
    '. four';
  gap: 10px;
}
.box {
  background-color: bisque;
}
.one {
  grid-area: one;
}
.two {
  grid-area: two;
}
.three {
  grid-area: three;
}
.four {
  grid-area: four;
}
</style>
