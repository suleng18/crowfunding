import { toast } from 'react-toastify';
import { call } from 'redux-saga/effects';
import { saveToken } from 'utils/auth';
import { requestAuthLogin, requestAuthRegister } from './auth-requests';

export default function* handleAuthRegister(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success('Created new account successfully');
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin(action) {
  try {
    const response = yield call(requestAuthLogin, action.payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
  } catch (error) {}
}

export { handleAuthLogin };
