import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';
import whiteLogoImage from '@/assets/images/logo_studio_white.svg';
import { IFooterItems, IFooterState } from '../../types/interface';

const LandingFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 120px;
  padding: 60px 180px;
  width: 100%;
  background-color: #09111d;

  > img {
    padding-bottom: 50px;
  }

  .footer-cotent-box {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .footer-link {
      display: flex;
      flex-wrap: wrap;
      column-gap: 40px;
      row-gap: 14px;
      font-size: 14px;
      font-weight: 700;

      a {
        color: ${color.white};
      }
    }

    .footer-info {
      display: inline-block;
      color: #878a9d;
      font-size: 13px;
      line-height: 22px;

      .footer-info-company {
        color: #b0b8c1;
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
  }
  @media (max-width: 1280px) {
    padding: 60px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LandingFooter = ({ footer }: { footer: IFooterState }) => {
  const { footerItems } = footer;

  return (
    <LandingFooterContainer>
      <img src={whiteLogoImage} alt="realworld logo" />
      <div className="footer-cotent-box">
        <div className="footer-link">
          {footerItems.map((item: IFooterItems) => (
            <a href={item.footerLink} target="_blank" rel="noreferrer" key={item.footerLink}>
              {item.footerLinkText}
            </a>
          ))}
        </div>
        <div className="footer-info">
          <p className="footer-info-company">(주) 유니크굿컴퍼니</p>
          <p>사업자 등록번호: 524-88-00746 | 대표: 이은영, 송인혁</p>
          <p>전화번호 070-8706-1010</p>
          <p>통신판매업신고번호 2018-서울성동-0760호</p>
          <p>서울특별시 성동구 연무장13길 8, 2층, 3층 (성수동2가, 메리히어)</p>
        </div>
      </div>
    </LandingFooterContainer>
  );
};

export default LandingFooter;
