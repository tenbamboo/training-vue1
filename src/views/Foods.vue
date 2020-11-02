<template>
  <div class="foodsContainer">
    <p class="title">Select Your Favorite Foods</p>

    <FoodList class="foodList"
      @pick="handlerPick" />

    <div class="btnGroup">
      <a @click="gotoCart"
        class="btn primary">Shopping Cart</a>

      <a @click="gotoAddFood"
        class="btn success">Add New Food</a>
    </div>

  </div>
</template>

<script>
import FoodList from '@/components/FoodList.vue';
// TODO 课后作业 高亮已经添加购物车的美食

export default {
  components: { FoodList },
  mounted() {
    // TODO 组件的传参和返回数据
    this.$store.dispatch('getFoods');
  },
  methods: {
    handlerPick(item) {
      // TODO 操作JS数组
      this.$store.commit('ADD_CART_FOOD', item);
    },
    gotoCart() {
      this.$router.push('cart');
    },
    gotoAddFood() {
      this.$router.push('addFood');
    },
  },
};
</script>

<style scoped lang="scss">
.foodsContainer {
  .title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .foodList {
    margin-bottom: 30px;
  }
  .btn {
    margin: 10px;
    padding: 10px 20px;
    color: #fff;
    background-color: #03a9f4;
    cursor: pointer;
  }
  .primary {
      background-color: #03a9f4;
  }
  .success {
      background-color: #4CAF50;
  }
}
</style>
