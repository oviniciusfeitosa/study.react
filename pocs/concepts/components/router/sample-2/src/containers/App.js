import React from 'react';

import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';

const App = ({ children }) => (
    <>
        <Header />
        <Content>
            {children}
        </Content>
        <Footer />
    </>
)

export default App