export const CAR_DEPOSIT = 0.64;

export const getDiffInDays = (dataFirst, dataLast) =>
  Math.floor(dataLast.diff(dataFirst, 'day', true) + 0.1);

export const procentraPrice = (price, day) => {
  switch (true) {
    case day < 1:
      return price;
    case day < 8:
      return price * 0.8;
    case day < 15:
      return price * 0.7;
    case day < 30:
      return price * 0.6;
    default:
      return price * 0.4;
  }
};
export const getDiffDays = (dataFirst, dataLast) => {
  const first = new Date(dataFirst);
  const last = new Date(dataLast);

  const diffTime = last - first;

  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
