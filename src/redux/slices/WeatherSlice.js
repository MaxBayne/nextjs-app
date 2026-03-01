//import redux
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// Import Other Library
import axios from "axios";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//creating middleware thunk for async logic like rest api 
export const fetchWeatherFromApiThunkAction = createAsyncThunk("fetchWeatherFromApiThunkAction",async({lattude,longtute,units,lang,delayMs})=>
{
    const apiKey="371a7e736b01b46e1d93df5010a2a523"
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lattude}&lon=${longtute}&appid=${apiKey}&units=${units}&lang=${lang}`;
    const controller = new AbortController();

    // ⏱ Delay 3 seconds
    await delay(delayMs);

    const response = await axios.get(apiUrl,{ signal: controller.signal})

    //pass result to action.payload of slice action (extraReducers that monitor states of thunk like pending,fullfilled,rejected)
    return {
            countery:response.data.sys.country,
            city:response.data.name,
            temp:response.data.main.temp,
            description:response.data.weather[0].description,
            minTemp:response.data.main.temp_min,
            maxTemp:response.data.main.temp_max,
            icon:response.data.weather[0].icon,
            humidity:response.data.main.humidity,
            windSpeed:response.data.wind.speed,
            sunrise:response.data.sys.sunrise,
            sunset:response.data.sys.sunset,
            date:new Date(response.data.dt * 1000).toLocaleDateString("ar-EG", {weekday: "long", year: "numeric", month: "long",day: "numeric"}),
          };
});



//creating slice ----------------------------------------------------

const initialState = {
  weatherData: {
        countery:"",
        city:"",
        temp:"",
        description:"",
        minTemp:"",
        maxTemp:"",
        icon:"",
        humidity:"",
        windSpeed:"",
        sunrise:"",
        sunset:"",
        date:"",
    },
    isLoading:false,
    error:null,

};


export const WeatherSlice = createSlice(
{
  name: "WeatherSlice",
  initialState:initialState,
  reducers: 
  {
    changeWeatherDataAction: (state,action) => 
    {
        console.log(state,action);
        
        state.weatherData = action.payload;
    },
  },
  extraReducers: (builder) => 
  {
    builder
    .addCase(fetchWeatherFromApiThunkAction.pending, (state, action) => 
    {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchWeatherFromApiThunkAction.fulfilled, (state, action) => 
    {
      state.isLoading = false;
      state.error = null;
      state.weatherData = action.payload;

      console.log("action.payload = ",action.payload);
    })
    .addCase(fetchWeatherFromApiThunkAction.rejected, (state, action) => 
    {
      state.isLoading = false;
      state.error = action.payload;

      console.log("rejected APi Request with error " + action.payload);
  
    });

  },
});

export const { changeWeatherDataAction } = WeatherSlice.actions;

export default WeatherSlice.reducer;

