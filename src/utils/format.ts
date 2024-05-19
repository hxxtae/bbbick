export const numberFormat = (num: string | number) => {
  if (typeof num === 'string') num = Number(num);
  return num.toLocaleString();
}

export const onPriceSum = (numArr: number[]) => {
  return numArr.reduce((sum, num) => sum + num, 0);
}

export const getDateOfYYYYMMDD = (date: string) => {
  const refDate = new Date(date);
  console.log(refDate)
  const dateFormat = refDate.getFullYear() +
		'.' + ( (refDate.getMonth()+1) < 9 ? "0" + (refDate.getMonth()+1) : (refDate.getMonth()+1) )+
    '.' + ((refDate.getDate()) < 9 ? "0" + (refDate.getDate()) : (refDate.getDate()));
  
	return dateFormat;
}

export const getDateOfSubstr = (date: string) => {
  const reg = new RegExp(/^([0-9]+).\s([0-9]+).\s([0-9]+)/);
  const matchArr = date.match(reg);
  if (typeof matchArr != "undefined" && matchArr?.length) {
    return `${matchArr[1]}.${matchArr[2].padStart(2, "0")}.${matchArr[3].padStart(2, "0")}`;
  }
  return '-';
}