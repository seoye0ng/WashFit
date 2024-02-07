/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  AGE_MAP, AgeType, GENDER_MAP, GenderType,
} from '@constants/dropdownMap';
import { GENDER_OPTIONS, AGE_OPTIONS } from '@constants/myPage';
import VALIDATION_MESSAGE_MAP from '@constants/validationMessage';
import { ISignUp } from '@remote/api/types/auth';
import useSignup from '@remote/queries/auth/useSignup';
import Button from '@shared/button/Button';
import DropdownField from '@shared/dropdown-field/DropdownField';
import Header from '@shared/header/Header';
import Spacing from '@shared/spacing/Spacing';
import Terms from '@shared/terms/Terms';
import TextField from '@shared/text-field/TextField';
import Title from '@shared/title/Title';

type SignUpFormType = {
  confirmPassword: string
} & ISignUp;

function SignupPage() {
  const {
    register, handleSubmit, formState: { errors, isValid, isDirty }, watch,
  } = useForm<SignUpFormType>({
    defaultValues: {
      id: '',
      password: '',
      confirmPassword: '',
      gender: 'man',
      age: 'AGE_20',
    },
    mode: 'onBlur',
  });

  const { mutate } = useSignup();

  const onSubmit = (data: SignUpFormType) => {
    const {
      id, password, email, gender, age,
    } = data;
    mutate({
      id, password, email, gender, age,
    });
  };

  const [step, setStep] = useState(1);

  const onNext = () => {
    setStep((currentStep) => { return currentStep + 1; });
  };

  // TODO: 아이디 textfield onBlur 시 중복된 아이디 검사

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <>
          <Header />
          <Spacing size={20} />
          <main className="mainContainer">
            <Title title="회원가입" />
            <TextField
              label="아이디"
              required
              placeholder="아이디"
              {...register('id', {
                required: true,
                pattern: VALIDATION_MESSAGE_MAP.id.value,
              })}
              hasError={!!errors.id}
              helpMessage={VALIDATION_MESSAGE_MAP.id.message}
            />
            <TextField
              label="비밀번호"
              required
              placeholder="비밀번호"
              isPasswordType
              {...register('password', {
                required: true,
                pattern: VALIDATION_MESSAGE_MAP.password.value,
              })}
              hasError={!!errors.password}
              helpMessage={VALIDATION_MESSAGE_MAP.password.message}
            />
            <TextField
              label="비밀번호 확인"
              required
              placeholder="비밀번호 확인"
              isPasswordType
              {...register('confirmPassword', {
                required: true,
                validate: (confirmPassword: string) => {
                  if (watch('password') !== confirmPassword) {
                    return false;
                  }
                  return true;
                },
              })}
              hasError={!!errors.confirmPassword}
              helpMessage={VALIDATION_MESSAGE_MAP.confirmPassword.message}
            />
            <TextField
              label="이메일"
              required
              placeholder="이메일"
              {...register('email', {
                required: true,
                pattern: VALIDATION_MESSAGE_MAP.email.value,
              })}
              hasError={!!errors.email}
              helpMessage={VALIDATION_MESSAGE_MAP.email.message}
            />
            <DropdownField
              label="성별"
              required
              selectedLabel={GENDER_MAP[watch('gender') as GenderType]}
              type="profile"
              options={GENDER_OPTIONS}
              {...register('gender', {
                required: true,
              })}
            />
            <Spacing size={12} />
            <DropdownField
              required
              label="연령대"
              selectedLabel={AGE_MAP[watch('age') as AgeType]}
              type="profile"
              options={AGE_OPTIONS}
              {...register('age', {
                required: true,
              })}
            />
            <Spacing size={120} />
            <Button disabled={!isValid || !isDirty} onClick={onNext} size="medium" full>약관 동의하러 가기</Button>
          </main>
          <Spacing size={42.5} />
        </>
      )}

      {step === 2 && (
      <Terms type="signup" onClick={() => { return onSubmit(watch()); }} />
      )}
    </form>
  );
}

export default SignupPage;
