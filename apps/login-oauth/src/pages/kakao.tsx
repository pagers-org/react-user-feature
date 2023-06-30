import type { GetServerSidePropsContext } from 'next';
import fetch from 'node-fetch';

import { KAKAO_AUTH_TOKEN_URL, KAKAO_USER_URL } from '@/constants/common';

type KakaoAuthToken = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
};

type Profile = {
  nickname: string;
  thumbnail_image_url: string;
  profile_image_url: string;
  is_default_image: boolean;
};

type KakaoAccount = {
  profile_nickname_needs_agreement: boolean;
  profile_image_needs_agreement: boolean;
  profile: Profile;
  has_email: boolean;
  email_needs_agreement: boolean;
  is_email_valid: boolean;
  is_email_verified: boolean;
  email: string;
};

type Data = {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
  kakao_account: KakaoAccount;
};

const Kakao = ({ data }: { data: Data }) => <div>{JSON.stringify(data, null, 4)}</div>;

export default Kakao;

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const code = query.code as string; // 인가 코드

  const response = await fetch(KAKAO_AUTH_TOKEN_URL(code), {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });

  const { access_token } = (await response.json()) as KakaoAuthToken;

  const response2 = await fetch(KAKAO_USER_URL, {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = (await response2.json()) as Data;

  return {
    props: { data },
  };
};
