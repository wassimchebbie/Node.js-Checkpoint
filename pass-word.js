const generatePassword = require('generate-password');

const password = generatePassword.generate({
length: 12,
numbers: true,
uppercase: true,
lowercase: true,
symbols: true,

});
console.log('hedha pass mteek', password);