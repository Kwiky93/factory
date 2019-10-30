<template>
  <div class="Navigation">
    <div id="nav">
      <router-link v-for="link in links" :key="link.key" :to="link.path">{{link.name}}</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navigation",
  created() {
    this.getNavigation();
  },
  props: {},
  data() {
    return {
      msg: "",
      links: []
    };
  },
  methods: {
    getNavigation: async function() {
      let result = await this.$axios
        .get("get/navigation")
        .then(response => {
          return response.data;
        })
        .catch(err => {
          return err;
        });
      this.links = result;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  margin-right: 5px;
  color: #42b983;
}
</style>
