const UnixTimeConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  var b = new Date().getTime();
  var test = Math.floor(Math.abs(b - a) / 36e5);
  return test;
};

export default UnixTimeConverter;
