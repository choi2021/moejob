import { NextRouter } from 'next/router';
import { ActionType, AuthService, UserInfoType } from '../../types/Authtypes';
import { AccessToken } from '../../variables/authVariable';

export const login = async (
  userInfo: UserInfoType,
  authService: AuthService,
  router: NextRouter,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const { push } = router;
  const { email, password } = userInfo;
  try {
    const userData = await authService.signIn(email, password);
    const token = await userData.user.getIdToken();
    localStorage.setItem(AccessToken, token);
    push('/');
  } catch (error) {
    const loginError = error as { message: string };
    setMessage(loginError?.message);
  }
};

export const register = async (
  userInfo: UserInfoType,
  authService: AuthService,
  router: NextRouter,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const { push } = router;
  const { email, password } = userInfo;
  try {
    await authService.signUp(email, password);
    push('/login');
  } catch (error) {
    const registerError = error as { message: string };
    setMessage(registerError?.message);
  }
};

const ACTION_CONST = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
} as const;

export const authReducer = (state: UserInfoType, action: ActionType) => {
  switch (action.type) {
    case ACTION_CONST.SET_EMAIL:
      const email = action.data;
      const emailValid = email.includes('@') && email.length >= 3;
      return { ...state, email, emailValid };
    case ACTION_CONST.SET_PASSWORD:
      const password = action.data;
      const passwordValid = password.length >= 6;
      return { ...state, password, passwordValid };
    default:
      throw new Error('Unknown Action');
  }
};
