import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import StatisticBox from './components/statisticBox';
import { IStatisticItems, IStatisticState } from '../../types/interface';

const LandingStatiscContainer = styled.div`
  padding: 240px 0;
  margin: 0 32px;
  text-align: center;

  h2 {
    font-size: 42px;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 36px;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 22px;
    }
  }
`;

const StatisticWrapper = styled.div`
  padding: 100px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LandingStatistic = ({ statistic }: { statistic: IStatisticState }) => {
  // ref: 감지할 요소에 붙여 사용하는 React Ref
  // inView: 요소가 화면에 보이는지 여부를 확인하는 boolean
  // entry: 관찰된 요소에 상태에 대한 정보를 제공하는 IntersectionObserverEntry 객체
  const { ref, inView, entry } = useInView({
    /* Optional options */
    // threshold: 요소가 얼마나 화면에 보여야 inView가 true로 변경되는지를 결정합니다. 0.0에서 1.0 사이의 숫자를 사용할 수 있습니다.
    // triggerOnce: 이 옵션을 true로 설정하면 요소가 한 번 화면에 나타난 후에는 더 이상 관찰하지 않습니다.
    // skip: 이 옵션을 true로 설정하면 요소의 관찰을 건너뛸 수 있습니다. 이는 조건적으로 요소를 관찰하고자 할 때 유용합니다.
    threshold: 0.25,
    triggerOnce: true
  });
  const { statisticItems } = statistic;

  return (
    <LandingStatiscContainer ref={ref}>
      <div className={inView ? 'fade-in' : ''}>
        <h2>
          지금 이 순간에도 많은 분들이
          <br />
          리얼월드를 통해 새로운 경험을 접하고 있습니다
        </h2>
        <StatisticWrapper>
          {statisticItems.map((item: IStatisticItems) => (
            <StatisticBox
              key={item.title}
              inView={inView}
              title={item.title}
              countNum={item.countNum}
            />
          ))}
        </StatisticWrapper>
      </div>
    </LandingStatiscContainer>
  );
};

export default LandingStatistic;
