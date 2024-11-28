import { Checkbox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface GroupStateCheckBoxProps {
  initialChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const GroupStateCheckBox = ({ initialChecked = false, onChange }: GroupStateCheckBoxProps) => {
  return (
    <StyledContainer>
      <Checkbox
        defaultChecked={initialChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        sx={{
          'span.chakra-checkbox__control': {
            width: '18px',
            height: '18px',
            borderRadius: '4px',
            borderColor: 'gray.300',
            _checked: {
              background: theme.colors.primary,
              borderColor: theme.colors.primary,
              color: 'white',
              _hover: {
                background: theme.colors.primary,
                borderColor: theme.colors.primary,
              },
            },
            _hover: {
              borderColor: theme.colors.primary,
            },
          },
          'span.chakra-checkbox__label': {
            display: 'none',
          },
        }}
      />
      <StyledTitle>모집중</StyledTitle>
    </StyledContainer>
  );
};

export default GroupStateCheckBox;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledTitle = styled.span`
  color: ${theme.colors.gray[400]};
  font-family: ${theme.typography.body2.fontFamily};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.body2.weight};
  line-height: ${theme.typography.body2.lineHeight};
`;
