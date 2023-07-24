import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { fadeInOut } from '../FunctionCase';

const CaseImageBackDefault = styled.img`
  width: 100%;
  height: 1;
  opacity: 0;
  z-index: 1;
`;

const CasePlatformContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CaseImage = styled.img<{ className: string }>`
  ${(props) =>
    props.className === 'back' &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1;
      z-index: 1;
      transform: translate(-50%, -50%);
      animation: ${fadeInOut} 3.2s ease;
    `}
  ${(props) =>
    props.className === 'phone' &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      height: 100%;
      transform: translate(-50%, -50%);
      z-index: 2;
    `}
`;

const CasePlatform = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const baseUrl = 'assets/images/landing';

  // change imported image every 3secs.
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const createImage = (className: string, altText: string, imageIndex: number) => (
    <CaseImage
      key={`${className}-${imageIndex}`}
      className={className}
      src={`${baseUrl}/function_${className}_${imageIndex}.png`}
      alt={altText}
    />
  );

  // image preloading
  useEffect(() => {
    const imageBackArray = Array.from({ length: 3 }, (_, i) => {
      const img = new Image();
      img.src = `${baseUrl}/function_back_${i}.png`;
      return img;
    });

    const imagePhoneArray = Array.from({ length: 3 }, (_, i) => {
      const img = new Image();
      img.src = `${baseUrl}/function_phone_${i}.png`;
      return img;
    });
  }, []);

  return (
    <CasePlatformContainer>
      <CaseImageBackDefault
        src={`${baseUrl}/function_back_default.png`}
        alt="function-back-default"
      />

      {createImage('back', 'function-background', imageIndex)}
      {createImage('phone', 'function-phone', imageIndex)}
    </CasePlatformContainer>
  );
};

export default CasePlatform;
