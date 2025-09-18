import React from 'react';
import { Input, Select, Space, Card } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

const { Option } = Select;

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  filterBy: string;
  onFilterChange: (value: string) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  filterBy,
  onFilterChange
}) => {
  return (
    <Card className="mb-6 shadow-sm">
      <Space direction="vertical" size="middle" className="w-full">
        <Input
          placeholder="Search users by name, email, or username..."
          prefix={<SearchOutlined className="text-gray-400" />}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          size="large"
          className="rounded-lg"
        />
        
        <Space wrap className="w-full justify-between">
          <Space>
            <FilterOutlined className="text-gray-500" />
            <span className="text-gray-700 font-medium">Filters:</span>
          </Space>
          
          <Space wrap>
            <Select
              value={sortBy}
              onChange={onSortChange}
              placeholder="Sort by"
              style={{ width: '1000px' }}
            >
              <Option value="name">Name A-Z</Option>
              <Option value="name-desc">Name Z-A</Option>
              <Option value="email">Email A-Z</Option>
              <Option value="city">City A-Z</Option>
              <Option value="company">Company A-Z</Option>
            </Select>
            
            <Select
              value={filterBy}
              onChange={onFilterChange}
              placeholder="Filter by domain"
              style={{ width: '200px' }}
            >
              <Option value="all">All Users</Option>
              <Option value=".com">.com emails</Option>
              <Option value=".org">.org emails</Option>
              <Option value=".net">.net emails</Option>
              <Option value=".biz">.biz emails</Option>
            </Select>
          </Space>
        </Space>
      </Space>
    </Card>
  );
};

export default SearchFilters;