import React from 'react';

const formatTimestamp = () => {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const buddhistYear = now.getFullYear() + 543; 
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${day}/${month}/${buddhistYear} ${hours}:${minutes}:${seconds}`;
};

export default formatTimestamp;