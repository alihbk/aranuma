import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import CustomInput from "../atoms/customInput";

type Props = { formik: any; name: string; title: string };

const ProfileItem = (props: Props) => {
  return (
    <Fragment>
      <Grid item xs={3} alignContent={"center"}>
        <div>{props.title}</div>
      </Grid>
      <Grid item xs={9}>
        <div>
          {props.formik && (  
            <CustomInput
              disabled
              style={{
                backgroundColor: "#F5F5F5",
                border: "none",
                height: 55.88,
              }}
              name={props.name}
              placeholder={props.title}
              formik={props.formik}  
            />
          )}
        </div>
      </Grid>
    </Fragment>
  );
};

export default ProfileItem;
