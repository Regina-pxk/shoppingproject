<template>
  <div>
    <TypeNav />
    <ListContainer />
    <ReCommand />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
import ReCommand from "./ReCommand/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    ReCommand,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("home/getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>
