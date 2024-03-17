import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
 import IconButton from "@mui/material/IconButton";

const CustomInput = (props: any) => {
  const {
    name,
    type,
    placeholder,
    formik,
    style,
    inputStyle,
    rightIcon,
    iconButton,
    handleChange,
    maxLength,
    inputRef,
    rows,
    className,
    disabled,
    sx,
  } = props;
  return (
    <>
      <TextField
        sx={sx}
        disabled={disabled}
        className={className ? className : ""}
        name={name}
        inputRef={inputRef}
        type={type ? type : "text"}
        placeholder={placeholder}
        InputLabelProps={{ shrink: false }}
        rows={rows ? rows : 1}
        variant="standard"
        multiline={rows ? true : false}
        style={{ width: "100%" }}
        InputProps={{
          style: style,
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="end">
              {rightIcon ? (
                <img alt="" width={25} height={25} src={rightIcon} />
              ) : null}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {iconButton ? (
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                ></IconButton>
              ) : null}
            </InputAdornment>
          ),
        }}
        inputProps={{
          maxLength: maxLength ? maxLength : null,
          style: inputStyle
            ? inputStyle
            : { paddingLeft: 10, paddingRight: 10 },
        }}
        value={formik.values[name]}
        onChange={handleChange ? handleChange : formik.handleChange}
        error={formik.touched[name] && Boolean(props.formik.errors[name])}
        helperText={props.formik.touched[name] && props.formik.errors[name]}
      />
    </>
  );
};

export default CustomInput;
