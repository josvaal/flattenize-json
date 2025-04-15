import { Component, ReactNode } from "react";
import { Row, Col } from "antd";

interface ResponsiveGridProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

class ResponsiveGrid extends Component<ResponsiveGridProps> {
  render() {
    const { leftComponent, rightComponent } = this.props;

    return (
      <Row gutter={[32, 32]} style={{ margin: "0.5rem" }}>
        <Col xs={24} md={12}>
          {leftComponent}
        </Col>
        <Col xs={24} md={12}>
          {rightComponent}
        </Col>
      </Row>
    );
  }
}

export default ResponsiveGrid;

