<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__title">
          <div class="table__title-sort">
            <span>id</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click.prevent="sortTable"
              class="table__icon"
              :class="{
                table__icon_descending: activeButtonSort && !sortabled,
              }"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00001 15C8.13261 15 8.25979 14.9473 8.35356 14.8536C8.44733 14.7598 8.50001 14.6326 8.50001 14.5V2.707L11.646 5.854C11.7399 5.94789 11.8672 6.00063 12 6.00063C12.1328 6.00063 12.2601 5.94789 12.354 5.854C12.4479 5.76011 12.5006 5.63278 12.5006 5.5C12.5006 5.36723 12.4479 5.23989 12.354 5.146L8.35401 1.146C8.30756 1.09944 8.25238 1.0625 8.19164 1.03729C8.13089 1.01208 8.06577 0.999107 8.00001 0.999107C7.93424 0.999107 7.86912 1.01208 7.80837 1.03729C7.74763 1.0625 7.69245 1.09944 7.64601 1.146L3.64601 5.146C3.59952 5.19249 3.56264 5.24768 3.53748 5.30842C3.51232 5.36916 3.49937 5.43426 3.49937 5.5C3.49937 5.63278 3.55212 5.76011 3.64601 5.854C3.73989 5.94789 3.86723 6.00063 4.00001 6.00063C4.13278 6.00063 4.26012 5.94789 4.35401 5.854L7.50001 2.707V14.5C7.50001 14.6326 7.55268 14.7598 7.64645 14.8536C7.74022 14.9473 7.8674 15 8.00001 15Z"
                :fill="activeButtonSort ? 'black' : '#81819d'"
              />
            </svg>
          </div>
        </th>
        <th class="table__title">name</th>
        <th class="table__title">email</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="comment in comments"
        :key="comment.id"
        @click.prevent="redirectPage(comment.id)"
        class="table__row"
      >
        <td class="table__cell">{{ comment.id }}</td>
        <td class="table__cell">{{ comment.name }}</td>
        <td class="table__cell">{{ comment.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      activeButtonSort: false,
      sortabled: false,
    };
  },
  computed: {
    ...mapGetters({
      comments: "showComments",
    }),
  },
  methods: {
    ...mapMutations(["sortComments"]),
    sortTable() {
      this.sortabled = !this.sortabled;
      this.sortComments(this.sortabled);
      if (!this.activeButtonSort) this.activeButtonSort = true;
    },
    redirectPage(id) {
      this.$router.push(`/comment/${id}`);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Roboto", sans-serif;

  &__title {
    padding: 10px;
    border-bottom: 2px solid $primary;
    color: $secondary;
    text-align: left;

    &-sort {
      display: flex;
      align-items: center;
    }
  }

  &__icon {
    margin-left: 10px;
    padding: 2px;
    border: 1px solid $secondary;
    cursor: pointer;

    &_descending {
      transform: rotate(180deg);
    }
  }

  &__row {
    background: white;
    border: 10px solid $primary;
    cursor: pointer;

    &:hover {
      background: linear-gradient(90deg, $orange 0%, $pink 100%);
    }
  }

  &__cell {
    vertical-align: top;
    padding: 10px;

    &:nth-child(2n) {
      width: 60%;
    }
  }
}
</style>
