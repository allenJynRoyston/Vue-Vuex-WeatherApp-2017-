import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: null,
    dailyData: null,
    showWarnings: true,
    isLoading: true,
    scottishWeatherDictionary:{
      'CLEAR': "Grianach",
      'PARTLY CLOUDY': "Snell",
      'MOSTLY CLOUDY': "Shite",
      'OVERCAST': "Drookit",
      'LIGHT RAIN': "Fret",
      'RAIN': "Drookit",
      'SNOW': "Flaggie"
    }
  },
  getters: {
    _weatherData: state => () => state.weatherData,
    _dailyData: state => () => state.dailyData,
    _showWarnings: state => () => state.showWarnings,
    _isLoading: state => () => state.isLoading,
    _scottishWeatherDictionary: state => () => state.scottishWeatherDictionary
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
    },
    setIsLoading(state, value){
      state.isLoading = value
    }
  }
})
