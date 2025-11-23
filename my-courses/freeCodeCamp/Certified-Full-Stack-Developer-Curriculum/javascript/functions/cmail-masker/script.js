function maskEmail(email) {
    return email.slice(0, 1) + "*".repeat(email.indexOf("@")-2) + email.slice(email.indexOf("@")-1);
}

let email = "piotr.sasin.biz@outlook.com";

console.log(maskEmail("apple.pie@example.com"));

console.log(maskEmail("freecodecamp@example.com"));

console.log(maskEmail(email));
