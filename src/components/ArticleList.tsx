import { a11yHiddenStyle } from '@/styles/global-style';
import { Response } from '@/types';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';

type ArticleListProps = {
  data: Response;
  loading: boolean;
  onClickLoadMore: (keyword: string, page: number) => void;
};

const StyledArticleList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Heading = styled.h3`
  ${a11yHiddenStyle}
`;

const ShowMoreButton = styled(Button)`
  width: 150px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #aaa;
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 30px;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;

const NoResultsParagraph = styled.p`
  margin-top: 20%;
  font-size: 3rem;
`;

let page = 1;

const ArticleList = ({ data, loading, onClickLoadMore }: ArticleListProps) => {
  const {
    docs: articleList,
    meta: { hits: numOfArticles },
    keyword,
  } = data;

  const onClick = () => {
    onClickLoadMore(keyword, page);
    page++;
  };

  return (
    <StyledArticleList>
      <Heading>Article List</Heading>
      {articleList.length ? (
        articleList.map((article) => <ArticleListItem key={article._id} article={article} />)
      ) : (
        <NoResultsParagraph>No search results found</NoResultsParagraph>
      )}
      {numOfArticles > 10 && !loading && (
        <ShowMoreButton type="button" onClick={onClick}>
          SHOW MORE
        </ShowMoreButton>
      )}
      {loading && <LoadingSpinner />}
    </StyledArticleList>
  );
};

export default ArticleList;
