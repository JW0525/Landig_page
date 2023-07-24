import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import { useInView } from 'react-intersection-observer';
import { IUseCaseCategory, IUseCaseContents } from '@/pages/landing/types/interface';

const UseCaseCategoryContainer = styled.div`
  width: 100%;
  opacity: 0;
  padding: 18px 0;

  &.fade-in {
    animation: fadeInAnimation 1s ease-in forwards;
  }

  .case-category-title {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 700;
    color: ${color.palette_primary_purple_100};
  }

  .case-category-contents {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
  }

  @media (max-width: 600px) {
    .case-category-title {
      text-align: center;
    }
    .case-category-contents {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const CaseCategoryContent = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .content-image {
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    border-radius: 10px;

    &::before {
      content: '';
      display: block;
      padding-bottom: 74.25%;
    }
  }

  .content-title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
`;

const UseCaseCategory = ({ category }: { category: IUseCaseCategory }) => {
  const { title, contents } = category;
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const baseUrl = 'assets/images/landing';

  return (
    <UseCaseCategoryContainer className={`${inView ? 'fade-in' : ''}`} ref={ref}>
      <p className="case-category-title">{title}</p>

      <div className="case-category-contents">
        {contents.map((content: IUseCaseContents, idx: number) => {
          return (
            <CaseCategoryContent
              backgroundImage={`${baseUrl}/${content.backgroundImage}`}
              key={content.text + idx.toString()}
            >
              <div className="content-image" />
              <h3 className="content-title">{content.text}</h3>
            </CaseCategoryContent>
          );
        })}
      </div>
    </UseCaseCategoryContainer>
  );
};

export default UseCaseCategory;
