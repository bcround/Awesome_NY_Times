import { ArticleInfo } from '@/types';
import { convertDate, getSrcOfImage, limitWordsTo30 } from '@/utils/processData';
import styled from 'styled-components';
import Button from './Button';
import SVGIcon from './SVGIcon';

type FavoriteListItemProps = {
  favorite: ArticleInfo;
  onClickRemoveFavorite: (id: string) => void;
};

const MEDIA_BASE_URL = 'https://static01.nyt.com';

const StyledArticleListItem = styled.li`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  height: 350px;
  margin-top: 40px;
  display: flex;
  flex-flow: column wrap;

  @media (max-width: 1024px) {
    height: 250px;
  }
  @media (max-width: 650px) {
    flex-flow: row wrap;
    height: 10%;
    justify-content: center;
    padding: 20px;
  }
`;

const ArticleLink = styled.a``;

const ArticleInfoWrapper = styled.div`
  width: 55%;
  @media (max-width: 768px) {
    width: 65%;
  }
  @media (max-width: 650px) {
    width: auto;
  }
`;

const ArticleImage = styled.img`
  padding: 20px;
  border-radius: 5px;
  width: 40%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 650px) {
    width: 70%;
    height: 50%;
  }
`;

const ArticleTitle = styled.h2`
  padding-top: 40px;
  font-size: 3rem;
  @media (max-width: 1024px) {
    font-size: 2.2rem;
    padding-top: 20px;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ArticleParagraph = styled.p`
  font-size: 1.8rem;
  color: #666;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  line-height: 20px;
  @media (max-width: 1024px) {
    font-size: 1.6rem;
    padding: 15px 0;
  }
`;

const ArticleMiscInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
  font-size: 1.4rem;
  color: #aaa;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;

const ArticleDate = styled.span``;

const ArticleSection = styled.span`
  border-radius: 2px;
  padding: 4px;
  background-color: #aaa;
  color: #fff;
`;

const ArticleAuthor = styled.span``;

const FavoriteButton = styled(Button)``;

const FavoriteIcon = styled(SVGIcon)`
  width: 25px;
  height: 25px;
  path {
    fill: #f00;
  }
`;

const FavoriteListItem = ({ favorite, onClickRemoveFavorite }: FavoriteListItemProps) => {
  const {
    _id,
    multimedia,
    headline: { main },
    abstract,
    pub_date,
    section_name,
    byline: { original },
    web_url,
  } = favorite;

  const onClick = () => {
    onClickRemoveFavorite(_id);
  };

  return (
    <StyledArticleListItem>
      {multimedia.length ? <ArticleImage alt={main} src={`${MEDIA_BASE_URL}/${getSrcOfImage(multimedia)}`} /> : null}
      <ArticleInfoWrapper>
        <ArticleLink href={web_url}>
          <ArticleTitle>{main}</ArticleTitle>
          <ArticleParagraph>{limitWordsTo30(abstract)}</ArticleParagraph>
        </ArticleLink>
        <ArticleMiscInfo>
          <ArticleDate>{convertDate(pub_date)}</ArticleDate>
          {section_name && <ArticleSection>{section_name}</ArticleSection>}
        </ArticleMiscInfo>
        <ArticleMiscInfo>
          {original ? <ArticleAuthor>{original}</ArticleAuthor> : <span>No Author</span>}
          <FavoriteButton onClick={onClick}>
            <FavoriteIcon className="favorite-icon" iconType="HeartFilled" />
          </FavoriteButton>
        </ArticleMiscInfo>
      </ArticleInfoWrapper>
    </StyledArticleListItem>
  );
};

export default FavoriteListItem;
