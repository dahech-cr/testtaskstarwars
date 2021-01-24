import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    humasArray: [],
    resultArray: [],
    colorFilterArray: [],
    ageFilterArray: [],
    heightFilterArray: [],
    photoArray: [{
        name: "BeruWhitesunlars",
        photo: "Beru Whitesun lars.jpg"
      },
      {
        name: "BiggsDarklighter",
        photo: "Biggs Darklighter.jpg"
      },
      {
        name: "C3PO",
        photo: "C-3PO.png"
      },
      {
        name: "DarthVader",
        photo: "Darth Vader.jpg"
      },
      {
        name: "LeiaOrgana",
        photo: "Leia Organa.jpg"
      },
      {
        name: "LukeSkywalker",
        photo: "Luke Skywalker.jpg"
      },
      {
        name: "ObiWanKenobi",
        photo: "Obi-Wan Kenobi.jpg"
      },
      {
        name: 'OwenLars',
        photo: "Owen Lars.jpg"
      },
      {
        name: 'R2D2',
        photo: "R2-D2.jpg"
      },
      {
        name: "R5D4",
        photo: "R5-D4.jpeg"
      },
    ]

  },
  mutations: {
    SET_HUMANS_TO_STATE: (state, response) => {

      if (state.resultArray == 0) {
        state.isLoading = true
      }
      state.humasArray = response;

      for (var i = 0; i < state.humasArray.length; i++) {
        for (var b = 0; b < state.humasArray.length; b++) {
          if (state.humasArray[i].name.replace(/-|\s/g, "") == state.photoArray[b].name) {

            state.humasArray[i].human_photo = state.photoArray[b].photo

          }
        }
      }

      state.resultArray = response;
      state.colorFilterArray = response;
      state.ageFilterArray = response;
      state.heightFilterArray = response;

      if (state.resultArray != 0) {
        state.isLoading = false
      }

    },
    SET_COLOR_FILTER: (state, name) => {

      if (name == "all") {
        state.colorFilterArray = state.humasArray
      } else {
        state.colorFilterArray = state.humasArray.filter(color => color.eye_color == name)
      }







    },
    SET_AGE_FILTER: (state, obj) => {

      state.ageFilterArray = state.humasArray.filter(human => human.birth_year === 'unknown' || human.birth_year.replace(/\D/g, '') >= obj.minAgeValue && human.birth_year.replace(/\D/g, '') <= obj.maxAgeValue)

    },
    SET_HEIGHT_FILTER: (state, obj) => {
      state.heightFilterArray = state.humasArray.filter(human => human.height >= obj.minHeightvalue && human.height <= obj.maxHeightvalue)

    },
    SET_FILTERS: (state) => {

      document.body.style.overflow = "hidden"
      state.isLoading = true
      state.resultArray = []
      for (var colorItem = 0; colorItem < state.colorFilterArray.length; colorItem++) {
        for (var heightItem = 0; heightItem < state.heightFilterArray.length; heightItem++) {
          for (var ageItem = 0; ageItem < state.ageFilterArray.length; ageItem++) {
            if (
              state.colorFilterArray[colorItem] === state.heightFilterArray[heightItem] &&
              state.colorFilterArray[colorItem] === state.ageFilterArray[ageItem] &&
              state.heightFilterArray[heightItem] === state.ageFilterArray[ageItem]
            ) {

              state.resultArray.push(state.ageFilterArray[ageItem])

            }
          }
        }
      }

      function loadingFalse() {
        state.isLoading = false
        document.body.style.overflow = "auto"
      }

      setTimeout(loadingFalse, 500);

    },
    SET_SORT_BY: (state, name) => {

      document.body.style.overflow = "hidden"
      state.isLoading = true
      if (name == "all") {
        state.resultArray = state.resultArray
      } else if (name == "age") {
        state.resultArray.sort((a, b) => b.birth_year.replace(/[^\d.-]/g, '') - a.birth_year.replace(/[^\d.-]/g, ''));
      } else if (name == "mass") {
        state.resultArray.sort((a, b) => b.mass - a.mass);
      } else if (name == "height") {
        state.resultArray.sort((a, b) => b.height - a.height);
      }

      function loadingFalse() {
        state.isLoading = false
        document.body.style.overflow = "auto"
      }

      setTimeout(loadingFalse, 500);


    }
  },
  actions: {
    GET_HUMANS_LIST({
      commit
    }) {
      return axios
        .get("https://swapi.dev/api/people")

        .then(function (response) {
          console.log('httpsREQ')
          commit("SET_HUMANS_TO_STATE", response.data.results)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    COLOR_FILTER({
      commit
    }, name) {
      commit('SET_COLOR_FILTER', name)
      commit('SET_FILTERS')


    },
    AGE_FILTER({
      commit
    }, obj) {
      commit('SET_AGE_FILTER', obj)
      commit('SET_FILTERS')
    },
    HEIGHT_FILTER({
      commit
    }, obj) {
      commit('SET_HEIGHT_FILTER', obj)
      commit('SET_FILTERS')
    },
    SORT_BY({
      commit
    }, name) {



      commit("SET_SORT_BY", name)
    }
  },
  getters: {
    HUMANS_ARRAY(state) {
      return state.humasArray
    },

    REZULT_ARRAY(state) {
      return state.resultArray
    },
    LOADING(state) {
      return state.isLoading
    }
  },
})