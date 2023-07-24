import styled from '@emotion/styled';
import { color } from '@uniquegood/realworld-studio-design';

const CtaButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;

  a {
    text-decoration: none;

    color: ${color.white};
  }
`;

const CtaButton = ({ text, link }: { text: string; link?: string }) => {
  return (
    <CtaButtonContainer className="cta-btn">
      <a href={link}>{text}</a>
    </CtaButtonContainer>
  );
};

export default CtaButton;
