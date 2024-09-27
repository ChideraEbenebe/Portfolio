'use client';

import React from 'react';

const handlePDF = () => {
  window.open('/resume.pdf', '_blank'); // opens the PDF in a new tab or window
};

const Button = () => {
  return (
    <div>
      <button
        className='px-4 py-3 border border-primary rounded-md hover:bg-primary hover:text-slate-900 transition-all duration-700'
        onClick={handlePDF}>
        Resume
      </button>
    </div>
  );
};

export default Button;
