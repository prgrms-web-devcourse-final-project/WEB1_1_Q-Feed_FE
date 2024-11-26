import styled from '@emotion/styled';
import { GoPeople } from 'react-icons/go';
import GroupStateTag from '@/pages/QSpaceMain/components/GroupStateTag/GroupStateTag';
import theme from '@/styles/theme';

interface GroupCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  membersCount: number;
  isOpen: boolean;
  createdAt: string;
  className?: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 23.5rem;
  background: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ImagePlaceholder = styled.div<{ imageUrl?: string }>`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background: ${(props) => (props.imageUrl ? `url(${props.imageUrl})` : theme.colors.gray[200])};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 1rem 0 0 0;
  color: ${theme.colors.black};
  font-size: ${theme.typography.title2.size};
  font-weight: ${theme.typography.weights.semiBold};
  line-height: ${theme.typography.title2.lineHeight};
`;

const Description = styled.p`
  margin: 0;
  color: ${theme.colors.gray[300]};
  font-size: ${theme.typography.body1.size};
  font-weight: ${theme.typography.weights.regular};
  line-height: ${theme.typography.body1.lineHeight};
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  width: 98%;
  background-color: ${theme.colors.gray[200]};
`;

const BottomSection = styled.div`
  display: flex;
  margin: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const MembersCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${theme.colors.gray[400]};
  font-size: ${theme.typography.body2.size};
`;

const CreatedAt = styled.span`
  color: ${theme.colors.blue};
  font-size: ${theme.typography.body2.size};
`;

const GroupCard = ({ imageUrl, title, description, membersCount, isOpen, createdAt, className }: GroupCardProps) => {
  return (
    <Card className={className}>
      <TopSection>
        <ImagePlaceholder imageUrl={imageUrl} />
        <ContentWrapper>
          <GroupStateTag isOpen={isOpen} />
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContentWrapper>
      </TopSection>
      <Divider />
      <BottomSection>
        <MembersCount>
          <GoPeople size={16} />
          {membersCount}
        </MembersCount>
        <CreatedAt>{createdAt}</CreatedAt>
      </BottomSection>
    </Card>
  );
};

export default GroupCard;
