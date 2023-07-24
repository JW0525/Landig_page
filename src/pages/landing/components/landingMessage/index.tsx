import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

const LandingMessageConatiner = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  margin: 40px 20px 280px;

  h6 {
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    opacity: 0;

    &.fade-in {
      animation: fadeInAnimation 1s ease-in forwards;
    }
  }

  @media (max-width: 960px) {
    h6 {
      font-size: 40px;
    }
  }

  @media (max-width: 600px) {
    h6 {
      font-size: 32px;
    }
  }

  @media (max-width: 320px) {
    h6 {
      font-size: 22px;
    }
  }
`;

const LandingMessage = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    // threshold: 요소가 얼마나 화면에 보여야 inView가 true로 변경되는지를 결정합니다. 0.0에서 1.0 사이의 숫자를 사용할 수 있습니다.
    // triggerOnce: 이 옵션을 true로 설정하면 요소가 한 번 화면에 나타난 후에는 더 이상 관찰하지 않습니다.
    // skip: 이 옵션을 true로 설정하면 요소의 관찰을 건너뛸 수 있습니다. 이는 조건적으로 요소를 관찰하고자 할 때 유용합니다.
    threshold: 0.35,
    triggerOnce: true
  });

  return (
    <LandingMessageConatiner ref={ref}>
      <h6 className={inView ? 'fade-in' : ''}>
        리얼월드 스튜디오와 함께
        <br />
        당신의 상상을 경험으로 만드세요
      </h6>
    </LandingMessageConatiner>
  );
};

export default LandingMessage;
