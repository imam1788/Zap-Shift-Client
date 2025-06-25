import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl text-center font-bold">Wellcome back!</h1>
        <p className='font-semibold'>Login with Profast</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">

            <label className="label">Email</label>
            <input type="email" {...register('email')} className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input
              type="password"
              {...register('password',
                {
                  required: true,
                  minLength: 6
                })}
              className="input" placeholder="Password" />
            {
              errors.password?.type === 'required' &&
              <p className='text-red-500'>Password is required</p>
            }
            {
              errors.password?.type === 'minLength' &&
              <p className='text-red-500'>Password must be 6 characters or longer</p>
            }

            <div><a className="link link-hover">Forgot password?</a></div>

            <button className="btn btn-primary text-black mt-4">Login</button>
          </fieldset>
          <p className='text-lg text-center'><small>Don't have any account?<Link className='btn btn-link mr-3' to="/register">Register</Link></small></p>
        </form>
      </div>
    </div>
  );
};

export default Login;