'use client';

// Import styles
import "@/styles/WeatherComponent.css";

// Import React Library
import * as React from "react";

// Import Other Library
import axios from "axios";


// Import Material UI components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// Import Material UI icons



export default function WeatherComponent() 
{

    const lattude=30.461
    const longtute=31.188
    const apiKey="371a7e736b01b46e1d93df5010a2a523"
    const units="metric"
    const lang="ar"
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lattude}&lon=${longtute}&appid=${apiKey}&units=${units}&lang=${lang}`;
    
    const [weatherData,setWeatherData]=React.useState({
        countery:"مصر",
        city:"بنها",
        temp:"25",
        description:"",
        minTemp:"20",
        maxTemp:"30",
        icon:"",
        humidity:"",
        windSpeed:"",
        sunrise:"",
        sunset:"",
        date:"",
    });


    //Call Api When Component Full Rendered via useEffect Hook
    React.useEffect(()=>
    {
        const controller = new AbortController();

        axios.get(apiUrl,{ signal: controller.signal})
        .then((response)=>
        {
            //on success
            console.log("APi Get Reqeuest Success")
            console.log(response.data)
            setWeatherData(
            {
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
            });
        })
        .catch((error)=>
        {
            //on fail
            if (error.name === "CanceledError") 
            {
                console.log("Request canceled");
                return;
            }
            
            console.log("API Get Request Fail");
            console.log(error);
        })
        .finally(()=>
        {
            //on completed (success or error) 
            console.log("APi Get Reqeuest Completed")
        });


        //clean up resources after component un-mounted (call first when load component and when unmout component and go to another component)
        return ()=>{
            console.log("Clean up Resource When Component un-Mounted");
            controller.abort();
        };

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

            {weatherData.city}
        
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.35rem" },
              color: "rgba(255,255,255,0.72)",
              fontWeight: 400,
            }}
          >
            {weatherData.date}
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
          <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Weather Icon" />

          <Box sx={{ minWidth: 210, textAlign: "right", direction: "rtl" }}>
            <Typography
              sx={{
                fontSize: { xs: "4rem", md: "5.4rem" },
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              {weatherData.temp}
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                fontSize: { xs: "1.05rem", md: "1.45rem" },
                color: "rgba(255,255,255,0.76)",
                textTransform: "lowercase",
              }}
            >
              {weatherData.description}
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                fontSize: { xs: "0.95rem", md: "1.15rem" },
                color: "rgba(255,255,255,0.9)",
              }}
            >
              الصغرى: {weatherData.minTemp} | الكبرى: {weatherData.maxTemp}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
