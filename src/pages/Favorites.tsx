import { FavoriteList } from '@/components';
import { RootState } from '@/modules';
import { a11yHiddenStyle } from '@/styles/global-style';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '@/modules/favorite';
import styled from 'styled-components';
import { toggleLike } from '@/modules/article';

const FavoritesSection = styled.section`
  margin: 0 auto;
  padding: 30px 54px;
  width: 1440px;
  margin-top: 100px;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const A11yHeading = styled.h2`
  ${a11yHiddenStyle}
`;

const FavoritePageTitle = styled.h2`
  width: 275px;
  font-size: 4rem;
  font-weight: bold;
  color: #666;
  margin: 0 auto;
`;

const NoFavoriteParagraph = styled.p`
  width: 320px;
  margin: 0 auto;
  margin-top: 20%;
  font-size: 3rem;
`;

const Favorites = () => {
  const favoriteList = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();

  const onClickRemoveFavorite = (id: string) => {
    dispatch(toggleLike(id));
    dispatch(removeFavorite(id));
  };

  return (
    <FavoritesSection>
      <FavoritePageTitle>Your Favorites</FavoritePageTitle>
      <A11yHeading>Favorites Page</A11yHeading>
      {favoriteList.length ? (
        <FavoriteList favoriteList={favoriteList} onClickRemoveFavorite={onClickRemoveFavorite} />
      ) : (
        <NoFavoriteParagraph>No Favorite Articles Yet!</NoFavoriteParagraph>
      )}
    </FavoritesSection>
  );
};

export default Favorites;
