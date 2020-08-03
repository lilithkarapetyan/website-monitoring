/* eslint-disable guard-for-in */
const arraify = (arr) => {
  const newArr = [];
  console.log('arr[i]', arr);
  // eslint-disable-next-line no-restricted-syntax
  for (const i in arr) {
    newArr.push({
      ...arr[i],
      id: i,
    });
  }
  console.log('newArr', newArr);
  return newArr;
};

export default arraify;
