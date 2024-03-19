import React, { useState, useEffect } from "react";
import DashboardCard from "../molecules/dashboard/dashboardCard";
import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
import mqtt from "mqtt";
import CustomMap from "../molecules/dashboard/customMap";

type Props = {};

const DashboardPage = (props: Props) => {
  // const [messages, setMessages] = useState<string[]>([]);

  // useEffect(() => {
  //   const client = mqtt.connect("ws://185.129.118.179:8083", {
  //     clientId: "name_family",
  //     username: "Aranuma",
  //     password: "Aranuma",
  //   });

  //   client.on("connect", () => {
  //     console.log("Connected to MQTT server");
  //     client.subscribe("/Aranuma/TestForFront/HealthInfo", { qos: 0 });
  //   });

  //   client.on("message", (topic, message) => {
  //     console.log(`Received message on topic ${topic}: ${message.toString()}`);
  //   });

  //   return () => {
  //     client.end();
  //     console.log("Disconnected from MQTT server");
  //   };
  // }, []);

  const Container = styled("div")({
    width: "85%",
    height: "90%",
    padding: "30px 15px",
    margin: "0 auto",
  });

  let deviceBenchmark = [
    <DashboardCard
      label="باطری"
      icon={"/assets/icons/battery/battery-66.png"}
      value={"66%"}
      color="#62A124"
    />,
    <DashboardCard
      label="قدرت فرکانس"
      icon={"/assets/icons/wifi/wifi.png"}
      value={2}
      color="#000"
    />,
  ];

  let healthBenchmarks = [
    <DashboardCard
      label="باطری"
      icon={"/assets/icons/battery/battery-66.png"}
      value={"66%"}
      color="#62A124"
    />,
    <DashboardCard
      label="باطری"
      icon={"/assets/icons/battery/battery-66.png"}
      value={"66%"}
      color="#62A124"
    />,
    <DashboardCard
      label="باطری"
      icon={"/assets/icons/battery/battery-66.png"}
      value={"66%"}
      color="#62A124"
    />,
    <DashboardCard
      label="باطری"
      icon={"/assets/icons/battery/battery-66.png"}
      value={"66%"}
      color="#62A124"
    />,
    <DashboardCard
      label="باطری"
      icon={"/assets/icons/battery/battery-66.png"}
      value={"66%"}
      color="#62A124"
    />,
  ];

  return (
    <Container>
      <Grid container direction={"column"} gap={2}>
        <Grid container direction={"row-reverse"} gap={2}>
          {deviceBenchmark.map((x) => {
            return x;
          })}
          <Box
            sx={{
              width: 11,
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <img src="/assets/icons/divider.png" alt="" height={150.29} />
          </Box>
          {healthBenchmarks.map((x) => {
            return x;
          })}
        </Grid>

        <Grid container direction={"row"} gap={2}>
          <Grid
            item
            xs={4.95}
            sx={{ backgroundColor: "#fff", borderRadius: 4, padding: 5 }}
          >
            {"profile"}
          </Grid>
          <Grid
            item
            xs
            sx={{
              backgroundColor: "#fff",
              borderRadius: 4,
              padding: "5px 0px 0px 0px",
            }}
          >
            <Grid>
              <Box sx={{ marginRight: 2, marginBottom: 1 }}> {"نقشه"}</Box>
              <CustomMap />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
