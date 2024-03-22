import React from "react";
import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";

type Props = {
  label: string;
  icon: any;
  value?: string | number;
  color?: string;
};

const DashboardCard = (props: Props) => {
  const Container = styled("div")({
    width: 125,
    height: 130,
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px 0px #0000001A",
    display: "flex",
    flexDirection: "column",
    padding: "10px 15px",
    borderRadius: 8,
  });

  return (
    <Container>
      <Grid container direction={"column"}>
        <Box sx={{ display: "flex", alignContent: "flex-start" }}>
          {props.label}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            height: 80,
          }}
        >
          <img src={props.icon} alt="" width={"100%"} height={"100%"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            color: props.color,
            fontWeight: "bold",
          }}
        >
          {props.value}
        </Box>
      </Grid>
    </Container>
  );
};

export default DashboardCard;
