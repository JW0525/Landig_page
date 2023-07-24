import styled from '@emotion/styled';

const CaseAppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  width: 100%;
  gap: 24px;
  margin: 0 107px;

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

  img {
    width: 100%;
  }
`;

const CaseApp = () => {
  const baseUrl = 'assets/images/landing';
  const caseAppContent = [{ type: 'ar' }, { type: 'chatbot' }, { type: 'nfc' }, { type: 'qr' }];

  return (
    <CaseAppContainer>
      {caseAppContent.map((content: any) => {
        return (
          <img
            src={`${baseUrl}/case_app_${content.type}.gif`}
            alt={`case-app-${content.type}`}
            key={content.type}
          />
        );
      })}
    </CaseAppContainer>
  );
};

export default CaseApp;
