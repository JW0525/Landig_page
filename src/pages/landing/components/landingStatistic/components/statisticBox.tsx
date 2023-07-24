import styled from '@emotion/styled';
import CounterAnimation from '@/pages/landing/utils/getCounterAnimation';
import { IStatisticItems } from '@/pages/landing/types/interface';

const StatisticBoxContainer = styled.div`
  text-align: center;

  p {
    font-weight: 700;
    margin: 10px 0;
  }

  .statistic-count-num {
    font-size: 74px;
  }

  .statistic-count {
    font-size: 24px;
  }

  @media (max-width: 960px) {
    .statistic-count-num {
      font-size: 56px;
    }

    .statistic-count {
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    .statistic-count-num {
      font-size: 44px;
    }

    .statistic-count {
      font-size: 18px;
    }
  }

  @media (max-width: 320px) {
    .statistic-count-num {
      font-size: 28px;
    }

    .statistic-count {
      font-size: 16px;
    }
  }
`;

export interface IStatisticBox extends IStatisticItems {
  inView: boolean;
}

const StatisticBox = ({ inView, title, countNum }: IStatisticBox) => {
  return (
    <StatisticBoxContainer>
      <p className="statistic-count-num">
        {inView ? <CounterAnimation totalCount={countNum} /> : countNum}
      </p>
      <p className="statistic-count">{title}</p>
    </StatisticBoxContainer>
  );
};

export default StatisticBox;
