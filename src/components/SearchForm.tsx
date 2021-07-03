import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Response } from '@/types';
import { a11yHiddenStyle } from '@/styles/global-style';
import Input from './Input';
import Button from './Button';
import SVGIcon from './SVGIcon';

type SearchFormProps = {
  data: Response | null;
  onSubmitKeyword: (keyword: string) => void;
};

const StyledForm = styled.form`
  width: 50%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 2.4rem;
  @media (max-width: 1440px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 400px;
    height: 40px;
    font-size: 2rem;
  }
  @media (max-width: 512px) {
    width: 250px;
    font-size: 1.5rem;
  }
`;

const Heading = styled.h3`
  ${a11yHiddenStyle}
`;

const SearchButton = styled(Button)`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
`;

const SearchIcon = styled(SVGIcon)`
  width: 30px;
  height: 30px;

  path {
    fill: #ccc;
  }
`;

const SearchForm = ({ data, onSubmitKeyword }: SearchFormProps) => {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data?.keyword === input) return;

    onSubmitKeyword(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Heading>Search Box</Heading>
      <Input id="searchInput" value={input} placeHolder="Type a KEYWORD for news" onChange={onChange} />
      <SearchButton>
        <SearchIcon className="search-icon" iconType="Search" />
      </SearchButton>
    </StyledForm>
  );
};

export default SearchForm;
