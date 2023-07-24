import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import { useEffect } from 'react';
import LandingFooter from './components/landingFooter';
import LandingHead from './components/landingHead';
import LandingHeading from './components/landingHeading';
import LandingMessage from './components/landingMessage';
import LandingNavbar from './components/landingNavbar';
import LandingStatistic from './components/landingStatistic';
import LnadingSubHeading from './components/landingSubHeading';
import landingData from './data/landing';

const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${color.white};
  font-family: pretendard, 'Roboto';

  cursor: default;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Landing = () => {
  const { heading, subHeading, statistic, footer } = landingData;

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
    script.async = true;

    script.onload = () => {
      if (!ChannelIO) {
        return;
      }

      ChannelIO('boot', {
        pluginKey: 'd7a0ab75-47ba-410e-b6b8-7cc506a4d702',
        profile: {
          source: '스튜디오'
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <LandingLayout>
      <LandingHead />
      <LandingNavbar />
      <LandingHeading heading={heading} />
      <LnadingSubHeading subHeading={subHeading} />
      <LandingStatistic statistic={statistic} />
      <LandingMessage />
      <LandingFooter footer={footer} />
    </LandingLayout>
  );
};

export default Landing;
