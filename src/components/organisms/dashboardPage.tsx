import { useState } from "react";
import DashboardCard from "../molecules/dashboardCard";
import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
import CustomMap from "../molecules/customMap";
import Profile from "../molecules/profile";
import MqttClient from "../molecules/mqttClient";
import { mqttUrl, mqttTopicUrl } from "../../utils/const";
import { MqttResponse } from "../../utils/interface";

type Props = {};

const DashboardPage = (props: Props) => {
  const [messages, setMessages] = useState<MqttResponse>();
  const handleMqttMessage = (message: any) => {
     setMessages(message);
  };

  const Container = styled("div")({
    width: "85%",
    padding: "30px 15px",
    margin: "0 auto",
  });

  let deviceBenchmark = [
    <DashboardCard
      label="باطری"
      icon={"/assets/icons/battery-66.png"}
      value={messages?.BatteryLevel}
      color="#62A124"
    />,
    <DashboardCard
      label="قدرت فرکانس"
      icon={"/assets/icons/wifi.png"}
      value={messages?.SignalLevel}
      color="#000"
    />,
  ];

  let healthBenchmarks = [
    <DashboardCard
      label="اکسیژن"
      icon={"/assets/icons/ox.png"}
      value={messages?.BloodOxygen}
      color="#A62A49"
    />,
    <DashboardCard
      label="فشار خون"
      icon={"/assets/icons/feshar.png"}
      value={messages?.BloodOxygenColor}
      color="#24A139"
    />,
    <DashboardCard
      label="ضربان قلب"
      icon={"/assets/icons/zaraban.png"}
      value={messages?.Heartbeat}
      color="#62A124"
    />,
    <DashboardCard
      label="دما"
      icon={"/assets/icons/dama.png"}
      value={messages?.Temperature}
      color="#A76B17"
    />,
    <DashboardCard
      label="وضعیت کلی"
      icon={"/assets/icons/koli.png"}
      value={messages?.Status}
      color="#62A124"
    />,
  ];

  let renderItems = (
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
  );

  let renderProfile = (
    <Grid
      item
      xs={4.95}
      sx={{
        backgroundColor: "#fff",
        borderRadius: 4,
        padding: "5px 25px 0px 25px",
      }}
    >
      <Grid>
        <Box sx={{ marginBottom: 1 }}>{"مشخصات کاربر"}</Box>
        <Profile />
      </Grid>
    </Grid>
  );

  let renderMap = (
    <Grid container direction={"row"} gap={2}>
      {renderProfile}
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
          <CustomMap
            location={{
              lat: messages?.LatLong[0],
              lng: messages?.LatLong[1],
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Container>
      <Grid container direction={"column"} gap={2}>
        {renderItems}
        {renderMap}
      </Grid>
      <MqttClient
        brokerUrl={mqttUrl}
        topic={mqttTopicUrl}
        onMessage={handleMqttMessage}
      />
    </Container>
  );
};

export default DashboardPage;
