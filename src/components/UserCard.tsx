import React from 'react';
import { Card, Avatar, Typography, Space, Tag, Button } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  GlobalOutlined, 
  HomeOutlined,
  UserOutlined,
  EyeOutlined
} from '@ant-design/icons';
import { User } from '../types/User';

const { Text, Title } = Typography;
const { Meta } = Card;

interface UserCardProps {
  user: User;
  onViewDetails: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onViewDetails }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;

  const actions = [
    <Button 
      key="details" 
      type="primary" 
      icon={<EyeOutlined />} 
      onClick={() => onViewDetails(user)}
      className="w-full"
    >
      View Details
    </Button>
  ];

  return (
    <Card
      hoverable
      actions={actions}
      className="h-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      cover={
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-6 flex justify-center items-center min-h-[140px]">
          <Avatar 
            size={100} 
            src={avatarUrl}
            icon={<UserOutlined />}
            className="border-4 border-white shadow-lg"
          />
        </div>
      }
    >
      <Meta
        title={
          <Title level={4} className="mb-2 text-gray-800">
            {user.name}
          </Title>
        }
        description={
          <Space direction="vertical" size="small" className="w-full">
            <Tag color="blue" className="mb-2">@{user.username}</Tag>
            
            <div className="flex items-center gap-2">
              <MailOutlined className="text-gray-500" />
              <Text className="text-sm text-gray-600 truncate">{user.email}</Text>
            </div>
            
            <div className="flex items-center gap-2">
              <PhoneOutlined className="text-gray-500" />
              <Text className="text-sm text-gray-600">{user.phone.split(' ')[0]}</Text>
            </div>
            
            <div className="flex items-center gap-2">
              <GlobalOutlined className="text-gray-500" />
              <Text className="text-sm text-gray-600 truncate">{user.website}</Text>
            </div>
            
            <div className="flex items-center gap-2">
              <HomeOutlined className="text-gray-500" />
              <Text className="text-sm text-gray-600">{user.address.city}</Text>
            </div>
          </Space>
        }
      />
    </Card>
  );
};

export default UserCard;