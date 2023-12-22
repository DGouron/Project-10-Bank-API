import { getTokenLocaly } from "../helpers/token";
import { UserSchema } from "../schema/userSchema";

const URL = 'http://localhost:3001/api/v1';

export type FetchUserParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type FetchModifyUserNameParamsType = {
  firstName: string;
  lastName: string;
};

export const userLoginRequest = async (params: FetchUserParamsType) => {
  const response = await fetch(`${URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: params.email, password: params.password}),
  });
  const data = await response.json();
  return data;
}

export const userProfileRequest = async () => {
  const response = await fetch(`${URL}/user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getTokenLocaly()}`,
    },
  });
  const data = await response.json();
  const parsedData = UserSchema.safeParse(data.body);
  return parsedData;
}

export const userModifyNameRequest = async (params: FetchModifyUserNameParamsType) => {
  const response = await fetch(`${URL}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getTokenLocaly()}`,
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  const parsedData = UserSchema.safeParse(data.body);
  return parsedData;
}