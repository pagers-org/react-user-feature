import styled from '@emotion/styled';
import { type MouseEvent, memo } from 'react';

type UserProps = {
  id: string;
  password: string;
  name: string;
  age: number;
  profileImage: string;
  email: string;
  jobs: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const ProfileCard = memo((props: UserProps) => {
  return (
    <StyleContainer>
      <div className="wrapper">
        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img src={props.profileImage} alt="profile card" />
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">{props.name}</div>
            <div className="profile-card__txt">
              안녕하세요, <strong>{props.name}</strong> 입니다. 나이는 <strong>{props.age}</strong>에요!
            </div>
            <div className="profile-card-loc">
              <span className="profile-card-loc__icon">직업:</span>
              <span className="profile-card-loc__txt">{props.jobs}</span>
            </div>
            <div className="profile-card-loc" style={{ marginTop: 20 }}>
              <span className="profile-card-loc__icon">이메일:</span>
              <span className="profile-card-loc__txt">{props.email}</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="profile-card__button button--blue js-message-close" onClick={props.onClick}>
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <svg style={{ display: 'none' }}>
        <defs>
          <symbol id="icon-codepen" viewBox="0 0 32 32">
            <title>codepen</title>
            <path d="M31.872 10.912v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096l-0.192-0.192v-0.064l-0.064-0.064-14.592-9.696c-0.448-0.32-1.056-0.32-1.536 0l-14.528 9.696-0.32 0.32c0 0-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064 0 0.064-0.064 0.096v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.096 0 0.16v9.696c0 0.064 0 0.096 0 0.16v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096l0.256 0.256 0.064 0.032 14.528 9.728c0.224 0.16 0.48 0.224 0.768 0.224s0.544-0.064 0.768-0.224l14.528-9.728 0.32-0.32c0 0 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0-0.064 0.064-0.096v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.096 0-0.16v-9.664c0-0.064 0-0.096 0-0.224zM17.312 4l10.688 7.136-4.768 3.168-5.92-3.936v-6.368zM14.56 4v6.368l-5.92 3.968-4.768-3.168 10.688-7.168zM2.784 13.664l3.392 2.304-3.392 2.304c0 0 0-4.608 0-4.608zM14.56 28l-10.688-7.136 4.768-3.2 5.92 3.936v6.4zM15.936 19.2l-4.832-3.232 4.832-3.232 4.832 3.232-4.832 3.232zM17.312 28v-6.432l5.92-3.936 4.8 3.168-10.72 7.2zM29.12 18.272l-3.392-2.304 3.392-2.304v4.608z"></path>
          </symbol>

          <symbol id="icon-github" viewBox="0 0 32 32">
            <title>github</title>
            <path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"></path>
            <path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"></path>
            <path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"></path>
            <path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"></path>
            <path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"></path>
            <path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"></path>
            <path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"></path>
            <path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"></path>
          </symbol>

          <symbol id="icon-location" viewBox="0 0 32 32">
            <title>location</title>
            <path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"></path>
            <path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"></path>
          </symbol>

          <symbol id="icon-facebook" viewBox="0 0 32 32">
            <title>facebook</title>
            <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
          </symbol>

          <symbol id="icon-instagram" viewBox="0 0 32 32">
            <title>instagram</title>
            <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
            <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
            <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
          </symbol>

          <symbol id="icon-twitter" viewBox="0 0 32 32">
            <title>twitter</title>
            <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
          </symbol>

          <symbol id="icon-behance" viewBox="0 0 32 32">
            <title>behance</title>
            <path d="M9.281 6.412c0.944 0 1.794 0.081 2.569 0.25 0.775 0.162 1.431 0.438 1.988 0.813 0.55 0.375 0.975 0.875 1.287 1.5 0.3 0.619 0.45 1.394 0.45 2.313 0 0.994-0.225 1.819-0.675 2.481-0.456 0.662-1.119 1.2-2.006 1.625 1.213 0.35 2.106 0.962 2.706 1.831 0.6 0.875 0.887 1.925 0.887 3.163 0 1-0.194 1.856-0.575 2.581-0.387 0.731-0.912 1.325-1.556 1.781-0.65 0.462-1.4 0.8-2.237 1.019-0.831 0.219-1.688 0.331-2.575 0.331h-9.544v-19.688h9.281zM8.719 14.363c0.769 0 1.406-0.181 1.906-0.55 0.5-0.363 0.738-0.963 0.738-1.787 0-0.456-0.081-0.838-0.244-1.131-0.169-0.294-0.387-0.525-0.669-0.688-0.275-0.169-0.588-0.281-0.956-0.344-0.356-0.069-0.731-0.1-1.113-0.1h-4.050v4.6h4.388zM8.956 22.744c0.425 0 0.831-0.038 1.213-0.125 0.387-0.087 0.731-0.219 1.019-0.419 0.287-0.194 0.531-0.45 0.706-0.788 0.175-0.331 0.256-0.756 0.256-1.275 0-1.012-0.287-1.738-0.856-2.175-0.569-0.431-1.325-0.644-2.262-0.644h-4.7v5.419h4.625z"></path>
            <path d="M22.663 22.675c0.587 0.575 1.431 0.863 2.531 0.863 0.788 0 1.475-0.2 2.044-0.6s0.913-0.825 1.044-1.262h3.45c-0.556 1.719-1.394 2.938-2.544 3.675-1.131 0.738-2.519 1.113-4.125 1.113-1.125 0-2.131-0.181-3.038-0.538-0.906-0.363-1.663-0.869-2.3-1.531-0.619-0.663-1.106-1.45-1.45-2.375-0.337-0.919-0.512-1.938-0.512-3.038 0-1.069 0.175-2.063 0.525-2.981 0.356-0.925 0.844-1.719 1.494-2.387s1.413-1.2 2.313-1.588c0.894-0.387 1.881-0.581 2.975-0.581 1.206 0 2.262 0.231 3.169 0.706 0.9 0.469 1.644 1.1 2.225 1.887s0.994 1.694 1.25 2.706c0.256 1.012 0.344 2.069 0.275 3.175h-10.294c0 1.119 0.375 2.188 0.969 2.756zM27.156 15.188c-0.462-0.512-1.256-0.794-2.212-0.794-0.625 0-1.144 0.106-1.556 0.319-0.406 0.213-0.738 0.475-0.994 0.787-0.25 0.313-0.425 0.65-0.525 1.006-0.1 0.344-0.163 0.663-0.181 0.938h6.375c-0.094-1-0.438-1.738-0.906-2.256z"></path>
            <path d="M20.887 8h7.981v1.944h-7.981v-1.944z"></path>
          </symbol>

          <symbol id="icon-link" viewBox="0 0 32 32">
            <title>link</title>
            <path d="M17.984 11.456c-0.704 0.704-0.704 1.856 0 2.56 2.112 2.112 2.112 5.568 0 7.68l-5.12 5.12c-2.048 2.048-5.632 2.048-7.68 0-1.024-1.024-1.6-2.4-1.6-3.84s0.576-2.816 1.6-3.84c0.704-0.704 0.704-1.856 0-2.56s-1.856-0.704-2.56 0c-1.696 1.696-2.624 3.968-2.624 6.368 0 2.432 0.928 4.672 2.656 6.4 1.696 1.696 3.968 2.656 6.4 2.656s4.672-0.928 6.4-2.656l5.12-5.12c3.52-3.52 3.52-9.248 0-12.8-0.736-0.672-1.888-0.672-2.592 0.032z"></path>
            <path d="M29.344 2.656c-1.696-1.728-3.968-2.656-6.4-2.656s-4.672 0.928-6.4 2.656l-5.12 5.12c-3.52 3.52-3.52 9.248 0 12.8 0.352 0.352 0.8 0.544 1.28 0.544s0.928-0.192 1.28-0.544c0.704-0.704 0.704-1.856 0-2.56-2.112-2.112-2.112-5.568 0-7.68l5.12-5.12c2.048-2.048 5.632-2.048 7.68 0 1.024 1.024 1.6 2.4 1.6 3.84s-0.576 2.816-1.6 3.84c-0.704 0.704-0.704 1.856 0 2.56s1.856 0.704 2.56 0c1.696-1.696 2.656-3.968 2.656-6.4s-0.928-4.704-2.656-6.4z"></path>
          </symbol>

          <symbol id="icon-blog" viewBox="0 0 32 32">
            <title>blog</title>
            <path d="M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM23.8447 14.5055C23.2688 13.8088 22.1783 13.8088 21.4783 14.3061C20.3326 15.0964 20.1793 16.9718 21.1904 17.9277C21.9182 18.6167 23.1356 18.5971 23.8593 17.9108L23.8408 18.1731C23.8159 18.4835 23.7646 18.8001 23.5339 19.0237C23.3334 19.2133 23.0607 19.2515 22.7929 19.2651L22.5296 19.2751C22.531 19.7214 22.5328 20.1667 22.531 20.613C23.1762 20.6417 23.8793 20.597 24.4132 20.1918C25.0283 19.7387 25.2884 18.9466 25.2943 18.2079V14.1072C24.8097 14.1026 24.3251 14.1026 23.8419 14.1072L23.8447 14.5055ZM19.1431 14.6293C18.4431 13.9608 17.3699 13.8221 16.4642 14.0772C15.188 14.3833 14.4953 15.8909 14.9972 17.0809C15.589 18.6008 17.7505 18.902 18.9701 17.978C20.0087 17.2128 20.0776 15.5022 19.1431 14.6293ZM6.52601 12.1419C6.47536 14.2089 6.5219 16.2795 6.5 18.3484C6.98732 18.368 7.47646 18.363 7.96424 18.3584L7.95511 17.9204C8.56289 18.6856 9.77936 18.65 10.4825 18.0408C11.5096 17.1807 11.5429 15.4231 10.5838 14.5C9.88933 13.7982 8.64822 13.7686 7.94553 14.4749C7.97245 13.7024 7.9469 12.9281 7.96424 12.1561C7.48513 12.1506 7.00648 12.1561 6.52601 12.1419ZM11.7365 12C11.7338 12.4773 11.7279 12.9532 11.7365 13.43C12.1737 13.5564 12.4023 13.989 12.3991 14.4224C12.4543 15.7338 12.405 17.0479 12.4269 18.3598C12.906 18.363 13.3856 18.363 13.866 18.3584L13.8692 14.4224C13.8847 13.6641 13.6187 12.845 12.9863 12.3833C12.6309 12.1109 12.1796 12.0137 11.7365 12ZM8.473 15.346C9.07348 15.064 9.82727 15.575 9.76339 16.2408C9.81997 16.9257 9.00686 17.4052 8.41825 17.0922C7.70917 16.7824 7.74385 15.6042 8.473 15.346ZM17.0213 15.3206C17.6099 15.0952 18.319 15.6085 18.2405 16.2464C18.319 16.9495 17.4452 17.4227 16.8621 17.0718C16.1603 16.7246 16.2616 15.5318 17.0213 15.3206ZM22.6122 15.3054C23.22 15.0202 23.972 15.5769 23.8939 16.2408C23.9259 16.9394 23.0808 17.3647 22.5009 17.0361C21.8283 16.698 21.8949 15.5527 22.6122 15.3054Z" />
          </symbol>

          <symbol id="icon-youtube" viewBox="0 0 32 32">
            <title>youtube</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM24.6238 11.8738C24.4168 11.1362 23.8069 10.5554 23.0324 10.3583C21.6288 10 16 10 16 10C16 10 10.3712 10 8.96752 10.3583C8.19301 10.5554 7.58306 11.1362 7.37606 11.8738C7 13.2107 7 16 7 16C7 16 7 18.7892 7.37606 20.1262C7.58306 20.8638 8.19301 21.4446 8.96752 21.6418C10.3712 22 16 22 16 22C16 22 21.6288 22 23.0324 21.6418C23.8069 21.4446 24.4168 20.8638 24.6238 20.1262C25 18.7892 25 16 25 16C25 16 25 13.2107 24.6238 11.8738ZM15 13L19 16.0001L15 19V13Z"
              fill="#FF0000"
            />
          </symbol>
        </defs>
      </svg>
    </StyleContainer>
  );
});

ProfileCard.displayName = 'ProfileCard';

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;

  html {
    position: relative;
    overflow-x: hidden !important;
  }

  * {
    box-sizing: border-box;
  }

  body {
    color: #324e63;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    padding: 100px 20px 50px;
    display: flex;
    background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      height: auto;
      min-height: 100vh;
      padding-top: 100px;
    }
  }

  .profile-card {
    width: 100%;
    min-height: 460px;
    margin: auto;
    box-shadow: 0 8px 60px -10px rgba(13, 28, 39, 0.6);
    background: #fff;
    border-radius: 12px;
    max-width: 700px;
    position: relative;
  }

  .profile-card.active .profile-card__cnt {
    filter: blur(6px);
  }

  .profile-card.active .profile-card-message,
  .profile-card.active .profile-card__overlay {
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.1s;
  }

  .profile-card.active .profile-card-form {
    transform: none;
    transition-delay: 0.1s;
  }

  .profile-card__img {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    z-index: 4;
    box-shadow: 0 5px 50px 0 #6c44fc, 0 0 0 7px rgba(107, 74, 255, 0.5);
  }

  @media screen and (max-width: 576px) {
    .profile-card__img {
      width: 120px;
      height: 120px;
    }
  }

  .profile-card__img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .profile-card__cnt {
    margin-top: -35px;
    text-align: center;
    padding: 0 20px 40px;
    transition: all 0.3s;
  }

  .profile-card__name {
    font-weight: 700;
    font-size: 24px;
    color: #6944ff;
    margin-bottom: 15px;
  }

  .profile-card__txt {
    font-size: 18px;
    font-weight: 500;
    color: #324e63;
    margin-bottom: 15px;
  }

  .profile-card__txt strong {
    font-weight: 700;
  }

  .profile-card-loc {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
  }

  .profile-card-loc__icon {
    display: inline-flex;
    font-size: 27px;
    margin-right: 10px;
  }

  .profile-card-inf {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 35px;
  }

  .profile-card-inf__item {
    padding: 10px 35px;
    min-width: 150px;
  }

  @media screen and (max-width: 768px) {
    .profile-card-inf__item {
      padding: 10px 20px;
      min-width: 120px;
    }
  }

  .profile-card-inf__title {
    font-weight: 700;
    font-size: 27px;
    color: #324e63;
  }

  .profile-card-inf__txt {
    font-weight: 500;
    margin-top: 7px;
  }

  .profile-card-social {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .profile-card-social__item {
    display: inline-flex;
    width: 55px;
    height: 55px;
    margin: 15px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #405de6;
    box-shadow: 0 7px 30px rgba(43, 98, 169, 0.5);
    position: relative;
    font-size: 21px;
    flex-shrink: 0;
    transition: all 0.3s;
  }

  @media screen and (max-width: 768px) {
    .profile-card-social__item {
      width: 50px;
      height: 50px;
      margin: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    .profile-card-social__item:hover {
      transform: scale(1.2);
    }
  }

  .profile-card-social__item.facebook {
    background: linear-gradient(45deg, #3b5998, #0078d7);
    box-shadow: 0 4px 30px rgba(43, 98, 169, 0.5);
  }

  .profile-card-social__item.twitter {
    background: linear-gradient(45deg, #1da1f2, #0e71c8);
    box-shadow: 0 4px 30px rgba(19, 127, 212, 0.7);
  }

  .profile-card-social__item.instagram {
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    box-shadow: 0 4px 30px rgba(120, 64, 190, 0.6);
  }

  .profile-card-social__item.behance {
    background: linear-gradient(45deg, #1769ff, #213fca);
    box-shadow: 0 4px 30px rgba(27, 86, 231, 0.7);
  }

  .profile-card-social__item.github {
    background: linear-gradient(45deg, #333333, #626b73);
    box-shadow: 0 4px 30px rgba(63, 65, 67, 0.6);
  }

  .profile-card-social__item.codepen {
    background: linear-gradient(45deg, #324e63, #414447);
    box-shadow: 0 4px 30px rgba(55, 75, 90, 0.6);
  }

  .profile-card-social__item.link {
    background: linear-gradient(45deg, #d5135a, #f05924);
    box-shadow: 0 4px 30px rgba(223, 45, 70, 0.6);
  }

  .profile-card-social__item.blog {
    background: linear-gradient(45deg, #61fbdf, #00b2fa);
    box-shadow: 0 4px 30px rgba(97, 251, 223, 0.8);

    .icon {
      width: 100%;
      height: 100%;
    }
  }

  .profile-card-social__item.youtube {
    background: linear-gradient(45deg, rgb(255, 255, 255), rgb(255, 255, 255));
    box-shadow: 0 4px 30px rgba(40, 40, 40, 0.63);

    .icon {
      width: 100%;
      height: 100%;
    }
  }

  .profile-card-social .icon-font {
    display: inline-flex;
  }

  .profile-card-ctr {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }

  @media screen and (max-width: 576px) {
    .profile-card-ctr {
      flex-wrap: wrap;
    }
  }

  .profile-card__button {
    background: none;
    border: none;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 19px;
    margin: 15px 35px;
    padding: 15px 40px;
    min-width: 201px;
    border-radius: 50px;
    min-height: 55px;
    color: #fff;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.3s;
  }

  @media screen and (max-width: 768px) {
    .profile-card__button {
      min-width: 170px;
      margin: 15px 25px;
    }
  }
  @media screen and (max-width: 576px) {
    .profile-card__button {
      min-width: inherit;
      margin: 0 0 16px;
      width: 100%;
      max-width: 300px;
    }

    .profile-card__button:last-child {
      margin-bottom: 0;
    }
  }

  .profile-card__button:focus {
    outline: none !important;
  }

  @media screen and (min-width: 768px) {
    .profile-card__button:hover {
      transform: translateY(-5px);
    }
  }

  .profile-card__button:first-of-type {
    margin-left: 0;
  }

  .profile-card__button:last-of-type {
    margin-right: 0;
  }

  .profile-card__button.button--blue {
    background: linear-gradient(45deg, #1da1f2, #0e71c8);
    box-shadow: 0 4px 30px rgba(19, 127, 212, 0.4);
  }

  .profile-card__button.button--blue:hover {
    box-shadow: 0 7px 30px rgba(19, 127, 212, 0.75);
  }

  .profile-card__button.button--orange {
    background: linear-gradient(45deg, #d5135a, #f05924);
    box-shadow: 0 4px 30px rgba(223, 45, 70, 0.35);
  }

  .profile-card__button.button--orange:hover {
    box-shadow: 0 7px 30px rgba(223, 45, 70, 0.75);
  }

  .profile-card__button.button--gray {
    box-shadow: none;
    background: #dcdcdc;
    color: #142029;
  }

  .profile-card-message {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 130px;
    padding-bottom: 100px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  .profile-card-form {
    box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 35px;
    transform: scale(0.8);
    position: relative;
    z-index: 3;
    transition: all 0.3s;
  }

  @media screen and (max-width: 768px) {
    .profile-card-form {
      max-width: 90%;
      height: auto;
    }
  }
  @media screen and (max-width: 576px) {
    .profile-card-form {
      padding: 20px;
    }
  }

  .profile-card-form__bottom {
    justify-content: space-between;
    display: flex;
  }

  @media screen and (max-width: 576px) {
    .profile-card-form__bottom {
      flex-wrap: wrap;
    }
  }

  .profile-card textarea {
    width: 100%;
    resize: none;
    height: 210px;
    margin-bottom: 20px;
    border: 2px solid #dcdcdc;
    border-radius: 10px;
    padding: 15px 20px;
    color: #324e63;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
    outline: none;
    transition: all 0.3s;
  }

  .profile-card textarea:focus {
    outline: none;
    border-color: #8a979e;
  }

  .profile-card__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: rgba(22, 33, 72, 0.35);
    border-radius: 12px;
    transition: all 0.3s;
  }
`;
