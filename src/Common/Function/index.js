import moment from "jalali-moment";
export const addTime = min => {
  return moment().add(min, "m").format();
};
export const compaireTwoTime = time => {
  return moment().isBefore(time);
};
export const randomBetweenToNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const fancyTimeFormat = duration => {
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;
  var ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
};

export const ToDateJalali = date => {
  if (date) {
    return moment(date).locale("fa").format("YYYY/MM/DD");
  } else {
    return null;
  }
};
export const ToDateMonthJalali = date => {
  if (date) {
    return moment(date).locale("fa").format("YYYY/MM");
  } else {
    return null;
  }
};
export const ToMonthJalali = date => {
  if (date) {
    return moment(date).locale("fa").format("YYYY/MM");
  } else {
    return null;
  }
};
export const ConvertDate = date => {
  if (date) {
    return moment.from(date, "fa", "YYYY/MM/DD").format("YYYY/MM/DD");
  } else {
    return null;
  }
};

export const ToTimeJalali = date => {
  if (date) {
    return moment(date).locale("fa").format(" HH:mm:ss - YYYY/MM/DD");
  } else {
    return null;
  }
};

export const ToTime = date => {
  if (date) {
    return moment(date).locale("fa").format("HH:mm:ss");
  } else {
    return null;
  }
};

export const getPosition = (string, index) => {
  return `${string.substring(0, index)}...`;
  // return string.split(subString).slice(index).join(subString);
};

export const GenderRender = value => {
  let gender;
  switch (value) {
    case "men":
      gender = "آقایان";
      break;
    case "women":
      gender = "بانوان";
      break;
    case "both":
      gender = "آقایان و بانوان ";
      break;
    default:
      break;
  }
  return gender;
};

export const Day = day => {
  switch (day) {
    case "Fri":
    case "Friday":
      return "جمعه";
    case "Thu":
    case "Thursday":
      return "پنجشنبه";
    case "Wed":
    case "Wednesday":
      return "چهار شنبه";
    case "Tue":
    case "Tuesday":
      return "سه شنبه";
    case "Mon":
    case "Monday":
      return "دوشنبه";
    case "Sun":
    case "Sunday":
      return "یکشنبه";
    case "Sat":
    case "Saturday":
      return "شنبه";
    default:
      return "روز نا مشخص";
  }
};
export const CostRender = new Intl.NumberFormat("en-US");
export const RenderPrice = data => {
  const { price } = data;
  if (data.second_price) {
    return `${CostRender.format(data.second_price)} ${
      window.screen.width > 760 ? "تومان" : ""
    } `;
  }
  return `${CostRender.format(price)} ${
    window.screen.width > 760 ? "تومان" : ""
  } `;
};

export const addDate = days => {
  var result = new Date();
  result.setDate(result.getDate() + days);
  var month = result.getUTCMonth() + 1; //months from 1-12
  var day = result.getUTCDate();
  var year = result.getUTCFullYear();
  return year + "/" + month + "/" + day;
};

export const dateYMD = () => {
  var result = new Date();
  var month = result.getUTCMonth() + 1; //months from 1-12
  var day = result.getUTCDate();
  var year = result.getUTCFullYear();
  return year + "/" + month + "/" + day;
};

export const dateInputYMD = date => {
  var result = new Date(date);
  var month = result.getUTCMonth() + 1; //months from 1-12
  var day = result.getUTCDate();
  var year = result.getUTCFullYear();
  return year + "/" + month + "/" + day;
};
export const convertTime = time => {
  var result = new Date(time);
  var minute = result.getMinutes();
  var hour = result.getHours();
  return hour + "-" + minute;
};
export const compaireTwoDate = (date, now, time) => {
  if (new Date(date).getTime() == new Date(now).getTime()) {
    if (compareTwoHour(time)) {
      return true;
    } else {
      return "today";
    }
  }

  return new Date(date) < new Date(now);
};
const compareTwoHour = time => {
  let now = new Date();
  if (
    time &&
    renderData(time.split("-")[0].toString()) <
      now.getHours() * 60 + now.getMinutes()
  ) {
    return true;
  }
};
const renderData = data => {
  if (data.includes(":")) {
    if (+data.split(":")[0] * 60 + +data.split(":")[1] == 0) {
      return 24 * 60;
    }
    if (+data.split(":")[0] * 60 + +data.split(":")[1] < 240) {
      return 24 * 60;
    }

    return +data.split(":")[0] * 60 + +data.split(":")[1];
  } else {
    return +data * 60;
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const renderMonth = data => {
  switch (data) {
    case "01":
    case 1:
      return "فروردین";
    case "02":
    case 2:
      return "اردیبهشت";
    case "03":
    case 3:
      return "خرداد";
    case "04":
    case 4:
      return "تیر";
    case "05":
    case 5:
      return "مرداد";
    case "06":
    case 6:
      return "شهریور";
    case "07":
    case 7:
      return "مهر";
    case "08":
    case 8:
      return "آبان";
    case "09":
    case 9:
      return "آذر";
    case "10":
    case 10:
      return "دی";
    case "11":
    case 11:
      return "بهمن";
    case "12":
    case 12:
      return "اسفند";
    default:
      return "نامشخص";
  }
};
export const cutText = (txt, length = 20) => {
  if (txt) {
    return `${txt.slice(0, length)} ...`;
  }
};

export const timeSince = date => {
  if (date) {
    let data = new Date(date);

    let seconds = Math.floor((new Date() - data) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " سال پیش";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " ماه پیش";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " روز پیش";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " ساعت پیش";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " دقیقه پیش";
    }
    return "لحظه ایی پیش";
  } else {
    return "ثبت نشده";
  }
};
