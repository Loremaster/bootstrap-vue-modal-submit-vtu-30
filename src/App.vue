<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Reminder />
  </div>
</template>

<script>
import Reminder from "./components/Reminder.vue";

export default {
  name: "app",
  components: {
    Reminder
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
