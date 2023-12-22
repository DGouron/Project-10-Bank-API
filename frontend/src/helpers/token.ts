export const saveTokenLocaly = (token: string) => {
  localStorage.setItem('token', token);
};

export const getTokenLocaly = () => {
  return localStorage.getItem('token');
};

export const deleteTokenLocaly = () => {
  localStorage.removeItem('token');
};