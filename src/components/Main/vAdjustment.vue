<template >
  <div id="adjustment" class="adjustment">
    <div class="filer">
      <div class="filter__item">
        <div class="filter__header">
          <div class="filter__name">Eye color</div>
          <img
            id="shape__logo"
            class="shape__logo"
            src="../../assets/image/Shape.svg"
            alt=""
          />
        </div>

        <div class="dropdown">
          <div class="dropdown__body">
            <div
              v-for="(color, index) in colorArray"
              :key="index"
              @click="setColorFilter(color.name)"
              class="dropdown__item"
            >
              <input
                v-model="currentColor"
                :value="color.name"
                type="radio"
                name="option"
                class="input__point"
                :id="color.name"
                autocomplete="off"
              />
              <label class="dropdown__point color__active" :for="color.name">{{
                color.name
              }}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="filter__item">
        <div class="filter__header">
          <div class="filter__name">Height</div>
          <img class="shape__logo" src="../../assets/image/Shape.svg" alt="" />
        </div>

        <div class="dropdown">
          <div class="range-slider__body">
            <div class="input__body">
              <input
                @blur="setRangeSliderHeight"
                class="range__input"
                v-model="heightValues.minHeightvalue"
                min="0"
                max="202"
                type="number"
              />
              <input
                @blur="setRangeSliderHeight"
                class="range__input"
                v-model="heightValues.maxHeightvalue"
                type="number"
                min="0"
                max="202"
              />
            </div>
            <div class="input__data">
              <div>{{ heightValues.minHeightvalue }} cm</div>

              <div>{{ heightValues.maxHeightvalue }} cm</div>
            </div>
            <div class="slider__body">
              <div class="multi-range-slider">
                <input
                  class="range__slider"
                  type="range"
                  min="0"
                  step="2"
                  max="202"
                  @change="setRangeSliderHeight"
                  v-model="heightValues.minHeightvalue"
                />
                <input
                  class="range__slider"
                  type="range"
                  min="0"
                  step="2"
                  max="202"
                  @change="setRangeSliderHeight"
                  v-model="heightValues.maxHeightvalue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="filter__item">
        <div class="filter__header">
          <div class="filter__name">Age</div>
          <img class="shape__logo" src="../../assets/image/Shape.svg" alt="" />
        </div>

        <div class="dropdown">
          <div class="age__dropdown range-slider__body">
            <div class="input__body">
              <input
                @blur="setRangeSliderAge"
                class="range__input"
                v-model="ageValues.minAgeValue"
                min="0"
                max="112"
                type="number"
              />
              <input
                @blur="setRangeSliderAge"
                class="range__input"
                v-model="ageValues.maxAgeValue"
                type="number"
                min="0"
                max="112"
              />
            </div>
            <div class="input__data">
              <div>{{ ageValues.minAgeValue }} BBY</div>

              <div>{{ ageValues.maxAgeValue }} BBY</div>
            </div>
            <div class="slider__body">
              <div class="multi-range-slider">
                <input
                  class="range__slider"
                  type="range"
                  min="0"
                  step="2"
                  max="112"
                  @change="setRangeSliderAge"
                  v-model="ageValues.minAgeValue"
                />
                <input
                  class="range__slider"
                  type="range"
                  min="0"
                  step="2"
                  max="112"
                  @change="setRangeSliderAge"
                  v-model="ageValues.maxAgeValue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="filter__item">
      <div class="filter__header">
        <div class="sort__burger">
          <span></span>
        </div>

        <div class="sort__mob filter__name">Sort by</div>
        <img
          class="sort__mob shape__logo"
          src="../../assets/image/Shape.svg"
          alt=""
        />
      </div>

      <div class="dropdown">
        <div class="sort__dropdown dropdown__body">
          <div
            v-for="(sort, index) in sortArray"
            :key="index"
            @click="setSortedFilter(sort.name)"
            class="dropdown__item"
          >
            <input
              v-model="currnetSort"
              :value="sort.name"
              type="radio"
              name="option_2"
              class="input__point"
              :id="sort.name"
              autocomplete="off"
            />
            <label class="dropdown__point sorted__active" :for="sort.name">{{
              sort.name
            }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      currentColor: null,
      currnetSort: null,
      colorArray: [
        {
          name: "all",
        },
        {
          name: "blue",
        },
        {
          name: "blue-gray",
        },
        {
          name: "yellow",
        },
        {
          name: "red",
        },
        {
          name: "brown",
        },
      ],
      sortArray: [
        {
          name: "age",
        },
        {
          name: "mass",
        },
        {
          name: "height",
        },
      ],
      ageValues: {
        minAgeValue: 0,
        maxAgeValue: 112,
      },
      heightValues: {
        minHeightvalue: 0,
        maxHeightvalue: 202,
      },
      keyValue: 0,
    };
  },
  methods: {
    ...mapActions(["COLOR_FILTER", "AGE_FILTER", "HEIGHT_FILTER", "SORT_BY"]),
    setFilterUrl() {
      //console.log('github')
      let url =
        "/starwars.github.io/" +
        "color" +
        this.currentColor +
        "+height" +
        this.heightValues.minHeightvalue +
        "and" +
        this.heightValues.maxHeightvalue +
        "+age" +
        this.ageValues.minAgeValue +
        "and" +
        this.ageValues.maxAgeValue +
        "+sortBy" +
        this.currnetSort;

      function setUrl() {
        window.history.pushState("object or string", "Title", url);
      }

      setTimeout(setUrl, 500);
    },
    setSortedFilter(name) {
      this.currnetSort = name;
      this.SORT_BY(name);
      //this.setFilterUrl();
    },
    setColorFilter(name) {
      (this.currentColor = name), this.COLOR_FILTER(name);
      //this.setFilterUrl();
      this.SORT_BY(this.currnetSort);
    },
    setRangeSliderAge() {
      if (this.ageValues.minAgeValue > this.ageValues.maxAgeValue) {
        var min = Number(this.ageValues.minAgeValue);
        this.ageValues.minAgeValue = Number(this.ageValues.maxAgeValue);
        this.ageValues.maxAgeValue = min;
      } else {
        this.ageValues.minAgeValue = Number(this.ageValues.minAgeValue);
        this.ageValues.maxAgeValue = Number(this.ageValues.maxAgeValue);
      }

      this.AGE_FILTER(this.ageValues);

      //this.setFilterUrl();
      this.SORT_BY(this.currnetSort);
    },
    setRangeSliderHeight() {
      if (this.heightValues.minHeightvalue > this.heightValues.maxHeightvalue) {
        var min = Number(this.heightValues.minHeightvalue);
        this.heightValues.minHeightvalue = Number(
          this.heightValues.maxHeightvalue
        );
        this.heightValues.maxHeightvalue = min;
      } else {
        this.heightValues.minHeightvalue = Number(
          this.heightValues.minHeightvalue
        );
        this.heightValues.maxHeightvalue = Number(
          this.heightValues.maxHeightvalue
        );
      }

      this.HEIGHT_FILTER(this.heightValues);

      //this.setFilterUrl();
      this.SORT_BY(this.currnetSort);
    },
  },
  computed: {
    ...mapGetters(["LOADING"]),
  },
};
</script>

<style lang="scss" scoped>
$orange-color: rgba(255, 99, 74, 1);

.adjustment {
  display: flex;
  justify-content: space-between;

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
  /* Non-prefixed version, currently
                                        not supported by any browser */
}
.filer {
  //width: 242px;
  display: flex;
  justify-content: space-between;
}
.filter__item {
  display: block;
  //position: relative;
  //width: auto;
  //display: block;

  &:last-child {
    //background-color: red;

    .filter__header {
      margin-right: 0px;
    }
  }

  //padding-left: 4px;
}
.filter__header {
  width: auto;
  margin-right: 40px;
  padding-bottom: 14px;
  display: inline-flex;

  &:hover {
    cursor: pointer;
  }
}
.filter__name {
  font-size: 14px;
  padding-right: 9px;
}
.input__body {
  display: flex;
  justify-content: space-between;
}
.input__data {
  margin-top: 8px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
}
.range__input {
  max-width: 100px;
  padding: 8px 12px 9px 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 6px;

  &:focus {
    outline: none;
    border: 1px solid $orange-color;
  }
}
.dropdown {
  display: none;
  position: absolute;
  z-index: 1;
}
.dropdown__body {
  position: absolute;

  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 50;
  left: -13px;
  border-radius: 6px;
  padding: 12.64px 0 16px 0;
  width: max-content;
}
.sort__dropdown {
}
.sort__mob {
}
.range-slider__body {
  height: auto;
  display: block;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: -83px;
  border-radius: 6px;
  padding: 20px 26px 24px 20px;
}
.age__dropdown {
}
.dropdown__item {
  //max-height: 25px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0px;
  }
}
.filter__item:hover {
  & .filter__name {
    color: $orange-color;
  }

  & .dropdown {
    display: block;
  }

  .shape__logo {
    transition-duration: 0.2s;
    cursor: pointer;
    transform: rotate(180deg);
  }
}
.slider__body {
  padding-top: 10px;
  text-align: center;
}
.sort__burger {
  margin-top: 6px;
  display: none;
  position: relative;
  width: 21.16px;
  height: 17.92px;

  &:before {
    content: "";
    height: 1.5px;
    position: absolute;
    width: 21.62px;
    left: 0;
    background-color: rgb(0, 0, 0);
    top: 0;
  }

  & span {
    height: 1.5px;
    position: absolute;
    width: 14.4px;
    left: 0;
    background-color: black;
    top: 8px;
  }

  &:after {
    content: "";
    height: 1.5px;
    position: absolute;
    width: 7.59px;
    left: 0;
    background-color: rgb(0, 0, 0);
    bottom: 0;
  }

  &:hover {
    &:before,
    span,
    &:after {
      background-color: $orange-color;
    }
  }
}
.dropdown__point {
  min-height: 25px;
  line-height: 2;
  padding: 0 26px 0 20px;
  font-size: 14px;
  margin: 0;

  &:hover {
    position: relative;
    width: 100%;
    background-color: #f2eeee;
    color: black;
    cursor: pointer;
  }

  &:last-child {
    padding-bottom: 0px;
  }
}
.input__point {
  display: none;
}
.input__point:checked + .color__active {
  min-height: 25px;
  position: relative;
  width: 100%;
  left: 0;
  background-color: #f2eeee;
}
.input__point:checked + .sorted__active {
  min-height: 25px;
  position: relative;
  width: 100%;
  left: 0;
  background-color: #f2eeee;
}
.multi-range-slider {
  width: 200px;
  text-align: center;
  position: relative;
}

.multi-range-slider svg,
.multi-range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: -1px;
}

.range__slider {
  width: 100%;
  height: 2px;
  -webkit-appearance: none;
  outline: none;
  background-color: $orange-color;
}
.range__slider::-webkit-slider-thumb {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: $orange-color;
  -webkit-appearance: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
