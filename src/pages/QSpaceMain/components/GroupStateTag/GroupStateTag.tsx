import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface GroupStateTagProps {
  isOpen: boolean;
  className?: string;
}

const StateTag = styled.div<{ isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.body2.weight};
  line-height: ${theme.typography.body2.lineHeight};

  ${({ isOpen }) =>
    isOpen
      ? `
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.textYellow};
  `
      : `
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[400]};
  `}
`;

const GroupStateTag = ({ isOpen, className }: GroupStateTagProps) => {
  return (
    <StateTag isOpen={isOpen} className={className}>
      {isOpen ? '모집중' : '모집완료'}
    </StateTag>
  );
};

export default GroupStateTag;
