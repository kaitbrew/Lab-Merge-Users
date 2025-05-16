require("datejs");

function combineUsers(...args) {
  //args will take the form of an array of array
  let date = Date.parse("today");
  let combinedObject = { users: [], merge_date: date.toString("M/d/yyyy") };

  args.forEach((arg) => {
    combinedObject.users.push(...arg);
  });
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
