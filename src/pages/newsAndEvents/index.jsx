import React from 'react';
import MainStart from '../../components/mainStart';
import { DownOutlined } from '@ant-design/icons';
import './index.scss'
import { useState, useEffect } from 'react';
const headerText = {
    smallTitle: "events and past outputs.",
    content3: "News from the organization: This is an archive where you can view our recent",
    content1: "E-magazines and other outputs can be placed here",
    content2: "Updates about upcoming fundraising events and conferences can be placed here."
}
const bodyText = [
    { key: 1 },
    { key: 2 },
    { key: 3 }
]
export default () => {
    return (
        <div className="news">
            <div className="main">
                <MainStart
                    title="News & Events"
                    content1={headerText.content1}
                    content2={headerText.content2}
                    content3={headerText.content3}
                    smallTitle={headerText.smallTitle}>
                </MainStart>
                <div className="main_content">
                    <div className="content_top">
                        <div className = 'ctitle'>E-Magazines</div>
                        <div className="content_expend">
                            {
                                bodyText.map(item => {
                                    return (
                                        <div className="content_expend_item" key={item.key}>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <DownOutlined style={{ fontSize: '78px' }}/>
                    </div>
                    <div className="content_bottom">
                        <div className = 'ctitle'>Upcoming Events and Fundraisers</div>
                        <div className="footer_item">
                           <div> Upcoming Events:<br/>
                            Global Leaders for Equality:</div>
                           <div>
                           Timeline<br/>
                            i. October 23rd - Competition announcement<br/>
                            ii. November 3rd - Prompt announcement<br/>
                            iii. November 6th - Conference<br/>
                            iv. November 13th - writeup deadline<br/>
                            v. November 20th - finalists announced<br/>
                            vi. November 26th - Final round Pitch + award ceremony
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}