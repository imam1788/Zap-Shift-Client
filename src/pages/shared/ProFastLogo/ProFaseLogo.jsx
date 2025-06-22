import React from 'react';
import logo from '../../../assets/logo.png'

const ProFaseLogo = () => {
  return (
    <div className='flex items-end'>
      <img className='mb-1' src={logo} alt="" />
      <p className='text-2xl font-bold -ml-3'>Profast</p>
    </div>
  );
};

export default ProFaseLogo;