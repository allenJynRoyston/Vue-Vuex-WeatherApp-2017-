import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: null,
    dailyData: null,
    showWarnings: true
  },
  getters: {
    _weatherData: state => () => state.weatherData,
    _dailyData: state => () => state.dailyData,
    _showWarnings: state => () => state.showWarnings
  },
  mutations: {
    setWeatherData(state, value){
      state.weatherData = value
    },
    setDailyData(state, value){
      state.dailyData = value
    },
    setShowWarnings(state, value){
      state.showWarnings = value;
    }
  }
})
