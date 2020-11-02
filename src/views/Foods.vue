<template>
  <div class="foodsContainer">
    <p class="title">Select Your Favorite Foods</p>

    <FoodList class="foodList"
      @pick="handlerPick" />

    <a @click="gotoCart"
      class="btn">Shopping Cart</a>
  </div>
</template>

<script>
import FoodList from '@/components/FoodList.vue';

export default {
  components: { FoodList },
  mounted() {
    this.$store.dispatch('getFoods');
  },
  methods: {
    handlerPick(item) {
      this.$store.commit('ADD_FOOD', item);
    },
    gotoCart() {
      this.$router.push('cart');
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
    padding: 10px 20px;
    color: #fff;
    background-color: #03a9f4;
    cursor: pointer;
  }
}
</style>
