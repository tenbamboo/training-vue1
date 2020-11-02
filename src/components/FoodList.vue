<template>
  <div class="foodListContainer">
    <div v-for="item in foodList"
      :key="item.id"
      @click="pickFood(item)"
      class="foods">
      {{item.label}}
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
      ],
    };
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
