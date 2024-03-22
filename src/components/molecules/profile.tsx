import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import ProfileItem from "./profileItem";
import userService  from "../../services/userService";
import { convertToPersianDate } from "../../utils/helper";
import { UserResponse } from "../../utils/interface";

type Props = {};
const Profile = (props: Props) => {
  const [data, setdata] = useState<UserResponse | null>();

  useEffect(() => {
    (async () => {
      try {
        const result = await userService.profile();
        if (result) {
          setdata(result);
        }
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {}, [data]);

  const formik: any = useFormik({
    initialValues: {
      name: data?.name,
      lastName: data?.lastName,
      date: convertToPersianDate(data?.date),
      nationalCode: data?.nationalCode,
      personelCode: data?.personelCode,
      role: data?.role,
      mobileNum: data?.mobileNum,
      watchId: data?.watchId,
    },
    enableReinitialize: true,

    onSubmit: async (values: any) => {},
  });

  if (!data) {
    return null;
  }
  return (
    <Grid container spacing={2} columns={12} alignItems={"center"}>
      <ProfileItem name={"name"} title={"نام"} formik={formik} />
      <ProfileItem name={"lastName"} title={"نام خانوادگی"} formik={formik} />
      <ProfileItem name={"date"} title={"تاریخ تولد"} formik={formik} />
      <ProfileItem name={"nationalCode"} title={"کد ملی"} formik={formik} />
      <ProfileItem name={"personelCode"} title={"کد پرسنلی"} formik={formik} />
      <ProfileItem name={"role"} title={"سمت"} formik={formik} />
      <ProfileItem name={"mobileNum"} title={"شماره موبایل"} formik={formik} />
      <ProfileItem name={"watchId"} title={"ای دی ساعت"} formik={formik} />
    </Grid>
  );
};

export default Profile;
