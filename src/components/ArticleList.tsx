import { Article } from '@/types';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';

type ArticleListProps = {
  articleList: Article[];
};

const StyledArticleList = styled.ul``;

const ArticleList = ({ articleList }: ArticleListProps) => {
  return (
    <StyledArticleList>
      {articleList.length ? (
        articleList.map((article) => <ArticleListItem key={article._id} article={article} />)
      ) : (
        <p>No search results found</p>
      )}
    </StyledArticleList>
  );
};

export default ArticleList;
