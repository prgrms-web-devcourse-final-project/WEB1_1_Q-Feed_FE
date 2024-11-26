/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  placeholder?: string; // 검색창 플레이스홀더
  onSearch?: (value: string) => void; // 검색 이벤트 핸들러
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "사용자의 닉네임을 검색해보세요.", // 기본 플레이스홀더
  onSearch,
}) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value); // Enter 키를 누르면 검색 이벤트 실행
    }
  };

  const handleIconClick = () => {
    if (onSearch) {
      onSearch(value); // 돋보기 아이콘 클릭 시 검색 이벤트 실행
    }
  };

  return (
    <div css={containerStyle}>
      <input
        type="text"
        css={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button css={iconButtonStyle} onClick={handleIconClick}>
        <CiSearch />
      </button>
    </div>
  );
};

// 컨테이너 스타일
const containerStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

// 인풋 스타일
const inputStyle = css`
  flex: 1;
  padding: 8px 12px;
  font-size: 8px;
  border: none;
  outline: none;

  &:focus {
    border-color: none;
  }
`;

// 돋보기 버튼 스타일
const iconButtonStyle = css`
  background: #f5f5f5;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e0e0e0;
  }

  svg {
    font-size: 18px;
    color: #007bff;
  }
`;

export default SearchInput;
