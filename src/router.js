import react from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import WeAre from "./pages/weAre"
import WeDo from "./pages/weDo"
import Main from './pages/main'
import GetInvolved from './pages/getInvolved'
import NewsAndEvents from './pages/newsAndEvents'
// 路由文件
export default () => {
    return (
        <Routes>
          <Route path='/' element={<Navigate to="/main/weare"/>}></Route>
          <Route path="/main" element={<Main/>}>
             <Route path="/main/weare" element={<WeAre/>}></Route> 
             <Route path="/main/wedo" element={<WeDo/>}></Route>
             <Route path="/main/getInvolved" element={<GetInvolved/>}></Route>
             <Route path="/main/news" element={<NewsAndEvents/>}></Route>
          </Route>
          
        </Routes>
    )
}