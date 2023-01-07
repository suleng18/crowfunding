import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from '../components/label';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';

const SignUpPage = () => {
  const { handleSubmit, control } = useForm();

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{' '}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 border gap-x-3 border-strock rounded-xl ">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span className="text-base font-semibold text-text2">Sign up with Google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form>
        <div className="flex flex-col gap-y-3">
          <Label>Fullname *</Label>
          <Input control={control} name="name" placeholder="Jhone Doe"></Input>
        </div>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
