import { a11yHiddenStyle } from '@/styles/global-style';
import { ArticleInfo } from '@/types';
import styled from 'styled-components';
import FavoriteListItem from './FavoriteListItem';

type FavoriteListProps = {
  favoriteList: ArticleInfo[];
  onClickRemoveFavorite: (id: string) => void;
};

const StyledFavoriteList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Heading = styled.h3`
  ${a11yHiddenStyle}
`;

const FavoriteList = ({ favoriteList, onClickRemoveFavorite }: FavoriteListProps) => {
  return (
    <StyledFavoriteList>
      <Heading>Favorite List</Heading>
      {favoriteList.map((favorite) => (
        <FavoriteListItem key={favorite._id} favorite={favorite} onClickRemoveFavorite={onClickRemoveFavorite} />
      ))}
    </StyledFavoriteList>
  );
};

export default FavoriteList;
