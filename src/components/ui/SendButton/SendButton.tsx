import styled from '@emotion/styled';
import MessageIcon from '../../../assets/images/message_icon.svg';
import theme from '@/styles/theme';

type SendButtonProps = {
  size?: number;
  onClick?: () => void;
};

export const SendButton = ({ onClick }: SendButtonProps) => {
  return (
    <Container>
      <Icon src={MessageIcon} alt="send" onClick={onClick} />
    </Container>
  );
};
const Container = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.gray[300]};
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;
