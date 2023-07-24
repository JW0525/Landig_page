import { ISubHeadingState } from '../../types/interface';
import SubHeadingFunction from './subHeadingFunction';
import SubHeadingUseCase from './subHeadingUseCase';

const LnadingSubHeading = ({ subHeading }: { subHeading: ISubHeadingState }) => {
  const { functionData, usecaseData } = subHeading;

  return (
    <>
      <SubHeadingFunction functionData={functionData} />
      <SubHeadingUseCase usecaseData={usecaseData} />
    </>
  );
};

export default LnadingSubHeading;
