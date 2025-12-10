const isValidEmail=(email)=>{
const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
return emailPattern.test(email);
};
function isValidUrl(string) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol (http or https)
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IPv4 address
    '(\\:\\d+)?' + // port
    '(\\/[-a-z\\d%_.~+]*)*' + // path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i' // case insensitive
  );
  return pattern.test(string);
}


module.exports={isValidEmail,isValidUrl}