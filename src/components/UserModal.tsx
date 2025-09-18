import React from 'react';
import { Modal, Descriptions, Avatar, Space, Typography, Tag, Divider } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  GlobalOutlined, 
  HomeOutlined,
  BankOutlined,
  UserOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { User } from '../types/User';

const { Title, Text } = Typography;

interface UserModalProps {
  user: User | null;
  visible: boolean;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, visible, onClose }) => {
  if (!user) return null;

  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      className="user-modal"
    >
      <div className="text-center mb-6">
        <Avatar 
          size={120} 
          src={avatarUrl}
          icon={<UserOutlined />}
          className="border-4 border-blue-100 shadow-lg mb-4"
        />
        <Title level={2} className="mb-2 text-gray-800">{user.name}</Title>
        <Tag color="blue" className="text-base px-3 py-1">@{user.username}</Tag>
      </div>

      <Divider />

      <Descriptions bordered column={1} size="middle">
        <Descriptions.Item 
          label={
            <Space>
              <MailOutlined className="text-blue-500" />
              Email
            </Space>
          }
        >
          <a href={`mailto:${user.email}`} className="text-blue-600 hover:text-blue-800">
            {user.email}
          </a>
        </Descriptions.Item>
        
        <Descriptions.Item 
          label={
            <Space>
              <PhoneOutlined className="text-green-500" />
              Phone
            </Space>
          }
        >
          <a href={`tel:${user.phone}`} className="text-green-600 hover:text-green-800">
            {user.phone}
          </a>
        </Descriptions.Item>
        
        <Descriptions.Item 
          label={
            <Space>
              <GlobalOutlined className="text-purple-500" />
              Website
            </Space>
          }
        >
          <a 
            href={`https://${user.website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800"
          >
            {user.website}
          </a>
        </Descriptions.Item>
        
        <Descriptions.Item 
          label={
            <Space>
              <HomeOutlined className="text-orange-500" />
              Address
            </Space>
          }
        >
          <div>
            <Text>{user.address.suite} {user.address.street}</Text><br />
            <Text>{user.address.city}, {user.address.zipcode}</Text>
            <div className="mt-2">
              <EnvironmentOutlined className="text-gray-400 mr-1" />
              <Text className="text-gray-600 text-sm">
                {user.address.geo.lat}, {user.address.geo.lng}
              </Text>
            </div>
          </div>
        </Descriptions.Item>
        
        <Descriptions.Item 
          label={
            <Space>
              <BankOutlined className="text-indigo-500" />
              Company
            </Space>
          }
        >
          <div>
            <Title level={5} className="mb-1">{user.company.name}</Title>
            <Text className="text-gray-600">{user.company.catchPhrase}</Text><br />
            <Text className="text-gray-500 text-sm">{user.company.bs}</Text>
          </div>
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default UserModal;