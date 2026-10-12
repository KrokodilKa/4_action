import { Layout, Row, Col } from 'antd';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import LinksSection from './components/LinksSection';
import TableSection from './components/TableSection';
import FormSection from './components/FormSection';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fff7f9' }}>
      <SiteHeader />
      <Content>
        <Row justify="center">
          <Col xs={24} sm={24} md={22} lg={20} xl={18}>
            <div className="sections-stack">
              <div className="order-links">
                <LinksSection />
              </div>
              <div className="order-table">
                <TableSection />
              </div>
              <div className="order-form">
                <FormSection />
              </div>
            </div>
          </Col>
        </Row>
      </Content>
      <SiteFooter />
    </Layout>
  );
}

export default App;