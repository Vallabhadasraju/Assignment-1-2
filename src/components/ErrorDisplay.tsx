import React from 'react';
import { Alert, Button, Space } from 'antd';
import { ReloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <div className="text-center py-12">
      <Space direction="vertical" size="large">
        <ExclamationCircleOutlined className="text-6xl text-red-500" />
        
        <Alert
          message="Failed to Load Users"
          description={message}
          type="error"
          showIcon
          className="max-w-md mx-auto"
        />
        
        <Button 
          type="primary" 
          icon={<ReloadOutlined />}
          onClick={onRetry}
          size="large"
        >
          Try Again
        </Button>
      </Space>
    </div>
  );
};

export default ErrorDisplay;