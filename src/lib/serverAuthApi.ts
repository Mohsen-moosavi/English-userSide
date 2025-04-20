import { cookies } from 'next/headers';
import memoizee from 'memoizee';
import { createAxiosInstanceForSSR } from './axios';

const serverCookie = () => cookies().toString();

const sendServerRefreshTokenRequest = async () => {
  const axios = createAxiosInstanceForSSR(serverCookie());

  try {
    await axios.post('/auth/refresh-token');
    return true;
  } catch (error) {
    return false;
  }
};

const refreshToken = memoizee(sendServerRefreshTokenRequest, {
  promise: true,
  maxAge: 5_000
});

export const serverAuthRequest = async <T>(
  request: (axios: ReturnType<typeof createAxiosInstanceForSSR>) => Promise<T>
): Promise<{ response?: T; error?: any }> => {
  const cookieStore = await cookies();
  const expireTime = cookieStore.get('expireTime');
  const isExpired = !expireTime || Number(expireTime.value) < Date.now();

  const axios = createAxiosInstanceForSSR(serverCookie());

  if (isExpired) {
    const refreshed = await refreshToken();
    if (refreshed) {
      try {
        const response = await request(createAxiosInstanceForSSR(serverCookie()));
        return { response };
      } catch (error) {
        return { error };
      }
    } else {
      return { error: 'توکن قابل تمدید نیست' };
    }
  } else {
    try {
      const response = await request(axios);
      return { response };
    } catch (error) {
      return { error };
    }
  }
};