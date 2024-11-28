import styled from '@emotion/styled';
import theme from '@/styles/theme';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import { Button, CloseButton } from '@chakra-ui/react';


type ProfileCardProps = {
  name : string;
  imgsrc?: string;
  followerName : string;
  followerNum : number;
  onClickClose?: ()=>void;
  onClickFollow?: ()=>void;
};




export const ProfileCard = ({ name,imgsrc,followerName, followerNum , onClickClose, onClickFollow}: ProfileCardProps) => {
  return (
    <Container>
      <StyledCloseButton onClick={onClickClose} colorScheme={theme.colors.primary}/>
      <ProfileWrapper>
        <ProfileImage size={74} src={imgsrc}/>
        <Name>{name}</Name>
        <Description>{followerName}님 외 {followerNum}명이 팔로우 합니다</Description>
        <StyledButton onClick={onClickFollow}>Follow</StyledButton>
      </ProfileWrapper>


    </Container>
  );
};

const Container = styled.div`
  width : 180px;
  height : 235px;
  background-color: ${theme.colors.background};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCloseButton = styled(CloseButton)`
  align-self: flex-end;
  margin: 15px 15px 0 0;
`;


const Name = styled.h1`
  width : 100%;
  margin-top : 10px;
  text-align : center;
  font-family: ${theme.typography.fontFamily.korean}; // Noto Sans KR
  font-size : 1.125rem; //18px
  color : ${theme.colors.black};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.h2`
  text-align: center;
  font-family : ${theme.typography.fontFamily.korean}; // Noto Sans KR
  font-size: 0.75rem;  //12px
  color : ${theme.colors.gray[400]};
  font-weight: 400;
`;

const StyledButton = styled(Button)`
  width : 100%;
  max-width: 96px;
  height : 36px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: ${theme.typography.fontFamily.english.header}; // open Sans
  font-weight: 600;
  border-radius: 30px;
  margin : 10px 0;
`;