const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
      if (mode == true || mode == null) {
          this.mode = true;
      } else {
          this.mode = false;
      }
  }

  encrypt(message, key) {
      if (message == null || key == null) {
          throw Error();
      }

      message = message.toUpperCase().split('');
      key = key.toUpperCase();

      let i = 0;
      message.forEach((element, index) => {
          if (element.match(/[A-Z]/)) {
              message[index] = String.fromCharCode(
                  ((element.charCodeAt() -
                      65 +
                      (key[i % key.length].charCodeAt() - 65)) %
                      26) +
                      65
              );
              i++;
          }
      });

      if (this.mode === false) {
          return message.reverse().join('');
      } else {
          return message.join('');
      }
  }

  decrypt(message, key) {
      if (message == null || key == null) {
          throw Error();
      }

      message = message.toUpperCase().split('');
      key = key.toUpperCase();

      let i = 0;
      message.forEach((element, index) => {
          if (element.match(/[A-Z]/)) {
              message[index] = String.fromCharCode(
                  ((element.charCodeAt() -
                      65 +
                      (26 - (key[i % key.length].charCodeAt() - 65))) %
                      26) +
                      65
              );
              i++;
          }
      });

      if (this.mode === false) {
          return message.reverse().join('');
      } else {
          return message.join('');
      }
  }
}

module.exports = VigenereCipheringMachine;