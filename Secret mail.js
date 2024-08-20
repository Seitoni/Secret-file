

secretPassword = prompt ("Enter the password: ");
function getSecret (secretPassword) {
  superSecretFile.opened = superSecretFile.opened + 1;
  if (secretPassword == superSecretFile.password) {
    return superSecretFile.contents;
  }
  else {
    return "Invalide password!!! No secret to you.";
  }
}

function setSecret (secretPassword, secret) {
  if (secretPassword == superSecretFile.password) {
    superSecretFile.opened = 0;
    superSecretFile.contents = secret;
  }
}

var superSecretFile = {
  password: 4,
  contents: "Billy will be met you in Boston",
  opened: 0
}

var secret = getSecret (secretPassword);
console.log (secret);

setSecret (secretPassword, "Billy will be met you in New York");
secret = getSecret (secretPassword);
console.log (secret);