export const state = () => ({
  comments: [],
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
}

export const getters = {
  getComments(state) {
    return state.comments;
  },
}
