<template>
  <div class="card">
    <div class="card__content">
      <p v-for="(valueComment, keyComment) in comment" :key="keyComment">
        <span class="card__title">{{ keyComment }} :</span>
        <a
          v-if="keyComment === 'email'"
          :href="`mailto:${valueComment}`"
          class="card__title-link"
          >{{ valueComment }}</a
        >
        <span v-else>{{ valueComment }}</span>
      </p>
    </div>

    <NuxtLink to="/" class="card__link">Back to main page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "CommentPage",
  async asyncData({ params }) {
    const comments = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const id = +params.id;
    const comment = comments.find((el) => el.id === id);

    return { id, comment };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.card {
  margin: auto;
  padding: 30px;
  width: 280px;
  background: white;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  color: $secondary;

  &__content {
    margin-bottom: 50px;
  }

  &__title {
    font-weight: bold;

    &-link {
      color: $secondary;
      text-decoration: none;

      &:hover {
        border-bottom: 2px solid $secondary;
      }
    }
  }

  &__link {
    color: black;
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid $secondary;
    }
  }
}
</style>
