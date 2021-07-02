import { SearchForm, ArticleList } from '@/components';
import { RootState } from '@/modules';
import { getArticleThunk } from '@/modules/article';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const ArticleSearchSection = styled.section`
  margin: 0 auto;
  padding: 30px 54px;
  width: 1440px;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ArticleSearch = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.article.articleInfo);
  const dispatch = useDispatch();

  const onSubmitKeyword = (keyword: string) => {
    dispatch(getArticleThunk(keyword));
  };

  return (
    <ArticleSearchSection>
      <SearchForm onSubmitKeyword={onSubmitKeyword} />
      {loading && <p>로딩중...</p>}
      {error && <p>에러 발생...</p>}
      {data && <ArticleList articleList={data} />}
    </ArticleSearchSection>
  );
};

export default ArticleSearch;
