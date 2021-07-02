import { SearchForm, ArticleList } from '@/components';
import { RootState } from '@/modules';
import { getArticleThunk } from '@/modules/article';
import { useDispatch, useSelector } from 'react-redux';

const ArticleSearch = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.article.articleInfo);
  const dispatch = useDispatch();

  const onSubmitKeyword = (keyword: string) => {
    dispatch(getArticleThunk(keyword));
  };

  return (
    <>
      <SearchForm onSubmitKeyword={onSubmitKeyword} />
      {loading && <p>로딩중...</p>}
      {error && <p>에러 발생...</p>}
      {data && <ArticleList articleList={data} />}
    </>
  );
};

export default ArticleSearch;
