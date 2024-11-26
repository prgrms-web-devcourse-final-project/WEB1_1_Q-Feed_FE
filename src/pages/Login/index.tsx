import styled from '@emotion/styled';
import { Logo } from "@/components/ui/Logo/Logo";
import { Button, Input, FormControl, FormLabel, FormErrorMessage, Stack, HStack } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { RiKakaoTalkFill } from "react-icons/ri";

const Container = styled.div`
  height :calc(100vh- 0.9375rem);
  min-height : 48.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap : 1rem;
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width : 26.5625rem; // 425px;
`;

const StyledStack = styled(Stack)`
  gap: 4;
  align :flex-start;
  width : 100%;

`;

const StyledButton = styled(Button)`
 width : 100%;
`;



const StyledFormControl = styled(FormControl)`
  height: 100px;
  position: relative;
  margin-bottom: 1rem;
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


export const Login = () => {  // children prop 제거
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
      <Logo width="30%" height="30%" />
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