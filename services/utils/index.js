module.exports = class Utils {
  static getCurrentTime() {
    return getTime();
  }
  static log(message) {
    console.log(getTime() + " - " + message);
  }
};

function getTime() {
  let date = new Date();
  let time =
    date.getFullYear() +
    "-" +
    parseInt(date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  return time;
}
