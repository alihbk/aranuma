import moment from "jalali-moment";
export const convertToPersianDate = (date?: Date) => {
  let persianDate = moment(date).locale("fa").format("YYYY/M/D");  
  return persianDate;
};
