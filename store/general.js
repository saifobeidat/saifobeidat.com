export const state = () => ({
  isDarkMode: false,
});

export const mutations = {
  TOGGLE_DARK_MODE(state) {
    state.isDarkMode = !state.isDarkMode;
  },
};
