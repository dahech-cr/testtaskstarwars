<template>
  <div class="header">
    <div class="header__body">
      <div class="container header__container">
        <div class="header__logo">
          <router-link to="/"> <img src="../assets/image/Star Wars.svg" alt="" /></router-link>
        </div>

        <div class="header__nav ml-auto">
          <div class="nav__desktop">
            <a href="#footer" class="nav__contacts">Contacts</a>

            <button @click="goToAbout" class="about__button">More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goToAbout(){
      this.$router.push('/about')
    }
  }
};
</script>

<style lang="scss" scoped>
$orange-color: rgba(255, 99, 74, 1);

.header {
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 5;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    background-color: #f2eeee;
    width: 100%;
    z-index: 3;
  }
}
.header__body {
  width: 100%;
  position: relative;
  z-index: 5;
}
.header__container {
  display: flex;
  align-items: center;
}
.header__logo {
  width: 104.65px;
  height: 30.4px;

  line-height: 0.6;

  &:hover {
    cursor: pointer;
  }

  & img {
    height: 100%;
    width: 100%;
  }
}
.header__nav {
  display: flex;
  align-items: center;
}
.nav__desktop {
  line-height: 0.6;
  display: flex;
  justify-content: space-between;
  width: 270px;
}
.nav__languages {
  line-height: 0.6;
  padding-top: 17px;
  color: black;
}
.nav__contacts {
  margin-top: 16.5px;
  height: fit-content;
  color: black;
  transition-duration: 0.2s;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: $orange-color;
  }
}
.about__button {
  font-size: 14px;
  color: white;
  border: none;
  line-height: 0.6;
  padding: 16.5px 58px 16.5px 56px;
  outline: none;
  border-radius: 6px;
  background-color: $orange-color;
  width: 162px;
  height: 48px;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #d24335;
  }
}

.about__link {
  line-height: 0.8;
  font-size: 14px;
  //width: 48px;
  height: 13px;
  color: black;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    color: $orange-color;
  }
}
.shape__logo {
  width: 6px;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    transform: rotate(180deg);
  }
}
</style>

