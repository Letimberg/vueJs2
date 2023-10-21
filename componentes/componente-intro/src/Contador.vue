<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adcionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

// JS
<script>
export default {
  // função
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adcionar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

<style scoped>
    span {
        border-bottom: 1px  solid #ccc;
        height: 30px;
        padding: 5px 25px;
}
    button {
        height: 100px;
        width: 100px;
        border-radius: 50px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>