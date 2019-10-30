<template>
  <div class="home">
    <Json msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Json from "@/components/Json.vue";

export default {
  name: "home",
  components: {
    Json
  }
};
</script>
