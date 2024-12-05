import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import theme from '@/styles/theme';
import { Container, MemberItem, InfoContainer, Name, Role } from './MemberList.styles';
import ReSignButton from '@/pages/QSpace/QSpaceMember/components/ReSignButton/ReSignButton';

interface Member {
  id: string;
  name: string;
  profileImage?: string;
  role: string;
}

interface MemberListProps {
  members: Member[];
  onResign?: (memberId: string) => void;
}

const MemberList = ({ members, onResign }: MemberListProps) => {
  const handleResign = (memberId: string) => {
    if (onResign) {
      onResign(memberId);
    }
  };

  return (
    <Container>
      {members.map((member) => (
        <MemberItem key={member.id}>
          <ProfileImage
            src={member.profileImage}
            size={48}
            bgColor={theme.colors.gray[200]}
            alt={`${member.name}'s profile`}
          />
          <InfoContainer>
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
          </InfoContainer>
          <ReSignButton onClick={() => handleResign(member.id)} />
        </MemberItem>
      ))}
    </Container>
  );
};

export default MemberList;
