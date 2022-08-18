<template>
  <main class="app">
    <Table />
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
  margin: 0 auto;
  width: 80%;
}
</style>
