import { a11yHiddenStyle } from '@/styles/global-style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SVGIcon from './SVGIcon';

const HeaderBar = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: #25272b;
`;

const Navigation = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 1440px;
  height: 100%;
  padding: 0 70px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const A11ySpan = styled.span`
  ${a11yHiddenStyle}
`;

const FavoriteLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const FavoriteIcon = styled(SVGIcon)`
  width: 40px;
  height: 40px;
  path {
    fill: #fff;
  }
`;

const FavoriteTitle = styled.p`
  font-size: 2rem;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Navigation>
        <Heading>
          <Link to="/">
            <A11ySpan>Awesome NY Times</A11ySpan>
            <SVGIcon className="logo" iconType="Logo" />
          </Link>
        </Heading>
        <FavoriteLink to="/favorites">
          <FavoriteIcon className="favorite-icon" iconType="HeartFilled" />
          <FavoriteTitle>Favorites</FavoriteTitle>
        </FavoriteLink>
      </Navigation>
    </HeaderBar>
  );
};

export default Header;
