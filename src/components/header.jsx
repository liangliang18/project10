import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from '../assects/logo.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import PubSub from "pubsub-js";
// import { useNavigate } from "react-router-dom";
const urls = [
    { key: 1, content: 'Who We Are', url: '/main/weare' },
    { key: 2, content: 'What We Do', url: '/main/wedo' },
    { key: 3, content: 'Get Involved', url: '/main/getInvolved' },
    { key: 4, content: 'News & Events', url: '/main/news' }
]
export default () => {
    const [isActive, setActive] = useState(1);
    const navigate = useNavigate();
    function active(key) {
        // 函数柯理化
        return function () {
            // console.log(key)
            setActive(key);
            // 保持底部导航栏和顶部导航栏的高亮一致
            //PubSub.publish向外定义方法名 第一个参数是方法名，第二个参数是传递的数据
            PubSub.publish("sendToFooter", key);
        }
    }
      
    useEffect(()=> {
        // 上来加载页面判断isActive
        isActive === 1 && navigate('/main/weare')
        // console.log('执行了')
        // 使用PubSub.subscribe接收数据
        // 第一个参数函数名称 第二个参数就是上面组件传递的参数
       PubSub.subscribe("sendToHeader", (msg, data) => {
        // console.log('组件挂载',  msg, data)
        // 更新自己的isActive选项，达到顶部和底部高亮一致
        setActive(data);
        
      })
      // 只执行一次
    }, [])
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            {
                urls.map(item => {
                    return (
                        <NavLink to={item.url} className="clearDefaultStyle" key={item.key}>
                            <div className={'title' + ' ' + (isActive === item.key? 'active' : '')} onClick={active(item.key)}>{item.content}</div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}