/* eslint-disable guard-for-in */
const arraify = (arr) => {
  const newArr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const i in arr) {
    newArr.push({
      ...arr[i],
      id: i,
    });
  }
  return newArr;
};

export default arraify;
