<template>
  <div>
    <div class="navbar flex flex-end">
      <form>
        <div class="search-bar" id="search-bar">
          <input
            type="text"
            class="search-input"
            placeholder="Search news..."
          />
          <fa icon="search" class="suffix"></fa>
        </div>
      </form>
      <div class="menu-icons">
        <fa
          icon="search"
          class="search-btn"
          id="search-btn"
          v-on:click="search()"
        /><fa icon="bars" class="menu-btn" id="menu-btn" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      document.querySelector("#search-bar").classList.toggle("show");
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  transition: all ease 1s;
  display: none;
  .suffix {
    position: absolute;
    right: 10px;
    bottom: 0;
    padding: 10px;
    color: #bababa;
    transition: ease all 0.5s;

    &:hover {
      color: #e20024;
    }
  }
}
.search-bar.show {
  display: inline-block;
  transition: all ease 1s;
}
</style>