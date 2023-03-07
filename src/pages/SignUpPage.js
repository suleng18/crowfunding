import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ButtonGoogle } from 'components/button';
import { Checkbox } from 'components/checkbox';
import FormGroup from 'components/common/FormGroup';
import { IconEyeToggle } from 'components/icon';
import { Input } from 'components/input';
import { Label } from 'components/label';
import useToogleValue from 'hooks/useToogleValue';
import LayoutAuthentication from 'layout/LayoutAuthentication';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authRegister } from 'store/auth/auth-slice';
import * as yup from 'yup';

const SignUpPage = () => {
  const schema = yup.object({
    name: yup.string().required('This field is required'),
    email: yup.string().email('Invalid email address').required('This field is required'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'Password must be 8 character'),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();

  const handleSignUp = async (values) => {
    try {
      dispatch(authRegister(values));
      reset({});
    } catch (error) {
      console.log('🚀 ~ error:', error);
    }
  };

  const { value: acceptTerm, handleToggleValue: handleToogleTerm } = useToogleValue();
  const { value: showPassword, handleToggleValue: handleTooglePassWord } = useToogleValue();

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{' '}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Fullname *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Su Leng"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gamil.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTooglePassWord}></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex mb-5 gap-x-5">
          <Checkbox onClick={handleToogleTerm} name="term" checked={acceptTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the <span className="underline text-secondary">Terms of Use</span> and have
              read and understand the{' '}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full" kind="primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
