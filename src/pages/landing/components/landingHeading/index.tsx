import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import { useEffect, useState } from 'react';
import { useInterval } from 'react-use';
import { IHeadingState } from '../../types/interface';
import CtaButton from '../atoms/CtaButton';

const LandingHeadingConatiner = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 420px;
  background-image: url('https://cdn.realworld.to/misc-files/7QtElpuh-d_-nIpTmPjQxw-heading_main_high.gif');

  background-size: cover;
  background-position: center;
  z-index: 0;

  .heading-video-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  .heading-background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .heading-contents-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: 1440px;
    z-index: 1;

    .heading-catchphrase {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 64px;
        text-align: end;
        color: ${color.white};

        > span {
          display: inline-block;
          width: 180px;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .heading-contents-wrapper {
      .heading-catchphrase {
        h1 {
          font-size: 40px;

          > span {
            width: 120px;
          }
        }
      }
    }
  }

  .animate-title {
    @keyframes expand {
      0% {
        color: transparent;
      }
    }

    animation: expand 1.5s ease-in-out;
  }

  .cta-btn {
    width: 195px;
    height: 72px;
    background: linear-gradient(239deg, #c869ff 0%, #ac1bff 100%);
    border-radius: 36px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
  }
`;

const LandingHeading = ({ heading }: { heading: IHeadingState }) => {
  const { carouselItems } = heading;

  const [currentItem, setCurrentItem] = useState(0);
  const [animate, setAnimate] = useState(false);

  // [ ] 안 문구 변경시마다 1.5초에 걸쳐서 애니메이션 효과 적용
  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentItem]);

  // 4.5초마다 문구 변경
  useInterval(() => {
    setCurrentItem((currentItem + 1) % carouselItems.length);
  }, 4500);

  return (
    <LandingHeadingConatiner>
      <div className="heading-video-wrapper">
        <video autoPlay loop muted>
          <source src="assets/videos/heading_main.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="heading-background-overlay" />
      <div className="heading-contents-wrapper">
        <div className="heading-catchphrase">
          <h1>
            당신의 [
            <span className={animate ? 'animate-title' : ''}>
              {`${carouselItems[currentItem].title}`}
            </span>
            ]을
          </h1>
          <h1>경험하게 만드세요</h1>
        </div>
        <CtaButton text="무료로 시작하기" link="/auth/login" />
      </div>
    </LandingHeadingConatiner>
  );
};

export default LandingHeading;
