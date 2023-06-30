// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const KAKAO_SECRET_KEY = process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL!;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

export const KAKAO_AUTH_TOKEN_URL = (code: string) =>
  `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_API_KEY}&client_secret=${KAKAO_SECRET_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&code=${code}`;

export const KAKAO_USER_URL = `https://kapi.kakao.com/v2/user/me`;
