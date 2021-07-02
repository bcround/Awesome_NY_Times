import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import SVGIcon from './SVGIcon';

type SearchFormProps = {
  onSubmitKeyword: (keyword: string) => void;
};

const StyledForm = styled.form`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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

const SearchForm = ({ onSubmitKeyword }: SearchFormProps) => {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitKeyword(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input id="searchInput" value={input} placeHolder="Type a KEYWORD for news" onChange={onChange} />
      <SearchButton>
        <SearchIcon className="search-icon" iconType="Search" />
      </SearchButton>
    </StyledForm>
  );
};

export default SearchForm;
