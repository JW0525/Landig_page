import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import { useInView } from 'react-intersection-observer';
import CaseApp from './components/CaseApp';
import CasePlatform from './components/CasePlatform';
import { IFunctionCategory } from '@/pages/landing/types/interface';

export const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }

  20%, 80% {
    opacity: 1;
  }
`;

const FunctionCaseContianer = styled.div<{ idx: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;

  &.fade-in {
    animation: fadeInAnimation 1s ease-in forwards;
  }

  .content-description {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0 216px;
    padding: 120px 0;
    ${(props) => props.idx === 0 && 'border-top: 1px dotted #d7d7d7;'}

    .description-sub-title {
      font-size: 24px;
      font-weight: 700;
      color: ${color.palette_primary_purple_100};
    }

    .description-title {
      font-size: 42px;
      font-weight: 700;
    }

    .description-detail {
      white-space: pre-line;
    }
  }

  .contents-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%;
  }

  @media (max-width: 960px) {
    .content-description {
      margin: 0 32px;
      padding: 74px 0;

      .description-sub-title {
        font-size: 20px;
      }

      .description-title {
        font-size: 32px;
      }

      .description-detail {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 600px) {
    .content-description {
      .description-sub-title {
        font-size: 20px;
      }

      .description-title {
        font-size: 32px;
      }

      .description-detail {
        font-size: 14px;
      }
    }

    .contents-wrapper {
      width: 100%;
    }
  }

  @media (max-width: 320px) {
    .content-description {
      .description-sub-title {
        font-size: 18px;
      }

      .description-title {
        font-size: 22px;
      }

      .description-detail {
        font-size: 12px;
      }
    }
  }
`;

const FunctionCase = ({ category, idx }: { category: IFunctionCategory; idx: number }) => {
  const { title, subTitle, text, type } = category;
  const { ref, inView, entry } = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  const children = type === 'app' ? CaseApp() : CasePlatform();

  return (
    <FunctionCaseContianer
      ref={ref}
      className={`sub-heading-fuction-wrapper ${inView ? 'fade-in' : ''}`}
      idx={idx}
    >
      <div className="content-description">
        <p className="description-sub-title">{subTitle}</p>
        <p className="description-title">{title}</p>
        <p className="description-detail">{text}</p>
      </div>
      <div className="contents-wrapper">{children}</div>
    </FunctionCaseContianer>
  );
};

export default FunctionCase;
