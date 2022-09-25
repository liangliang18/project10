import React from 'react';
import MainStart from '../../components/mainStart';
import './index.scss';
const headerText = 'Millions, if not billions, suffer from inequalities. To tackle a challenge so profound, more must work together to support a more diverse and inclusive society. As an international society, we would love to hear from you!';
const bodyText = [
    { title: 'Partner Collaborations:  (decide later)', content: 'Project 10 society is looking forwardto offeringhelp and working withorganizations with similar visions and social responsibility. We believe inthe power of collective action. Please contact us through the followingemail address (...) or our social media pages(...)'},
    { title: 'Join the society:', content: 'If you share the same vision as our organization andare interested inmaking a difference in any aspect of global inequality, please check outthe following link to join the society!', a: 'https://docs.google.com/forms/d/e/1FAIpQLSch5nAcxYxJ6lurLHhoGybE_bR_sZYW3BlpW_Krdb1Y7HRQ1A/viewform?usp=sf_link'},
    { title: 'Donation:', content: 'Every dollar donated to our society will be dedicated to reducing inequalities in people’s lives.', content1: 'Donation will be open soon'},
    { title: '', content: ''}
]
export default () => {
    return (
        <div className="getInvolved">
            <div className="main">
                <MainStart title="Get Involved" content1={headerText}></MainStart>
                <div className="main_content">
                   {
                    bodyText.map(item => {
                        console.log(item.a && item.a)
                        return (
                            <div key={item.title} className="content_item">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <p>{ item.content1 ? item.content1 : '' }</p>
                                { item.a && <a href={item.a ? item.a  : ''}>https://docs.google.com/forms/d/e......</a>}
                            </div>
                        )
                    })
                   }
                </div>
            </div>
        </div>
    )
}