<template>
  <div id="main" class="main">
    <div class="container">
      <div class="main__header">People</div>
      <div>
        <v-adjustment></v-adjustment>
      </div>
      <div>
        <People />
      </div>
    </div>
  </div>
</template>

<script>
import People from "../Main/vPeople";
import vAdjustment from "./vAdjustment.vue";

export default {
  name: "Main",
  components: {
    People,
    vAdjustment,
  },
};
</script>

<style lang="scss" scoped>
$orange-color : rgba(255, 99, 74, 1);

.main {
  margin-top: 143px;
  margin-bottom: 95px;
}
.main__header {
  font-size: 32px;
  margin-bottom: 24px;
  font-weight: 400;

  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}
</style>
