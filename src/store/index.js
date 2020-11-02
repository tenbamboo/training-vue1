import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foods: [],
  },
  mutations: {
    ADD_FOOD(state, food) {
      state.foods.push(food);
    },
    SET_FOOD(state, foods) {
      state.foods = foods;
    },
  },
  actions: {
    getFoods() {
      return new Promise((resolve) => {
        // TODO 请求接口
        // TODO 处理数据
        // 返回数据
        resolve([
          {
            id: '1',
            label: '🍚',
          },
          {
            id: '2',
            label: '🍝',
          },
          {
            id: '3',
            label: '🍲',
          },
          {
            id: '4',
            label: '🍔',
          },
          {
            id: '5',
            label: '🍖',
          },
        ]);
      });
    },
  },
});
