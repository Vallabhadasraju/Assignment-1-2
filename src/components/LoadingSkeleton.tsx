import React from 'react';
import { Card, Skeleton, Row, Col } from 'antd';

const LoadingSkeleton: React.FC = () => {
  const skeletonCards = Array.from({ length: 6 }, (_, index) => (
    <Col xs={24} sm={12} md={8} lg={6} key={index}>
      <Card className="h-full">
        <div className="text-center mb-4">
          <Skeleton.Avatar size={100} className="mb-4" />
        </div>
        <Skeleton active paragraph={{ rows: 4 }} />
      </Card>
    </Col>
  ));

  return (
    <Row gutter={[16, 16]}>
      {skeletonCards}
    </Row>
  );
};

export default LoadingSkeleton;