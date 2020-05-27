import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [message, removeToast]);

  return (
    <Container
      hasDescription={!!message.description}
      type={message.type}
      style={style}>
      <FiAlertCircle size={20} />
      <div>
        <strong> {message.title} </strong>
        {message.description && <p> {message.description}</p>}
      </div>
      <button type="button">
        <FiXCircle onClick={() => removeToast(message.id)} size={18} />
      </button>
    </Container>
  );
};

export default Toast;
