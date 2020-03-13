<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカルコンポーネントの登録
  import LikeHeader from "./components/LikeHeader.vue";
  
  export default {
    components: {
      LikeHeader
    }
  }
</script>
