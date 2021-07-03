import { SVGIcon } from '@/components';
import styled from 'styled-components';

const LoadingSpinnerIcon = styled(SVGIcon)`
  margin: 0 auto;
`;

const LoadingSpinner = () => {
  return <LoadingSpinnerIcon className="loading-spinner-icon" iconType="LoadingSpinner" />;
};

export default LoadingSpinner;
