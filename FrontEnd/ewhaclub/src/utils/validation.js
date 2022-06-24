export function IsEwha(value) {
  console.log("IsEwha", value);
  var regExp = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?].*ewhain.net$/;
  return regExp.test(value) ? true : false;
}
