export const state = () => ({
  comments: [],
  page: 1,
  commentPerPage: 10,
  pages: 1,
})

export const mutations = {
  updateComments(state, data) {
    state.comments = data;
  },
  sortComments(state, ascending) {
    if (state.comments.length > 0) {
      if (ascending) state.comments.sort((a, b) => a.id > b.id ? 1 : -1);
      else state.comments.sort((a, b) => a.id > b.id ? -1 : 1);
    }
  },
  updatePage(state, page) {
    state.page = page;
  },
  prevPage(state) {
    if (state.page > 1) state.page--;
  },
  nextPage(state, countPages) {
    if (state.page < countPages) state.page++;
  },
}

export const getters = {
  showComments(state) {
    const offset = (state.page - 1) * state.commentPerPage;

    return state.comments.length > 0 ?
      state.comments.slice(offset, offset + state.commentPerPage) :
      state.comments;
  },
  currentPage(state) {
    return state.page;
  },
  pagesComments(state) {
    return state.comments.length > 0 ?
      Math.ceil(state.comments.length / state.commentPerPage) :
      1;
  },
}
