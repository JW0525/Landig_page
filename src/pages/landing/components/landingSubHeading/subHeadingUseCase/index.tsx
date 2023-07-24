import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import UseCaseCategory from './components/UseCaseCategory';
import UseCaseIntroduction from './components/UseCaseIntroduction';
import CatchPhrases from '../../atoms/CatchPhrases';
import { IUseCaseCategory, IUseCaseData } from '@/pages/landing/types/interface';

const SubHeadingUseCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${color.white};

  .padding {
    padding: 160px;
  }

  .case-category-wrapper {
    display: flex;
    flex-direction: column;
    gap: 72px;
    margin: 0 217px;

    @media (max-width: 1280px) {
      margin: 0 108px;
      gap: 12px;
    }

    @media (max-width: 960px) {
      margin: 0 32px;
      gap: 12px;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 320px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const SubHeadingUseCase = ({ usecaseData }: { usecaseData: IUseCaseData }) => {
  const { phrase, categories, introduction } = usecaseData;

  return (
    <SubHeadingUseCaseContainer id="section-sub-heading-use-case">
      <div className="padding" />
      <UseCaseIntroduction introduction={introduction} />
      <CatchPhrases phrase={phrase} />

      <div className="case-category-wrapper">
        {categories.map((category: IUseCaseCategory, idx: number) => {
          return <UseCaseCategory category={category} key={category.title + idx.toString()} />;
        })}
      </div>
    </SubHeadingUseCaseContainer>
  );
};

export default SubHeadingUseCase;
