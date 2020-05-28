<template>
    <Todo />
</template>

<script>
import Todo from "./views/Todo";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    Todo
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["logo"])
  }
};
</script>

<style lang="scss">
    div,
    p,
    span,
    h1,
    h2,
    ul,
    li,
    strong,
    img,
    em {
        padding: 0;
        margin: 0;
    }
</style>
