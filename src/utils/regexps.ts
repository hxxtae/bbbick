export const emailValidate = (email: string) => {
  const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
  if (pattern.test(email)) return true;
  return false
}

export const passwordValidate = (password: string) => {
  // 최소 10자리 이상 : 영어 대문자, 소문자, 숫자, 특수문자 중 2종류 문자 조합으로 구성
  const pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])|(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,15}$/;
  if (pattern.test(password)) return true;
  return false;
}

export const imageNameValidate = (name: string) => {
  const pattern = /^[\w@!#$%^&()_+`ㄱ-ㅎ가-힣ㅏ-ㅣ\s]+.(jpg|jpeg)$/;
  if (pattern.test(name)) return true;
  return false;
}