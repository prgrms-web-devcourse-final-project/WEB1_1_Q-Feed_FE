/** @jsxImportSource @emotion/react */
import {
  containerStyle,
  iconButtonStyle,
  inputStyle,
} from '@/components/ui/InputBar/InputBar.styles';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchInputProps {
  placeholder?: string; // 검색창 플레이스홀더
  onSearch?: (value: string) => void; // 검색 이벤트 핸들러
}

const SearchInput = ({
  placeholder = '사용자의 닉네임을 검색해보세요.', // 기본 플레이스홀더
  onSearch,
}: SearchInputProps) => {
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

export default SearchInput;
