import React from 'react';
import { Outlet } from 'react-router';
import AuthImage from '../assets/authImage.png'
import ProFaseLogo from '../pages/shared/ProFastLogo/ProFaseLogo';

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200">
      <div>
        <ProFaseLogo></ProFaseLogo>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
          <img
            src={AuthImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;