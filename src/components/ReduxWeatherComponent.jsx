'use client';

// Import styles
import "@/styles/ReduxWeatherComponent.css";

// Import React Library
import * as React from "react";


// Import Material UI components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Skeleton from '@mui/material/Skeleton';

// Import Redux
import { useSelector , useDispatch} from "react-redux";
import {fetchWeatherFromApiThunkAction} from "@/redux/slices/WeatherSlice"



export default function ReduxWeatherComponent() 
{

    //read value from redux using [useSelector]
    const weatherData = useSelector((store) => store.WeatherReducer.weatherData);
    const isLoading = useSelector((store) => store.WeatherReducer.isLoading);

    //write value to redux using [useDispatch]
    const storeDispatch = useDispatch();

    //Call Api When Component Full Rendered via useEffect Hook
    React.useEffect(()=>
    {
      const lattude=30.461;
      const longtute=31.188;
      const units="metric";
      const lang="ar";
      const delayMs=1000;

      //call thunk function that will responsable for api request and after it finsish it will send response to store reducer to update the state value
      storeDispatch(fetchWeatherFromApiThunkAction({lattude,longtute,units,lang,delayMs}));

    },[]);


  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 2, md: 4 },
      }}
    >
      <Card
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 760,
          borderRadius: 4,
          p: { xs: 2.5, md: 3 },
          backgroundColor: "#1547a6",
          color: "#ffffff",
          direction: "rtl",
          fontFamily: "Alexandria, sans-serif",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            mb: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.1rem", md: "3.4rem" },
              lineHeight: 1,
              fontWeight: 500,
            }}
          >



            {isLoading ? <Skeleton /> :  weatherData.city}
        
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.35rem" },
              color: "rgba(255,255,255,0.72)",
              fontWeight: 400,
            }}
          >
            {isLoading ? <Skeleton /> :weatherData.date}
          </Typography>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.45)",
            mb: { xs: 2, md: 2 },
            mt: { xs: 5, md: 5 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            direction: "ltr",
          }}
        >
          {isLoading ? <Skeleton variant="circular" width={40} height={40} /> : <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Weather Icon" />}
                    

          <Box sx={{ minWidth: 210, textAlign: "right", direction: "rtl" }}>
            <Typography
              sx={{
                fontSize: { xs: "4rem", md: "5.4rem" },
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              {isLoading ? <Skeleton /> : weatherData.temp}
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                fontSize: { xs: "1.05rem", md: "1.45rem" },
                color: "rgba(255,255,255,0.76)",
                textTransform: "lowercase",
              }}
            >
              {isLoading ? <Skeleton /> : weatherData.description}
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                fontSize: { xs: "0.95rem", md: "1.15rem" },
                color: "rgba(255,255,255,0.9)",
              }}
            >
              الصغرى: {isLoading ? <Skeleton /> : weatherData.minTemp} | الكبرى: {isLoading ? <Skeleton /> : weatherData.maxTemp}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
