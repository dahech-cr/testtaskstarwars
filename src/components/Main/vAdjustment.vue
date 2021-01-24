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
      currentColor: "all",
      currnetSort: "all",
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
          name: "all",
        },
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
      console.log('github')
      let url =
        "/starwars.github.io/"+ "color" +
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
         window.history.pushState("object or string", "Title", url)
      }

      setTimeout(setUrl, 500);
    },
    setSortedFilter(name) {
      this.currnetSort = name
      this.SORT_BY(name);
      this.setFilterUrl();
    },
    setColorFilter(name) {
      this.currentColor = name,
      this.COLOR_FILTER(name);
      this.setFilterUrl();
      this.SORT_BY(this.currnetSort)
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

      this.setFilterUrl();
      this.SORT_BY(this.currnetSort)
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

      this.setFilterUrl();
      this.SORT_BY(this.currnetSort)
    },
  },
  computed: {
    ...mapGetters(["LOADING"]),
  },
};
</script>
