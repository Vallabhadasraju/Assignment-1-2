import React, { useState, useMemo } from 'react';
import { Layout, Typography, Row, Col, Empty, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { User } from './types/User';
import { useUsers } from './hooks/useUsers';
import { filterUsers, sortUsers } from './utils/userFilters';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';
import SearchFilters from './components/SearchFilters';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorDisplay from './components/ErrorDisplay';
import 'antd/dist/reset.css';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  // API data management
  const { users, loading, error, refetch } = useUsers();

  // UI state management
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Filter and search state
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');

  // Process users with filters and sorting
  const processedUsers = useMemo(() => {
    const filtered = filterUsers(users, searchTerm, filterBy);
    return sortUsers(filtered, sortBy);
  }, [users, searchTerm, filterBy, sortBy]);

  // Event handlers
  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleFilterChange = (value: string) => {
    setFilterBy(value);
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Header className="bg-white shadow-sm border-b" style={{ height: 'auto', lineHeight: 'normal' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <UserOutlined className="text-white text-xl" />
              </div>
              <div>
                <Title level={3} className="!mb-0 text-gray-800 !mt-0">
                  User Directory
                </Title>
                <Text className="text-gray-500 text-sm">
                  Discover and connect with our community
                </Text>
              </div>
            </div>
            
            <div className="text-right">
              <Text className="text-gray-600">
                {loading ? (
                  <Spin size="small" className="mr-2" />
                ) : (
                  `${processedUsers.length} users found`
                )}
              </Text>
            </div>
          </div>
        </div>
      </Header>

      <Content className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!loading && !error && (
          <SearchFilters
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
            filterBy={filterBy}
            onFilterChange={handleFilterChange}
          />
        )}

        {loading && <LoadingSkeleton />}
        
        {error && (
          <ErrorDisplay 
            message={error} 
            onRetry={refetch} 
          />
        )}

        {!loading && !error && processedUsers.length === 0 && searchTerm && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <span>
                No users found matching "<strong>{searchTerm}</strong>"
              </span>
            }
            className="my-12"
          />
        )}

        {!loading && !error && processedUsers.length > 0 && (
          <Row gutter={[16, 16]}>
            {processedUsers.map((user) => (
              <Col
                key={user.id}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={6}
              >
                <UserCard
                  user={user}
                  onViewDetails={handleViewDetails}
                />
              </Col>
            ))}
          </Row>
        )}

        <UserModal
          user={selectedUser}
          visible={modalVisible}
          onClose={handleCloseModal}
        />
      </Content>
    </Layout>
  );
}

export default App;