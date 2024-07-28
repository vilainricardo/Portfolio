import React from 'react';
import { Flex, Layout } from 'antd';
import SiderPortifolio from './components/main/SiderPortifolio';
import HeaderPortfolio from './components/main/HeaderPortifolio';
import FooterPortfolio from './components/main/FooterPortifolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import GameProjetcsMain from './components/gameProjetcsMain.tsx/GameProjetcsMain';
import Education from './components/about/education/Education';

const { Content } = Layout;

const layoutStyle = {
  borderRadius: 0,
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
};

const App: React.FC = () => (
  <>
    <Router>
      <Layout style={layoutStyle}>
        <SiderPortifolio />
        <Layout>
          <HeaderPortfolio />
          <Content style={{overflowY:"auto"}}>
            <Routes>
              <Route path="/" element={<About />} /> {/* Default route */}
              <Route path="/about" element={<About />} />
              <Route path="/about/education" element={<Education />} />
              <Route path="/GameProjectsMain" element={<GameProjetcsMain />} />

            </Routes>
          </Content>
          <FooterPortfolio />
        </Layout>
      </Layout>
    </Router>
  </>
);

export default App;