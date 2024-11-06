console.log("Hello! It is working!");

function convert (arr, key) {
  arr.forEach(obj => {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    }
  });

  return arr;
}

