<template>
  <div class="json">
    <h1>{{ msg }}</h1>
    <input type="text" name="message" v-model="message" />
    <input type="button" value="Отправить" v-on:click="send" />
    <div id="subscribe">
      <ol>
        <li v-for="message in messages" :key="message.id">{{ message }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "json",
  props: {},
  data() {
    return {
      msg: "",
      message: "",
      messages: [],
      socket: new WebSocket("ws://localhost:8080")
    };
  },
  created() {
    this.getJson();
    let self = this;
    this.socket.onmessage = function(event) {
      self.messages.push(event.data);
    };
  },
  methods: {
    send: async function() {
      this.socket.send(this.message);
    },
    showMessage: async function(message) {},
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
