import React from 'react';
import logo from '../../assects/logo.jpg'
import './index.scss';
import MainStart from '../../components/mainStart';
const headerText = [
    'Mission statement: “Promoting discourse on global injustices through collaborative campaigns”',
    'How we started as a team: Our original team started as Family Time friends in the Yale Young Global Scholar(YYGS) program. Despite geographical miles, our mutual experience and shared passion for fighting injustice brought us together to form this organization that combats global injustices from local narratives'
]
const footerText = [
    { key: 1, title: 'Outreach', content: 'Responsible for the upkeep of our various social media platforms (initial start: Instagram); responsible for producing graphics to upload to our platforms; responsible for increasing the public’s engagement with our organization (essentially finding people to join our organization and our activities)' },
    { key: 2, title: 'Website manages', content: 'Responsible for developing and setting up our website; responsible for the upkeep of the website (updating the website with advancements in the organization, promoting events, etc…); responsible for sending newsletters via email' },
    { key: 3, title: 'Events', content: 'Responsible for planning our organization’s events (conferences, competitions, fundraisers); responsible for managing the events; responsible for contacting members of specific teams for help (e.g contacting the outreach team to make graphics for a certain event)' },
    { key: 4, title: 'Writers', content: 'Responsible for producing any type of literature needed in the organization: articles, Instagram captions, announcements, newsletters, etc…' },
    { key: 5, title: 'Ambassadors', content: 'Responsible for networking and promoting our organization’s events and activities with their local community or school. They will also be responsible for carrying out tasks within their region (e.g holding a fundraiser at their school when we have an international fundraiser)' }
]


export default () => {
    function getColor(key) {
        let classNameColor = '';
        key === 1 ? classNameColor = '' : key === 2 ? classNameColor = 'title_color2' : key === 3? classNameColor = 'title_color3':
        key === 4 ? classNameColor = 'title_color4' : classNameColor = 'title_color5'
        return classNameColor;
    }
    return (
        <div className="weare">
            <div className="main">
                <MainStart
                    title="Who We Are"
                    smallTitle="About us"
                    content1={headerText[0]}
                    content2={headerText[1]}>
                </MainStart>
                <div className="main_center">
                    <div className="main_centerTwo">
                        <div className="left">Leadership:</div>
                        <div className="right">
                           
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Junming Yang<br /> Co-founder<br /> Development Director<br />Vice-head of Events Team</div>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Kornpaka Suntipong<br/> Co-founder<br/>Head of Outreach </div>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Syan Nguyen<br/>Co-founder<br/> Head of Event</div>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Youmi Ji<br/> Co-founder<br/>Head of Writer’s Team</div>
                                </div>
                            
                            
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Henry Bai<br/> Co-founder<br/>  Human Resources Head Manager<br/> Co-head ofWriter’s Team</div>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Taha Ben Abdelkarim<br/>  Co-founder<br/>  Co-head of Outreach Team</div>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Pranjal Malik<br/> Co-founder<br/>Ambassador Co-Manager<br/> Human ResourceConsultant</div>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Julia Bashuk<br/> Co-founder<br/>Ambassador Manager</div>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                    <div>Alexandra Durt<br/> Co-founder<br/> Head of Website Management Team</div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                <div className="main_end">
                    <div className="main_end_center">
                        <div className="top">Our Teams:</div>
                        <div className="bottom">
                            {
                                footerText.map(item => {
                                    const currentColor = getColor(item.key);
                                    // 渐变色
                                    getColor(item.key)
                                    return (
                                        <div className="teams_item" key={item.key}>
                                            <div className={ `title ${currentColor}`}>{ item.title}</div>
                                            <div className={ `content ${currentColor}`}>{ item.content }</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}