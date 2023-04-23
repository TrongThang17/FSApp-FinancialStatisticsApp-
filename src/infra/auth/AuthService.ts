import service from '@src/services';

const postLogin = async ({ code, username, password }) => {
  const url = '/auth/login';
  const body = {
    code,
    username,
    password,
  };

  const res = await service.api.post({ url, data: body });

  return res.data;
};

const postTwoAuth = async ({
  code,
  username,
  password,
  token,
  type,
}: {
  code: string;
  username: string;
  password: string;
  token: string;
  type: number;
}) => {
  const url = '/auth/two-factor-authentication';
  const body = {
    code,
    username,
    password,
    token,
    type,
  };

  const res = await service.api.post({ url, data: body });

  return res.data;
};

const postSendSMS = async ({
  code,
  username,
  password,
}: {
  code: string;
  username: string;
  password: string;
}) => {
  const url = '/auth/sms-verify';
  const body = {
    code,
    username,
    password,
  };

  const res = await service.api.post({ url, data: body });

  return res.data;
};

const postResetPassword = async ({ email }: { email: string }) => {
  const url = '/auth/reset-password-email';
  const body = {
    email,
  };

  const res = await service.api.post({ url, data: body });

  return res.data;
};

export default {
  postLogin,
  postTwoAuth,
  postSendSMS,
  postResetPassword,
};
