<template>
  <div class="json">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "json",
  created() {
    this.getJson();
  },
  props: {},
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    getJson: async function() {
      let result = await this.$axios
        .get("get/json")
        .then(response => {
          return response.data;
        })
        .catch(err => {
          return err;
        });
      this.msg = JSON.stringify(result);
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
  color: #42b983;
}
</style>
