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
