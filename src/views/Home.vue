<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Vue.js App"/>
    <h1>Home</h1>
    <div>
      <p>{{getCounter}}</p>
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['getCounter'])
  },
  methods: {
    ...mapActions(['add'])
  }
};
</script>
