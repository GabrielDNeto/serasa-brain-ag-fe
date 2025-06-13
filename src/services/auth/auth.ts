export interface SigninBody {
  username: string;
  password: string;
}

export interface SigninResponse {
  access_token: string;
}
