<template>
  <div class="pagination">
    <button
      @click.prevent="prevPage"
      class="pagination__arrow"
      :class="{ pagination__arrow_disabled: page === 1 }"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5L9 10L14 15L13 17L6 10L13 3L14 5Z"
          :fill="page === 1 ? '#81819d' : 'white'"
        />
      </svg>
    </button>

    <button
      v-for="pageNumber in pages"
      :key="pageNumber"
      @click.prevent="paginate(pageNumber)"
      class="pagination__button"
      :class="[
        { pagination__button_active: pageNumber === page },
        { pagination__button_hidden: !showPageNumber(pageNumber) },
      ]"
    >
      {{ pageNumber }}
    </button>

    <button
      v-if="pages - page >= 2"
      class="pagination__button pagination__button_inactive"
    >
      ...
    </button>

    <button
      @click.prevent="nextPage(pages)"
      class="pagination__arrow pagination__arrow_right"
      :class="{ pagination__arrow_disabled: page === pages }"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5L9 10L14 15L13 17L6 10L13 3L14 5Z"
          :fill="page === pages ? '#81819d' : 'white'"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      page: "currentPage",
      pages: "pagesComments",
    }),
  },
  methods: {
    ...mapMutations(["updatePage", "prevPage", "nextPage"]),
    paginate(page) {
      this.updatePage(page);
    },
    showPageNumber(page) {
      if (
        Math.abs(this.page - page) === 0 ||
        Math.abs(this.page - page) === 1 ||
        (this.page === 1 && Math.abs(this.page - page) === 2)
      )
        return true;

      return false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 50px;

  &__button {
    margin-left: 10px;
    background: $primary;
    border: 1px solid $secondary;
    border-radius: 5px;
    width: 40px;
    font-family: "Roboto", sans-serif;
    color: $secondary;
    cursor: pointer;

    @media (max-width: 480px) {
      margin-left: 5px;
    }

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      background: linear-gradient(90deg, $orange 0%, $pink 100%);
      border: 1px solid $primary;
      color: white;
    }

    &_hidden {
      display: none;
    }

    &_active {
      background: $secondary;
      border: 1px solid $secondary;
      color: white;
    }

    &_inactive {
      border: 1px solid $primary;
      cursor: auto;

      &:hover {
        background: $primary;
        color: $secondary;
      }
    }
  }

  &__arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background: $secondary;
    border: 1px solid $secondary;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;

    @media (max-width: 480px) {
      margin-right: 10px;
    }

    &:hover {
      background: linear-gradient(90deg, $orange 0%, $pink 100%);
      border: 1px solid $primary;
    }

    &_disabled {
      cursor: auto;
      background: #dadada;
      border: 1px solid #dadada;

      &:hover {
        background: #dadada;
      }
    }

    &_right {
      margin-right: 0;
      margin-left: 20px;
      transform: rotate(180deg);

      &:hover {
        background: linear-gradient(90deg, $pink 0%, $orange 100%);
      }

      @media (max-width: 480px) {
        margin-left: 10px;
      }
    }
  }
}
</style>
