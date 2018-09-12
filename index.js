// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let obj = Object.assign(driver, { [key]: value });
  console.log(obj)
  return obj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  console.log('before delete',newObj)
  delete newObj[key];
console.log('after delete',newObj)
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}