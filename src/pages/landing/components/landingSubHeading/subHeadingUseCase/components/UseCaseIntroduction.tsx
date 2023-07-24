import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import { useState } from 'react';
import { useInterval } from 'react-use';
import { IUseCaseIntroduction } from '@/pages/landing/types/interface';

const UseCaseIntroductionContainer = styled.div`
  overflow: hidden auto;
  width: 100%;
  height: 65vh;
  position: relative;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: hidden;
`;

const ScrollArea = styled.div<{ backgroundImage: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 65vh;

  .use-case-introduction-background {
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(5px) brightness(75%);

    animation: fadeInAnimation 0.3s ease-in forwards;
  }

  .use-case-introduction-text {
    z-index: 1;
    font-size: 36px;
    font-weight: 700;
    white-space: pre-line;
    text-align: center;
    color: ${color.white};
  }

  .scroll-bar {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    position: absolute;
    right: 120px;
    height: 200px;
  }

  @media (max-width: 960px) {
    .use-case-introduction-text {
      font-size: 28px;
    }

    .scroll-bar {
      right: 60px;
    }
  }

  @media (max-width: 600px) {
    .use-case-introduction-text {
      font-size: 24px;
    }

    .scroll-bar {
      display: none;
    }
  }
`;

const ScrollIndicator = styled.span<{ selected: boolean }>`
  width: 3px;
  background-color: ${color.white};
  opacity: ${(props) => (props.selected ? 1 : 0.3)};
`;

const UseCaseIntroduction = ({ introduction }: { introduction: IUseCaseIntroduction[] }) => {
  const [selected, setSelected] = useState(0);
  const baseUrl = 'assets/images/landing';

  // 3초마다 문구 변경
  useInterval(() => {
    setSelected((selected + 1) % introduction.length);
  }, 3000);

  return (
    <UseCaseIntroductionContainer>
      <ScrollArea
        backgroundImage={`${baseUrl}/${introduction[selected].backgroundImage}`}
        key={introduction[selected].backgroundImage}
      >
        <div className="use-case-introduction-background" />
        <p className="use-case-introduction-text">{introduction[selected].text}</p>

        <div className="scroll-bar">
          {introduction.map((_, contentIdx: number) => {
            return (
              <ScrollIndicator
                selected={contentIdx === selected}
                key={['content.backgroundImage', contentIdx].join(',')}
              />
            );
          })}
        </div>
      </ScrollArea>
    </UseCaseIntroductionContainer>
  );
};

export default UseCaseIntroduction;
