<template>
  <div id="people" class="persons">
    <div v-if="LOADING" class="person__loading">
      <div class="spinner-border text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="persons__list">
      <div v-if="REZULT_ARRAY == 0" class="persons__empty">NO INFORMATION</div>

      <div
        class="person__info"
        v-for="(human, index) in REZULT_ARRAY"
        :key="index"
      >
        <div>
          <img
            class="humans__image"
            :src="require('../../assets/people-image/' + human.human_photo)"
            alt=""
          />

          <img class="image__black" alt="" />

          <div class="info__body">
            <div class="person__year">
              {{ human.birth_year }}
            </div>

            <div class="person__name">
              {{ human.name }}
            </div>

            <div class="person__characteristiс">
              <div>Eye color : {{ human.eye_color }}</div>

              <div>Height : {{ human.height }}</div>

              <div>Mass : {{ human.mass }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["GET_HUMANS_LIST"]),
  },
  computed: {
    ...mapGetters(["REZULT_ARRAY", "LOADING"]),
  },
  mounted() {
    this.GET_HUMANS_LIST();
  },
};
</script>

