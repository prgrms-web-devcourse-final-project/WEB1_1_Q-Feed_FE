/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchInputProps {
  placeholder?: string; // 검색창 플레이스홀더
  onSearch?: (value: string) => void; // 검색 이벤트 핸들러
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = '사용자의 닉네임을 검색해보세요.', // 기본 플레이스홀더
  onSearch,
}) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onSearch) {
      onSearch(newValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value); // Enter 키를 누르면 검색 이벤트 실행
    }
  };

  const handleIconClick = () => {
    if (onSearch) {
      onSearch(value); // 입력 값 변경 시 즉시 검색 이벤트 실행
    }
  };

  return (
    <div css={containerStyle}>
      <input
        type="text"
        css={inputStyle}
        placeholder={placeholder}
        onChange={handleInputChange} // 입력 시 바로 onSearch 호출
        onKeyDown={handleKeyPress}
      />
      <div css={iconButtonStyle} onClick={handleIconClick}>
        <CiSearch />
      </div>
    </div>
  );
};

// 컨테이너 스타일
const containerStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 377px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 16px;
  overflow: hidden;
`;

// 인풋 스타일
const inputStyle = css`
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  outline: none;

  &:focus {
    border-color: none;
  }
`;

// 돋보기 버튼 스타일
const iconButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  svg {
    font-size: 18px;
    color: black;
  }
`;

export default SearchInput;
