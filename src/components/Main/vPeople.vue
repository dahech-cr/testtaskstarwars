<template>
  <div id="people" class="persons">
    <div v-if="LOADING" class="person__loading">
      <div class="spinner-border text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="persons__list">
      <div v-if="REZULT_ARRAY == 0" class="persons__empty">NO INFORMATION</div>

      <router-link
        tag="div"
        class="person__info"
        v-for="(human, index) in REZULT_ARRAY"
        :key="index"
        :to="'/one_person/' + human.name"
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
      </router-link>
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


<style lang="scss" scoped>
$orange-color: rgba(255, 99, 74, 1);
.persons__empty {
  color: black;
  font-size: 30px;
}
.person__loading {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgb(150, 150, 150);
  z-index: 50;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.persons {
  margin-top: 34px;
  line-height: 0.9;
  color: white;
}
.persons__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.person__info {
  cursor: pointer;
  position: relative;
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  margin-bottom: 17px;
  width: 49.5%;
  height: 410px;
}
.humans__image {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}
.image__black {
  border-radius: 6px;
  opacity: 0.4;
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}
.info__body {
  position: absolute;
  padding: 21px 24px;
}
.person__year {
  padding-bottom: 16px;
}
.person__name {
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 8px;
}
.person__characteristiс {
  display: inline-flex;

  & div {
    font-weight: 100;
    margin-right: 24px;
    font-size: 14px;
  }
}
</style>

