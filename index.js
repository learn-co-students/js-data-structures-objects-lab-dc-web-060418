// Write your solution in this file!


const driver = {name: 'Sam'};

function updateDriverWithKeyAndValue(driver, key, value){
  const extraStuff = {};
  extraStuff[key] = value;

  const newDriver = Object.assign({}, driver, extraStuff);
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver,key){
  const updatedDriver = Object.assign({}, driver);
  delete updatedDriver[key];
  return updatedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;

}
