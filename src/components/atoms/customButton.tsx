import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { MouseEventHandler } from "react";

type Props = { label: String; onClick?: MouseEventHandler; width?: string,backColor:string };

const CustomButton = (props: Props) => {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    width: props.width ? props.width : "100%",
    color: "#fff",
     backgroundColor: props.backColor,
     
  }));

  return (
    <ColorButton variant="contained" onClick={props.onClick}>
      {props.label}
    </ColorButton>
  );
};

export default CustomButton;
