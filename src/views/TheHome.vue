<template>
  <div class="container">
    <div class="main">
      <div class="main__form">Form</div>
      <div class="main__resize-area"></div>
      <div class="main__diagram">Chart</div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useResizeTable } from '../composables/useResizeTable'
  useResizeTable()
</script>
<style lang="scss" scoped>
  .container {
    height: 100%;
    width: 100%;
    background-color: #e8e8e8;
  }
  .main {
    padding: 15px;
    display: flex;
    background-color: #e8e8e8;
    height: 100vh;
    & > * {
      background-color: #fff;
      max-width: 100%;
    }
    &__resize-area {
      background-color: #e8e8e8;
      width: 15px;
      min-width: 15px;
      cursor: col-resize;
    }
    &__form {
      width: 50%;
    }
    &__diagram {
      width: 50%;
    }
  }
</style>
