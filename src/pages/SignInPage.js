import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ButtonGoogle } from 'components/button';
import FormGroup from 'components/common/FormGroup';
import { IconEyeToggle } from 'components/icon';
import { Input } from 'components/input';
import { Label } from 'components/label';
import useToogleValue from 'hooks/useToogleValue';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import LayoutAuthentication from '../layout/LayoutAuthentication';

const SignInPage = () => {
  const schema = yup.object({
    email: yup.string().email('Invalid email address').required('This field is required'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'Password must be 8 character'),
  });

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const { value: showPassword, handleToggleValue: handleTooglePassWord } = useToogleValue();

  const handleSignIn = (values) => {
    console.log(values);
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Dont have an account?{' '}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@example.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTooglePassWord}></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium underline text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button type="submit" className="w-full" kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
