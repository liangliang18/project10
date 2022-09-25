// 主题内容的头部
import React from 'react';
import PropTypes from 'prop-types';
import './mainStart.scss';
 const MainStart = function(props)  {
    // console.log(props)
    return (
        <div className="main_start">
            <div className="main_start_center">
                <div className="left">
                    <div className="leftTitle">{props.title}</div>
                </div>
                <div className="right">
                    <p>{props.content3 ? props.content2 : '' }</p>
                    <h4>{props.smallTitle ? props.smallTitle : '' }</h4>
                    <p>{props.content1}</p>
                    <p>{props.content2 ? props.content2 : '' }</p>
                </div>
            </div>
        </div>
    )
}
MainStart.propTypes = {
    title: PropTypes.string.isRequired,
    content1: PropTypes.string.isRequired,
    content2: PropTypes.string,
    content3: PropTypes.string,
    smallTitle: PropTypes.string
}
export default MainStart;