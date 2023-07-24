import { Helmet } from 'react-helmet-async';

const LandingHead = () => {
  return (
    <Helmet>
      {/* <meta charset="utf-8" /> */}
      <title>리얼월드 스튜디오 - 당신의 상상이 현실이 되는 곳</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="코딩 한 줄 없이, 누구나 간편하게! 모바일 앱에서 구동되는 게이미피케이션 콘텐츠를 만들어보세요."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://studio.realworld.to" />
      <meta property="og:title" content="리얼월드 스튜디오 - 당신의 상상이 현실이 되는 곳" />
      <meta property="og:image" content="https://studio.realworld.to/img/meta_img.png" />
      <meta property="og:image:secure" content="https://studio.realworld.to/img/meta_img.png" />
      <meta property="og:image:secure_url" content="https://studio.realworld.to/img/meta_img.png" />
      <meta
        property="og:description"
        content="코딩 한 줄 없이, 누구나 간편하게! 모바일 앱에서 구동되는 게이미피케이션 콘텐츠를 만들어보세요."
      />
      <meta property="og:site_name" content="Realworld Studio" />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>
  );
};

export default LandingHead;
