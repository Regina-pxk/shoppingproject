<template>
  <div>
    <TypeNav />
    <ListContainer />
    <ReCommand />
    <Rank />
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
import ReCommand from "./ReCommand/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
export default {
  name: "Home",
  components: {
    ListContainer,
    ReCommand,
    Rank,
    Like,
    Floor,
    Brand
  },
};
</script>

<style>
</style>
