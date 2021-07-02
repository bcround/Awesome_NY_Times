import { Article, Multimedia } from '@/types';
import styled from 'styled-components';
import Button from './Button';
import SVGIcon from './SVGIcon';

type ArticleListItemProps = {
  article: Article;
};

const MEDIA_BASE_URL = 'https://static01.nyt.com';

const StyledArticleListItem = styled.li``;

const ArticleImage = styled.img``;

const ArticleTitle = styled.h2``;

const ArticleParagraph = styled.p``;

const ArticleDate = styled.span``;

const ArticleSection = styled.span``;

const ArticleAuthor = styled.span``;

const FavoriteButton = styled(Button)``;

const FavoriteIcon = styled(SVGIcon)``;

const ArticleListItem = ({ article }: ArticleListItemProps) => {
  const {
    multimedia,
    headline: { main },
    lead_paragraph,
    pub_date,
    section_name,
    byline: { original },
  } = article;

  const getSrcOfImage = (multimedia: Multimedia[]) => {
    return multimedia.find((media) => media.subtype === 'mediumThreeByTwo440')?.url;
  };

  return (
    <StyledArticleListItem>
      {multimedia.length ? <ArticleImage alt={main} src={`${MEDIA_BASE_URL}/${getSrcOfImage(multimedia)}`} /> : null}
      <ArticleTitle>{main}</ArticleTitle>
      <ArticleParagraph>{lead_paragraph}</ArticleParagraph>
      <ArticleDate>{pub_date}</ArticleDate>
      <ArticleSection>{section_name}</ArticleSection>
      <ArticleAuthor>{original}</ArticleAuthor>
      <FavoriteButton>
        <FavoriteIcon className="favorite-icon" iconType="HeartFilled" />
      </FavoriteButton>
    </StyledArticleListItem>
  );
};

export default ArticleListItem;
