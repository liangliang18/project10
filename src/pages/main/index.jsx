import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Outlet } from 'react-router-dom'
export default () => {
    return (
        <div style={{
          width: '100%'
        }}>
          <Header></Header>
            <Outlet></Outlet>
          <Footer></Footer>
      </div>
    )
}