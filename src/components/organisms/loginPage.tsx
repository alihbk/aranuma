import React, { useState } from "react";
import { styled } from "@mui/system";
import { Alert, Grid, Stack } from "@mui/material";
import CustomInput from "../atoms/customInput";
import { useFormik } from "formik";
import { loginValidation } from "../../validations/validation";
import CustomButton from "../atoms/customButton";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import CustomInputPassword from "../atoms/customInputPassword";

type Props = {};

const Container = styled("div")({
  width: 425,
  height: 455,
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px 0px #0000001A",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 30,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const LoginPage = (props: Props) => {
  const [isloginSuccess, setisloginSucess] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const formik: any = useFormik({
    initialValues: {
      username: null,
      password: null,
    },
    validationSchema: loginValidation,
    onSubmit: async (values: any) => {
 
      try {
        let response = await authService.login(
          values.username,
          values.password
        );
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshTokenId);

        setisloginSucess(true);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } catch (error) {
        setisloginSucess(false);
      }
    },
  });

 
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  let renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} columns={12} alignItems={"center"}>
        <Grid item xs={3} alignContent={"center"}>
          <div>{"نام کاربری"}</div>
        </Grid>
        <Grid item xs={9}>
          <div>
            <CustomInput
              style={{
                backgroundColor: "#F5F5F5",
                border: "none",
                height: 55.88,
              }}
              name="username"
              formik={formik}
              placeholder="نام کاربری را وارد کنید"
            />
          </div>
        </Grid>
        <Grid item xs={3} alignContent={"center"}>
          <div>{"کلمه عبور"}</div>
        </Grid>
        <Grid item xs={9}>
          <div>
            <CustomInputPassword
              style={{
                backgroundColor: "#F5F5F5",
                border: "none",
                height: 55.88,
              }}
              name="password"
              formik={formik}
              placeholder="کلمه عبور را وارد کنید"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            label={"ورود به سامانه"}
            backColor="#0066FF"
            onClick={formik.handleSubmit}
          />
        </Grid>

        {/* {isloginSuccess ? (
          <Alert variant="filled" severity="success">
            {"با موفقیت وارد شدید"}
          </Alert>
        ) : isloginSuccess === false ? (
          <Alert variant="filled" severity="error">
            {"نام کاربری  یا کلمه عبور صحیح نمی باشد"}
          </Alert>
        ) : (
          ""
        )} */}
      </Grid>
    </form>
  );

  return (
    <Container>
      <Stack direction={"column"} alignItems={"center"}>
        <img src="../assets/logo.png" width={186} height={235} alt="" />
        <br />
        {renderForm}
      </Stack>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
};

export default LoginPage;
