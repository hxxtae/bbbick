export interface ISignin {
  email: string
  password: string
}

export interface ISignup {
  email: string
  password: string
  passwordConfirm: string
  nickname: string;
  authType?: string | boolean;
}
