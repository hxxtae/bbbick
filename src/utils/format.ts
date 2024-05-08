export const numberFormat = (num: string | number) => {
  if (typeof num === 'string') num = Number(num);
  return num.toLocaleString();
}

export const onPriceSum = (numArr: number[]) => {
  return numArr.reduce((sum, num) => sum + num, 0);
}