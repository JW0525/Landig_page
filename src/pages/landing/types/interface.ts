export interface IHeadingState {
  carouselItems: {
    title: string;
  }[];
}

export interface IStatisticItems {
  title: string;
  countNum: number;
}

export interface IStatisticState {
  statisticItems: IStatisticItems[];
}

export interface IPhrase {
  title: string;
  subTitle: string;
}

export interface IFunctionCategory {
  subTitle: string;
  title: string;
  text: string;
  type: string;
}

export interface IFunctionData {
  phrase: IPhrase;
  categories: IFunctionCategory[];
}

export interface IUseCaseContents {
  text: string;
  backgroundImage: string;
}

export interface IUseCaseCategory {
  type: string;
  title: string;
  contents: IUseCaseContents[];
}

export interface IUseCaseIntroduction {
  text: string;
  backgroundImage: string;
}

export interface IUseCaseData {
  phrase: IPhrase;
  categories: IUseCaseCategory[];
  introduction: IUseCaseIntroduction[];
}

export interface ISubHeadingState {
  functionData: IFunctionData;
  usecaseData: IUseCaseData;
}

export interface IFooterItems {
  footerLink: string;
  footerLinkText: string;
}

export interface IFooterState {
  footerItems: IFooterItems[];
}

export interface ILandingData {
  heading: IHeadingState;
  statistic: IStatisticState;
  subHeading: ISubHeadingState;
  footer: IFooterState;
}
