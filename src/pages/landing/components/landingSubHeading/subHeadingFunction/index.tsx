import styled from '@emotion/styled';
import FunctionCase from './FunctionCase';
import CatchPhrases from '../../atoms/CatchPhrases';
import { IFunctionCategory, IFunctionData } from '@/pages/landing/types/interface';

const SubHeadingFunctionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SubHeadingFunction = ({ functionData }: { functionData: IFunctionData }) => {
  const { phrase, categories } = functionData;

  return (
    <SubHeadingFunctionLayout id="section-sub-heading-function">
      <CatchPhrases phrase={phrase} />
      <div className="border" />
      {categories.map((category: IFunctionCategory, idx: number) => (
        <FunctionCase category={category} key={category.text + idx.toString()} idx={idx} />
      ))}
    </SubHeadingFunctionLayout>
  );
};

export default SubHeadingFunction;
