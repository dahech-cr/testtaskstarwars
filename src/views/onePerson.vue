<template>
  <div class="one-person">
    <v-header />
    <div class="main__wrapper">
      <div class="image-wrapper">
        <img :src="PERSON_ONE_ARRAY[id].photo[0].img" alt="" />
        <div class="name">{{ PERSON_ONE_ARRAY[id].name }}</div>
      </div>
    </div>

    <div class="wrapper">
      <div class="description">
        {{ PERSON_ONE_ARRAY[id].desc }}
      </div>
      <div class="image-wrapper">
        <img :src="PERSON_ONE_ARRAY[id].photo[1].img" alt="" />
      </div>
      <div class="image-wrapper">
        <img :src="PERSON_ONE_ARRAY[id].photo[2].img" alt="" />
      </div>
    </div>

    <div @click="goNext" class="next-person">
      <div class="next-btn">next personage</div>
      <img :src="PERSON_ONE_ARRAY[idNext].photo[0].img" alt="" />
    </div>

    <v-footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VFooter from '../components/vFooter.vue';
import vHeader from "../components/vHeader.vue";
export default {
  components: { vHeader, VFooter },
  data() {
    return {
      name: "",
      id: 0,
      idNext: 0,
    };
  },
  methods: {
    FilterWatcher() {
      for (let i = 0; i < this.PERSON_ONE_ARRAY.length; i++) {
        if (this.PERSON_ONE_ARRAY[i].name == this.$route.params.type) {
          //console.log(this.PERSON_ONE_ARRAY[i]);
          this.id = i;

          if (i + 1 == this.PERSON_ONE_ARRAY.length) {
            this.idNext = 0;
          } else {
            this.idNext = i + 1;
          }
        }
      }
    },
    goNext() {
      this.$router.push(
        "/one_person/" + this.PERSON_ONE_ARRAY[this.idNext].name
      );
    },
  },
  computed: {
    ...mapGetters(["PERSON_ONE_ARRAY"]),
  },
  mounted() {
    window.scrollTo(0, 0);
    this.name = this.$route.params.type;
    this.FilterWatcher();
  },
};
</script>

<style lang="scss" scoped>
$orange-color: rgba(255, 99, 74, 1);
.one-person {
}
.main__wrapper {
  margin-top: 80px;
  position: relative;
  border-bottom: 1px solid black;
  .image-wrapper {
    height: 100vh;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .name {
    text-shadow: 1px 1px 2px rgb(255, 255, 255), 0 0 1em rgb(0, 0, 0),
      0 0 0.2em rgb(0, 0, 0);
    color: white;
    font-weight: bold;
    font-size: 90px;
    position: absolute;
    top: 40vh;
    width: 100%;
    text-align: center;
    //left: 40vw;
  }
}
.wrapper {
  max-width: 90vw;
  margin: 80px auto 100px;

  .description {
    font-weight: 100;
    padding: 30px;
    font-size: 20px;
    margin-bottom: 80px;
  }
  .image-wrapper {
    margin-left: auto;
    margin-bottom: 80px;
    border-radius: 10px;
    overflow: hidden;
    width: 50vw;
    height: 700px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }
}
.next-person {
  cursor: pointer;
  height: 500px;
  width: 100%;
  position: relative;
  margin-bottom: 80px;
  .next-btn {
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid $orange-color;
    line-height: 1;
    padding: 20px;
    position: absolute;
    top: 40px;
    right: 80px;
    z-index: 3;
    font-size: 21px;
    color: $orange-color;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>