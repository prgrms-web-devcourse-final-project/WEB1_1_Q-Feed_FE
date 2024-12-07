import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import theme from '@/styles/theme';
import { Container, MemberItem, InfoContainer, Name, Role } from './MemberList.styles';
import ReSignButton from '@/pages/QSpace/QSpaceMember/components/ReSignButton/ReSignButton';
import { GroupMember } from '@/pages/QSpace/types/group';

interface MemberListProps {
  members: GroupMember[];
  adminId: string;
  currentUserId: string;
  onResign?: (memberId: number) => void;
}

const MemberList = ({ members, adminId, currentUserId, onResign }: MemberListProps) => {
  const handleResign = (memberId: number) => {
    if (onResign) {
      onResign(memberId);
    }
  };

  const isAdmin = adminId === currentUserId;

  return (
    <Container>
      {members.map((member) => (
        <MemberItem key={member.groupMemberId}>
          <ProfileImage
            src={member.userProfile}
            size={48}
            bgColor={theme.colors.gray[200]}
            alt={`${member.userNickname}'s profile`}
          />
          <InfoContainer>
            <Name>{member.userNickname}</Name>
            <Role>{member.description || '프로필 소개글이 없습니다'}</Role>
          </InfoContainer>
          {isAdmin && member.userId !== currentUserId && (
            <ReSignButton onClick={() => handleResign(member.groupMemberId)} />
          )}
        </MemberItem>
      ))}
    </Container>
  );
};

export default MemberList;
