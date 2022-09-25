import React, {useState, useEffect} from 'react';
import './footer.scss';
// import bg from '../assects/geometry_@2X.png'
import { TwitterOutlined, PhoneOutlined, ContactsOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import PubSub from "pubsub-js";
const urls = [
    { key: 1, content: 'Who We Are', url: '/main/weare' },
    { key: 2, content: 'What We Do', url: '/main/wedo' },
    { key: 3, content: 'Get Involved', url: '/main/getInvolved' },
    { key: 4, content: 'News & Events', url: '/main/news' }
]
export default () => {
    const [isActive, setActive] = useState(1)
    function active(key) {
        // 函数柯理化
        return function () {
            setActive(key);
            PubSub.publish("sendToHeader", key);
        }
    }
    
    useEffect(()=> {
        console.log('执行了')
        // 使用PubSub.subscribe接收数据
        // 第一个参数函数名称 第二个参数就是上面组件传递的参数
       PubSub.subscribe("sendToFooter", (msg, data) => {
        // console.log('组件挂载',  msg, data)
        // 更新自己的isActive选项，达到顶部和底部高亮一致
        setActive(data)
      })
    })
    return (
        <div className="footer">
            {/* 固定定位 */}
            <div className="cover">
            </div>
            <div className='color'>
                {/* <img src={bg} alt='背景'></img> */}
                _________________________________________
                your email address
                __________________________________________________________________________________
            </div>
            <div className="centent">
                <div className="title">
                {
                    urls.map(item => {
                        return (
                            <NavLink to={item.url} className="clearDefaultStyle" key ={ item.key }>
                                <span className={isActive === item.key? 'active' : ''} onClick={active(item.key)}>{item.content}</span>
                            </NavLink>
                        )
                    })
                }
                </div>
                <span>--------------------------------------------------------</span>
                <div><PhoneOutlined style={{ fontSize: '30px', color: 'black' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telephone................</div>
                <div> <TwitterOutlined style={{ fontSize: '30px', color: 'black' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email...............</div>
                <div><ContactsOutlined style={{ fontSize: '30px', color: 'black' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram.................</div>
            </div>
        </div>
    )

}