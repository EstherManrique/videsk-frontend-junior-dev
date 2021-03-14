<template>
  <div>
    <div class="ml-5">
      <h3>Why do you create a startup?</h3>
      <h2 class="text-md text-gray-300">Trends</h2>
    </div>
    <div class="pie">
      <pie-chart class="pie1"></pie-chart>
    </div>
  </div>
</template>

<script>
import PieChart from './PieChart'

export default {
  components: {
    PieChart
  }
};
</script>

<style>
.pie {
  width: 50%;
  height: auto;
  margin: 0 auto;
}
</style>