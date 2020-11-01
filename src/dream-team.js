const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;  
  }

  let isUncorrect = true;
  let dreamTeamArray = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === "string"){
      dreamTeamArray.push(members[i].trim().slice(0,1).toUpperCase());
      isUncorrect = false;
    }
  }

  let dreamTeamName = dreamTeamArray.sort().join("");
  if (isUncorrect) {
    return false;
  }

  return dreamTeamName;
};