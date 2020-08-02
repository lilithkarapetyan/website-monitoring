/* eslint-disable guard-for-in */
const arraify = (arr) => {
  let newArr = [];
  console.log('arr[i]', arr);
  // eslint-disable-next-line no-restricted-syntax
  for (const i in arr) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log('newArr', newArr);
  return newArr;
};

export default arraify;
