import React from 'react';
import PropTypes from 'prop-types';

const InfoHintIcon = ({ className }) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M8 12C8.55228 12 9 11.5523 9 11V8.5C9 7.94772 8.55228 7.5 8 7.5C7.44772 7.5 7 7.94772 7 8.5V11C7 11.5523 7.44772 12 8 12Z"
        fill="black"
      />
      <path
        className={className}
        d="M8 6.25C8.69036 6.25 9.25 5.69036 9.25 5C9.25 4.30964 8.69036 3.75 8 3.75C7.30964 3.75 6.75 4.30964 6.75 5C6.75 5.69036 7.30964 6.25 8 6.25Z"
        fill="black"
      />
      <path
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0C3.58172 0 0 3.58173 0 8C0 12.4183 3.58172 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
        fill="black"
      />
    </svg>
  );
};

InfoHintIcon.propTypes = {
  className: PropTypes.string,
};

export default InfoHintIcon;
