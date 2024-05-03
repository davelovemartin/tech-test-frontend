import React from 'react';

const LoadingSpinner = (props: { isError: boolean; isPressed: boolean }) => {
  const { isError, isPressed } = props;
  const className = `loading-spinner ${isPressed ? 'loading-spinner-pressed' : ''} ${isError ? 'loading-spinner-error' : ''}`;
  return (
    <svg className={className} viewBox="0 0 800 800">
      <circle cx="400" cy="400" fill="none" r="375" strokeWidth="50" strokeDasharray="492 1400" />
    </svg>
  );
};

export default LoadingSpinner;
