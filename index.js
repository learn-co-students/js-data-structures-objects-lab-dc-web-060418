// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let keys = Object.keys(driver);
  let newObj = {};

  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = driver[keys[i]];
  }

  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let keys = Object.keys(driver);
  let newObj = {};

  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = driver[keys[i]];
  }

  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
