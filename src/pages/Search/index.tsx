/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar from '@/components/ui/InputBar/InputBar';
import ProfileImageCon from '@/components/ui/ProfileImageCon/ProfileImageCon';
import { IoChevronBack } from 'react-icons/io5';
import {
  containerStyle,
  headerStyle,
  listContainerStyle,
  listItemStyle,
  nameStyle,
  noResultStyle,
  backIconStyle,
} from '@/pages/Search/styles';

// 유저 데이터 타입 정의
interface User {
  id: number;
  name: string;
}

const SearchResultPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어 상태
  const [results, setResults] = useState<User[]>([]); // 검색 결과 상태
  const navigate = useNavigate();

  const dummyData: User[] = [
    { id: 1, name: '백종원' },
    { id: 2, name: '홍길동' },
    { id: 3, name: '이순신' },
    { id: 4, name: '김치국' },
    { id: 5, name: '배고파' },
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    // 검색어가 있으면 필터링된 결과 업데이트
    const filteredResults = dummyData.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div css={containerStyle}>
      {/* 검색창 */}
      <div css={headerStyle}>
        <IoChevronBack css={backIconStyle} onClick={() => navigate(-1)} />
        <InputBar placeholder="닉네임을 검색하세요." onSearch={handleSearch} />
      </div>

      {/* 검색 결과 리스트 */}
      <div css={listContainerStyle}>
        {results.length > 0 ? (
          results.map((user) => (
            <div key={user.id} css={listItemStyle}>
              <ProfileImageCon src="" size={40} />
              <span css={nameStyle}>{user.name}</span>
            </div>
          ))
        ) : searchTerm ? (
          <p css={noResultStyle}>검색 결과가 없습니다.</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchResultPage;
