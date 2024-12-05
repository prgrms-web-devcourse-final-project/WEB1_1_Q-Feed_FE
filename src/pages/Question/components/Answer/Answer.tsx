import React from 'react';
import {
  AnswerContainer,
  InputLabel,
  LabelText,
  LockButton,
  Input,
  CharacterCount,
} from './Answer.styles';
import { IoLockClosed, IoLockOpen } from 'react-icons/io5';

type AnswerProps = {
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  isPrivate: boolean;
  onLockToggle: () => void;
};

const Answer = ({ answer, setAnswer, isPrivate, onLockToggle }: AnswerProps) => {
  return (
    <AnswerContainer>
      <InputLabel>
        <LabelText>답변을 입력해주세요.</LabelText>
        <LockButton onClick={onLockToggle} isPrivate={isPrivate}>
          {isPrivate ? <IoLockClosed size="1rem" /> : <IoLockOpen size="1rem" />}
        </LockButton>
      </InputLabel>
      <Input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        maxLength={100}
      />
      <CharacterCount>{`${answer.length}/100`}</CharacterCount>
    </AnswerContainer>
  );
};

export default Answer;
