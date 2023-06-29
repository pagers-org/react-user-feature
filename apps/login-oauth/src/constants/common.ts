// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const NEXT_AUTH_SECURE = process.env.NEXT_PUBLIC_NEXT_AUTH_SECURE! !== 'false';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const KAKAO_SECRET_KEY = process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL!;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
