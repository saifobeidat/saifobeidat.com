export const state = () => ({
  isDrakMode: false,
});

export const mutations = {
  TOGGLE_DARK_MODE(state) {
    state.isDrakMode = !state.isDrakMode;
  },
};
