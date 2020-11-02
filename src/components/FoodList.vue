<template>
  <div class="foodListContainer">
    <!-- TODO v-for中:key的作用 -->
    <div v-for="item in foodList"
      :key="item.id"
      @click="pickFood(item)"
      class="foods">
       <p>{{item.label}}</p>
      <p>¥{{item.price | priceFilter}}</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      foodList: [
        {
          id: '1',
          label: '🍚',
          price: 1000,
        },
        {
          id: '2',
          label: '🍝',
          price: 2000,
        },
        {
          id: '3',
          label: '🍲',
          price: 3000,
        },
        {
          id: '4',
          label: '🍔',
          price: 5000,
        },
        {
          id: '5',
          label: '🍖',
          price: 8000,
        },
      ],
    };
  },
  filters: {
    priceFilter(price) {
      if (price) {
        return (price / 100).toFixed(2);
      }
      return 'N/A';
    },
  },
  mounted() {},
  methods: {
    pickFood(item) {
      this.$emit('pick', item);
    },
  },
};
</script>

<style scoped lang="scss">
.foodListContainer {
  .foods {
    display: inline-block;
    padding: 20px;
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
