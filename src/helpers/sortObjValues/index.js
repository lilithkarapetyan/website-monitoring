/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const sort = (obj, field, asc = 1) => {
  for (const key in obj) {
    obj[key].sort((a, b) => asc * (a[field] - b[field]));
  }
  return obj;
};

export default sort;
