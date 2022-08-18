<template>
  <main class="app">
    <Table />
    <Pagination />
  </main>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "IndexPage",
  methods: {
    ...mapMutations(["updateComments"]),
  },
  async fetch() {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    this.updateComments(data);
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: $primary;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  width: 80%;
  height: calc(100vh - 100px);
  overflow: auto;

  @media (max-width: 1800px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    margin: 20px auto;
    width: 100%;
  }
}
</style>
