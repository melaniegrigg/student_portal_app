<template>
  <div class="show">
    <h1>{{ message }}</h1>
    


  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Capstones",
      name: "",
      description: "",
      url: "",
      screenshot: "",
    };
  },
  created: function () {
    this.showCapstone();
  },
  methods: {
    showCapstone: function () {
      console.log("showing capstone...");
    },
  },
};
</script>
