import * as yup from "yup";

const isvalidPassword = (value: string) => {
  if (value !== "david@123") {
    return false;
  }
  return true;
};

export const loginValidation = yup.object({
  username: yup.string().required("وارد کردن نام کاربری الزامی می باشد"),
  password: yup
    .string()
    .required("وارد کردن کلمه عبور الزامی می باشد")
    .test("password", "رمز عبور وارد شده اشتباه است", async (value) => {
      return isvalidPassword(value);
    }),
});
