import styled from "@emotion/styled";
import SearchIcon from "../icons/SearchIcon";

const SearchInputContainer = styled.div`
  background-color: #4b4b4b80;
  border: none;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  margin: 10px 40px;
  > svg {
    color: #a4a4a4;
    height: 24px;
  }
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: #888888;
    padding-left: 10px;
  }
`;

export default function Search() {
  return (
    <SearchInputContainer>
      <SearchIcon />
      <SearchInput placeholder="Search Twitter" />
    </SearchInputContainer>
  );
}
