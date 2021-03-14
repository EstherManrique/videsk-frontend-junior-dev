<template>
  <div id="app">
    <div class="bg-gray-100 py-6 px-4">
      <div class="container mx-auto mt-5">
        <NavBar />
        <header>
          <div class="py-6 px-4 sm:px-6 lg:px-8">
            <a href="#">Home</a> / <a href="#">Reports & Insigns</a>
          </div>
        </header>
        <main>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="bg-white rounded-lg shadow py-6">
                <Pie />
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2 py-3 bg-white rounded-lg">
              <div class="text-lg font-medium text-gray-900">
                <h1 class="md:mt-0 md:col-span-2 pl-5">Employees</h1>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2 px-5 py-4">
                <Table />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./component/NavBar";
import Table from "./component/Table";
import Pie from "./component/Pie";
export default {
  components: {
    NavBar,
    Table,
    Pie
  },

  data() {
    return {
      name: "app"
    }
  }
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
}
</style>
