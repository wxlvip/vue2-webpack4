<template>
  <div id="home">
    <h1>Home</h1>
    <div>
      <p>{{getCounter}}</p>
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
  },
  computed: {
    ...mapGetters(['getCounter'])
  },
  methods: {
    ...mapActions(['add'])
  }
};
</script>
