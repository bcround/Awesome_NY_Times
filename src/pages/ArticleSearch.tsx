import { SearchForm, ArticleList, LoadingSpinner } from '@/components';
import { RootState } from '@/modules';
import { getArticleThunk, resetArticle, toggleLike } from '@/modules/article';
import { addFavorite, removeFavorite } from '@/modules/favorite';
import { a11yHiddenStyle } from '@/styles/global-style';
import { ArticleInfo } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const ArticleSearchSection = styled.section`
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

const Heading = styled.h2`
  ${a11yHiddenStyle}
`;

const ArticleSearch = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.article);
  const dispatch = useDispatch();

  const onSubmitKeyword = (keyword: string) => {
    dispatch(resetArticle());
    dispatch(getArticleThunk(keyword));
  };

  const onClickLoadMore = (keyword: string, page: number) => {
    dispatch(getArticleThunk(keyword, page));
  };

  const onClickAddFavorite = (articleInfo: ArticleInfo) => {
    dispatch(toggleLike(articleInfo._id));
    dispatch(addFavorite(articleInfo));
  };

  const onClickRemoveFavorite = (id: string) => {
    dispatch(toggleLike(id));
    dispatch(removeFavorite(id));
  };

  return (
    <ArticleSearchSection>
      <Heading>Article Search Page</Heading>
      <SearchForm data={data} onSubmitKeyword={onSubmitKeyword} />
      {loading && !data && <LoadingSpinner />}
      {error && <p>에러 발생...</p>}
      {data && (
        <ArticleList
          data={data}
          loading={loading}
          onClickLoadMore={onClickLoadMore}
          onClickAddFavorite={onClickAddFavorite}
          onClickRemoveFavorite={onClickRemoveFavorite}
        />
      )}
    </ArticleSearchSection>
  );
};

export default ArticleSearch;
