import { ILandingData } from '../types/interface';

const landingData: ILandingData = {
  heading: {
    carouselItems: [
      {
        title: '지역'
      },
      {
        title: '교육'
      },
      {
        title: '마케팅'
      },
      {
        title: '공간'
      },
      {
        title: '상상'
      }
    ]
  },
  statistic: {
    statisticItems: [
      {
        title: '총 플레이 시간',
        countNum: 2813535
      },
      {
        title: '총 컨텐츠 수',
        countNum: 6860
      }
    ]
  },
  subHeading: {
    functionData: {
      phrase: {
        title: '나만의 상상을\n경험 콘텐츠로 만들기',
        subTitle:
          '리얼월드 스튜디오에서 제공하는 인터랙티브한 기능들과 함께하면\n상상을 이색 경험 콘텐츠로 만들 수 있습니다.'
      },
      categories: [
        {
          subTitle: '복잡하지 않아요',
          title: '생각하는 대로, 그러나 간편하게',
          text: '복잡한 코딩 없이, 클릭 한 번만으로 간단히 AR, GPS 같은 기능을 구현할 수 있어요. \n 아이템을 획득하고 로직을 추가하는 것도 손쉽게 가능합니다.',
          type: 'platform'
        },
        {
          subTitle: '강력한 기능들',
          title: '현실에 스토리를 입히는 인터랙티브 기능',
          text: '매력적인 컨텐츠를 위한 스튜디오의 다양한 기능들을 즐겨보세요! \n GPS 맵, AR, QR 인식, NFC, 대화형 스크린, 포토프레임 등 재미있는 기능을 활용해보세요.',
          type: 'app'
        }
      ]
    },
    usecaseData: {
      phrase: {
        title: '현실의 문제를 해결하고\n이루고 싶은 일을 실현시키는 콘텐츠',
        subTitle: '지금 리얼월드 스튜디오에서는 이런 콘텐츠들이 만들어지고 있습니다.'
      },
      categories: [
        {
          type: 'tour',
          title: '관광',
          contents: [
            {
              text: '뻔한 축제 프로그램 말고 우리 지역에서만 경험 가능한 콘텐츠를 만들고 싶어요',
              backgroundImage: 'useCase_category_tour_0.png'
            },
            {
              text: '포토 스팟을 스토리와 함께 안내하는 이색 야간 관광 콘텐츠를 만들고 싶어요',
              backgroundImage: 'useCase_category_tour_1.png'
            },
            {
              text: '박물관의 지루한 전시관을 재미있는 공간으로 만들고 싶어요',
              backgroundImage: 'useCase_category_tour_2.png'
            }
          ]
        },
        {
          type: 'mobile',
          title: '모바일',
          contents: [
            {
              text: '인기가 많은 크라임씬 콘텐츠를 만들어 수익을 내고 싶어요',
              backgroundImage: 'useCase_category_mobile_0.png'
            },
            {
              text: '틱톡 영상을 활용한 이색 콘텐츠를 만들어 팬들에게 선보이고 싶어요 ',
              backgroundImage: 'useCase_category_mobile_1.png'
            },
            {
              text: '30분만에 퀴즈 콘텐츠를 빠르고 쉽게 만들고 싶어요',
              backgroundImage: 'useCase_category_mobile_2.png'
            }
          ]
        },
        {
          type: 'event',
          title: '이벤트, 마케팅',
          contents: [
            {
              text: '뻔한 축제 프로그램 말고 우리 지역에서만 경험 가능한 콘텐츠를 만들고 싶어요',
              backgroundImage: 'useCase_category_event_0.png'
            },
            {
              text: '특별한 방법으로 아이돌 생일 카페 이벤트를 기획하고 싶어요',
              backgroundImage: 'useCase_category_event_1.png'
            },
            {
              text: '다른 행사와 차별화된 이벤트를 선보이고 싶어요',
              backgroundImage: 'useCase_category_event_2.png'
            }
          ]
        },
        {
          type: 'education',
          title: '교육',
          contents: [
            {
              text: '학생들이 인공지능 지식을 쉽게 배우도록 하고 싶어요',
              backgroundImage: 'useCase_category_education_0.png'
            },
            {
              text: '스토리와 함께 환경 보호의 중요성을 기억하도록 만들고 싶어요',
              backgroundImage: 'useCase_category_education_1.png'
            },
            {
              text: '젠더 고정관념을 스스로 깨닫고 인식을 바꾸도록 하고 싶어요',
              backgroundImage: 'useCase_category_education_2.png'
            }
          ]
        },
        {
          type: 'space',
          title: '공간 탐방',
          contents: [
            {
              text: '우리 카페에서만 경험 가능한 이색적인 콘텐츠를 만들고 싶어요',
              backgroundImage: 'useCase_category_space_0.png'
            },
            {
              text: 'AR과 퀴즈를 통해 도서관 이용 방법을 자연스레 익히도록 만들고 싶어요',
              backgroundImage: 'useCase_category_space_1.png'
            },
            {
              text: '우리 대학교 구석구석을 스토리와 함께 재미있게 탐험하도록 만들고 싶어요',
              backgroundImage: 'useCase_category_space_2.png'
            }
          ]
        }
      ],
      introduction: [
        {
          text: '지역 여행 활성화를 위한\n관광 컨텐츠를 만들고 싶어요',
          backgroundImage: 'useCase_introduction_0.png'
        },
        {
          text: '흥행하는 크라임씬 콘텐츠를 만들어\n수익을 창출하고 싶어요',
          backgroundImage: 'useCase_introduction_1.png'
        },
        {
          text: '소아암 환자들이 힘을 낼 수 있는\n이색 체험을 만들어주고 싶은데..',
          backgroundImage: 'useCase_introduction_2.png'
        },
        {
          text: '학생들이 너무 수업시간에 지루해하는데\n어떻게 해야 할까요?',
          backgroundImage: 'useCase_introduction_3.png'
        },
        {
          text: '아이돌을 위한 생일카페 이벤트를 기획하고 싶은데..\n신박한 아이템이 없을까요?',
          backgroundImage: 'useCase_introduction_4.png'
        }
      ]
    }
  },
  footer: {
    footerItems: [
      {
        footerLink: 'https://rwd.to/studioupdates',
        footerLinkText: '업데이트 소식'
      },
      {
        footerLink: 'https://www.facebook.com/groups/studio.realworld',
        footerLinkText: '커뮤니티'
      },
      //   {
      //     footerLink: 'https://rwd.to/studiohelpcenter',
      //     footerLinkText: '헬프센터'
      //   },
      {
        footerLink: 'https://www.notion.so/uniquegoodcompany/e2201cbcd269476b90fdf7e812e4fb54',
        footerLinkText: '개인정보처리방침'
      },
      {
        footerLink: 'https://www.notion.so/uniquegoodcompany/317906e557704f59ad24a2be8bb49612',
        footerLinkText: '이용약관'
      }
    ]
  }
};

export default landingData;
