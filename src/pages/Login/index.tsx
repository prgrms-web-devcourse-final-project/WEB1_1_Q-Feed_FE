import styled from '@emotion/styled';
import { Logo } from "@/components/ui/Logo/Logo";
import { Button, Input, FormControl, FormLabel, FormErrorMessage, Stack, HStack } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { RiKakaoTalkFill } from "react-icons/ri";

const LAYOUT = {
  HEADER_HEIGHT: '0.9375rem',
  MIN_HEIGHT: '48.3125rem',
  PADDING: '2rem',
  GAP: '1rem',
} as const;

const FORM = {
  MAX_WIDTH: '26.5625rem',
  CONTROL_HEIGHT: '100px',
  MARGIN_BOTTOM: '1rem',
} as const;

const LOGO = {
  SIZE: '30%',
} as const;


const Container = styled.div`
  height :calc(100vh- ${LAYOUT.HEADER_HEIGHT});
  min-height : ${LAYOUT.MIN_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${LAYOUT.PADDING};
  gap : ${LAYOUT.GAP};
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width : ${FORM.MAX_WIDTH};
`;

const StyledStack = styled(Stack)`
  align :flex-start;
  width : 100%;
`;

const StyledButton = styled(Button)`
 width : 100%;
`;


const StyledFormControl = styled(FormControl)`
  height: ${FORM.CONTROL_HEIGHT};
  position: relative;
  margin-bottom: ${FORM.MARGIN_BOTTOM};
`;

const StyledFormErrorMessage = styled(FormErrorMessage)`
  position: absolute;
  bottom: 0;
`;

const StyledHStack = styled(HStack)`
  align-items : center;
  justify-content : center;
  width : 100%;
`;


const TextButton = styled(Button)`
  background:transparent;

  &:hover {
    background:transparent;
    color : gray;
  }

`;


interface LoginFormValues {
  email: string;
  password: string;
}

const handleClickLogin = ()=>{
  console.log("로그인 클릭");

}

const handleFindEmail = () =>{
  console.log('이메일찾기 버튼 클릭');
}

const handleRegister = () =>{
  console.log('회원가입 버튼 클릭');

}


export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Logo width={LOGO.SIZE} height={LOGO.SIZE} />
      <h3>일상의 질문으로 연결되는 우리들의 이야기(가제)</h3>

      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <StyledStack>
          <StyledFormControl isInvalid={!!errors.email}>
              <FormLabel>이메일</FormLabel>

              <Input
                {...register("email", {
                  required: "이메일을 입력해주세요",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "올바른 이메일 형식이 아닙니다"
                  }
                })}
                type="email"
              />

              <StyledFormErrorMessage>
                {errors.email?.message}
              </StyledFormErrorMessage>
            </StyledFormControl>

          <StyledFormControl isInvalid={!!errors.password}>
            <FormLabel>비밀번호</FormLabel>
            <Input
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이어야 합니다"
                }
              })}
              type="password"
            />
            <StyledFormErrorMessage>
              {errors.password?.message}
            </StyledFormErrorMessage>
          </StyledFormControl>

          <StyledButton type="submit" onClick={handleClickLogin}>로그인</StyledButton>
        </StyledStack>
      </FormWrapper>

      <StyledStack>
        <StyledButton leftIcon={<RiKakaoTalkFill /> } colorScheme='yellow' >
          카카오 로그인
        </StyledButton>
      </StyledStack>

      <StyledHStack >
        <TextButton onClick={handleFindEmail}>이메일/비밀번호 찾기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};

export default Login;