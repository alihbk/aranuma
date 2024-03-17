import React from "react";
import { styled } from "@mui/system";
import axiosInstance from "../../utils/axios";
import { Grid, Stack } from "@mui/material";
import CustomInput from "../atoms/customInput";
import { useFormik } from "formik";
import { loginValidation } from "../../validations/validation";

type Props = {};

const Container = styled("div")({
  width: 425,
  height: 425,
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px 0px #0000001A",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const handleLogin = async () => {
  try {
    const response = await axiosInstance.post("/login", {
      username: "a",
      password: "a",
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  } catch (error) {
    console.error(error);
  }
};

const handleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const LoginPage = (props: Props) => {
  const formik: any = useFormik({
    initialValues: {
      name: null,
    },
    validationSchema: loginValidation,
    onSubmit: async (values: any) => {
      let data = {
        name: values.name,
      };
    },
  });

  let renderUsername = (
    <Grid container spacing={2} columns={12} alignItems={"center"}>
      <Grid item xs={4} alignContent={"center"}>
        <div>{"نام کاربری"}</div>
      </Grid>
      <Grid item xs={8}>
        <div>
          <CustomInput
            style={{
              backgroundColor: "#F5F5F5",
              border: "none",
            }}
            name="name"
            formik={formik}
            placeholder="نام کاربری را وارد کنید"
          />
        </div>
      </Grid>
      <Grid item xs={4} alignContent={"center"}>
        <div>{"کلمه عبور"}</div>
      </Grid>
      <Grid item xs={8}>
        <div>
          <CustomInput
            style={{
              backgroundColor: "#F5F5F5",
              border: "none",
            }}
            name="name"
            formik={formik}
            placeholder="کلمه عبور را وارد کنید"
          />
        </div>
      </Grid>
    </Grid>
  );

  return (
    <Container>
      <Stack direction={"column"}>
        <img src="../assets/logo.png" width={186} height={235} alt="" />

        {renderUsername}

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </Stack>
    </Container>
  );
};

export default LoginPage;
