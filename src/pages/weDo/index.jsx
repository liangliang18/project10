import React from 'react';
import './index.scss'
import MainStart from '../../components/mainStart'
// 静态内容
const headerText = 'Our team work to spread awareness about global injustice issues in a local scope through E-magazines and inter-school competitions. We also aim to pass on resolutions for inequalities to government officials through conferences and fundraisers that interact with local communities';
const bodyText = [
    { title: 'Board members (us)', content: 'Oversees entire organisation; responsible for brainstorming organisation’s advancements and further developments; manages team members to ensure productivity' },
    { title: 'Team members', content: 'Recruited from general population of students; responsible for work in their respective teams; will need to pass an application form and interview process (formal)' },
    { title: 'Society members', content: 'The general population that joins out of their passionfor reducing inequality;no applicationneeded; they’ll be added into a group chat/discord that allows them to keep up with events inthe organization and join as they like' }
]
const footerText = [
    {
        title: 'Conferences', content: "-	A specific area of inequality will be set" + "as a theme for each conference; each participant will act as a representative of their own country" + "(according to their nationality or place that they live in: either will suffice); discussions will be based on sharing perspectives"
            + "and narratives regarding the inequality in each country; the main goal is to reach a solution/ propose one to help reduce the inequality  in certain" +
            "countries and – if possible – every country.Mini-conferences: People from around the world share their views on inequality issues (sustainability, human rights, opportunities, etc.)"
    },
    { title: "Literature", content: "-	Every month (or two months, depending on external workload), an area of inequality will be announced and writers will share their narrative on the topic (opinions, personal stories, how they’ve faced that inequality in their country; what that inequality is like in their country, etc…); articles will be shared on our Instagram in the form of graphics or made into an E-magazine to promote discourse on the subject." },
    { title: 'Inter-school Competitions', content: "-	Ambassadors from each school will promote certain competitions (hackathons, debates, speech competitions, academic (knowledge-based) competitions) we host to their schoolmates; teams from each school will compete with teams in other schools in competitions; total results of competitions will be added up, creating a ranking of schools to promote competition and enthusiasm; competitions will also help students encounter diverse perspectives and people from across the globe" },
    { title: "Fundraisers", content: "-	Ambassadors from each school will work with other people in their region/school to host local fundraisers; proceeds from all schools will be pooled and sent to a specific charity (one that relates to the month’s inequality)" }
]
export default () => {
    return (
        <div className="wedo">
            <div className="main">
                <MainStart title='Who We Do' content1={headerText}></MainStart>
                <div className="main_centerOrFooter">
                    <div className="main_Two">
                        <div className="mtitle">How do we work</div>
                        {
                            bodyText.map(item => {
                                return (
                                    <div key={item.title} className="item">
                                        <div>{item.title}</div>
                                        <p> {item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="main_centerOrFooter footer">
                    <div className="main_Two footer_center">
                        <div className="mtitle">Our services in detail:</div>
                        {
                            footerText.map(item => {
                                return (
                                    <div key={item.title} className="item">
                                        <div>{item.title}</div>
                                        <p> {item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}