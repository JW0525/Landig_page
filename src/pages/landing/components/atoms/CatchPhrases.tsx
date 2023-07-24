import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { IPhrase } from '../../types/interface';

const LandigPhrasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  text-align: center;

  .ladnig-phrases-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 32px;

    opacity: 0;
    white-space: pre-line;

    &.fade-in {
      animation: fadeInAnimation 1s ease-in forwards;
    }

    > h2 {
      font-size: 52px;
    }

    > p {
      font-size: 20px;
    }
  }

  @media (max-width: 960px) {
    .ladnig-phrases-wrapper {
      > h2 {
        font-size: 36px;
      }

      > p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 600px) {
    .ladnig-phrases-wrapper {
      > h2 {
        font-size: 32px;
      }

      > p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 320px) {
    .ladnig-phrases-wrapper {
      > h2 {
        font-size: 18px;
      }

      > p {
        font-size: 15px;
      }
    }
  }
`;

const LandingPhrases = ({ phrase }: { phrase: IPhrase }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <LandigPhrasesContainer ref={ref}>
      <div className={`ladnig-phrases-wrapper ${inView ? 'fade-in' : ''}`}>
        <h2>{phrase.title}</h2>
        <p>{phrase.subTitle}</p>
      </div>
    </LandigPhrasesContainer>
  );
};

export default LandingPhrases;
