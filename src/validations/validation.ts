import * as yup from "yup";

export const loginValidation = yup.object({
  username: yup.string().required("وارد کردن نام دسته بندی الزامی می باشد"),

  password: yup.string().required("وارد کردن کلمه عبور الزامی می باشد"),
});
