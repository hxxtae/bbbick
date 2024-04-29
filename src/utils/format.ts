export const numberFormat = (num: string | number) => {
  if (typeof num === 'string') num = Number(num);
  return num.toLocaleString();
}