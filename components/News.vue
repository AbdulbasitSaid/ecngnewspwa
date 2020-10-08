<template>
  <div>
    <div class="news-container">
      <LatestVideo />
      <div v-for="n in numbers" v-bind:key="n">
        <news-card></news-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { numbers: [1, 2, 3, 3, 3, 3, 3, 3, 3] };
  },
};
</script>

<style lang="scss" scoped>
</style>