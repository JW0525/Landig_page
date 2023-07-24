import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import { useEffect, useState } from 'react';
import whiteLogoImage from '@/assets/images/logo_studio_white.svg';
import blackLogoImage from '@/assets/images/logo_studio_black.svg';
import CtaButton from '../atoms/CtaButton';

const LandingNavbarContainer = styled.div<{ isScrollDown: boolean }>`
  position: fixed;
  width: 100%;
  height: 64px;
  background-color: ${(props) => (props.isScrollDown ? color.white : 'transparent')};
  z-index: 1;

  .navbar-contents {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    // gap: 12%;
    gap: 62%;

    .navbar-links {
      display: flex;
      gap: 40px;
      font-size: 15px;
      font-weight: 500;
      color: ${(props) => (props.isScrollDown ? color.black : color.white)};
      white-space: nowrap;
      cursor: pointer;

      a {
        color: ${(props) => (props.isScrollDown ? color.black : color.white)};
        text-decoration: none;
      }
    }

    .navbar-btn-container {
      display: flex;
      justify-content: center;
      aligin-items: center;
      gap: 24px;
    }
  }

  @media (max-width: 960px) {
    .navbar-contents {
      padding: 0 26px;
      justify-content: space-between;
      gap: 0;

      .navbar-links {
        display: none;
      }
    }
  }

  .cta-btn {
    height: 40px;
    border-radius: 8px;
    padding: 0 12px;

    // &:nth-of-type(1) {
    //   border: 1px solid ${(props) => (props.isScrollDown ? color.black : color.white)};

    //   a {
    //     color: ${(props) => (props.isScrollDown ? color.black : color.white)};
    //   }
    // }

    // &:nth-of-type(2) {
    background-color: ${color.palette_primary_purple_100};
    // }
  }
`;

const LandingNavbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LandingNavbarContainer isScrollDown={scrollY > 50}>
      <div className="navbar-contents">
        <a href="/">
          <img src={scrollY > 50 ? blackLogoImage : whiteLogoImage} alt="realworld studio logo" />
        </a>
        {/* <ul className="navbar-links">
          <li
            onClick={() => scrollToSection('section-sub-heading-function')}
            onKeyPress={() => scrollToSection('section-sub-heading-function')}
          >
            서비스 소개
          </li>
          <li
            onClick={() => scrollToSection('section-sub-heading-use-case')}
            onKeyPress={() => scrollToSection('section-sub-heading-use-case')}
          >
            이용 사례
          </li>
          <li>
            <a href="https://rwd.to/studiohelpcenter" target="_blank" rel="noreferrer">
              요금제
            </a>
          </li>
          <li>
            <a href="https://rwd.to/studiohelpcenter" target="_blank" rel="noreferrer">
              헬프센터
            </a>
          </li>
        </ul> */}
        <div className="navbar-btn-container">
          {/* <CtaButton text="로그인" /> */}
          <CtaButton text="스튜디오 시작하기" link="/auth/login" />
        </div>
      </div>
    </LandingNavbarContainer>
  );
};

export default LandingNavbar;
