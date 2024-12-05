import { Checkbox } from '@chakra-ui/react';
import theme from '@/styles/theme';
import {
  StyledContainer,
  StyledTitle,
} from '@/pages/QSpace/QSpaceMain/components/GroupStateCheckBox/GroupStateCheckBox.styles';
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
