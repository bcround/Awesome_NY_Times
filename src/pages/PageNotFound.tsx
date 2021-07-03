import styled from 'styled-components';

const NotFoundParagraph = styled.p`
  text-align: center;
  margin-top: 20%;
  font-size: 3rem;
`;

const PageNotFound = () => {
  return <NotFoundParagraph>Requested Page is not found!</NotFoundParagraph>;
};

export default PageNotFound;
