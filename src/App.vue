<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <LikeNumber v-bind:total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber v-bind:total-number="number" v-on:my-click="number = $event"></LikeNumber>
  </div>
</template>

<script>
// ローカルコンポーネントの登録
  import LikeHeader from "./components/LikeHeader.vue";
  
  export default {
    data() {
      return {
        number: 10
      }
    },
    components: {
      LikeHeader
    }
  };
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>