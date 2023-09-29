import React, { useEffect, useState } from 'react';
import './style.css';
const Notification = ({ title,body,toggleNotificationToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleNotificationToast();
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [toggleNotificationToast]);

  return (
    <div className='notify flex column center gap-10'>
      <div className='not-title'>
        <strong>{title}</strong>
      </div>
      <div className='not-body'>{body}</div>
    </div>
  );
};

export default Notification;
