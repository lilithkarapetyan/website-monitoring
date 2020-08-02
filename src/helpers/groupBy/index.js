const groupBy = (xs, key) => xs.reduce((rv, x) => {
  // eslint-disable-next-line no-param-reassign
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});

export default groupBy;
