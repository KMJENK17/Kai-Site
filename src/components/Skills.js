import React, { Component } from 'react'
import '../CSS/skills.css'
import JavascriptIcon from '../CSS/images/javascript-icon.png'
import PythonIcon from '../CSS/images/python-icon.png'
import HTMLIcon from '../CSS/images/html-icon.png'
import CSSIcon from '../CSS/images/css-icon.png'
import ReactIcon from '../CSS/images/react-icon.png'
import NodejsIcon from '../CSS/images/nodejs-icon.png'
import DjangoIcon from '../CSS/images/django-icon.png'
import BootstrapIcon from '../CSS/images/bootstrap-icon.png'
import VueIcon from '../CSS/images/vue-icon.png'
import MustacheIcon from '../CSS/images/mustache-icon.png'
import PrismaIcon from '../CSS/images/prisma-icon.png'
import PostgreslSQLIcon from '../CSS/images/postgresql-icon.png'
import SQLIcon from '../CSS/images/sql-icon.png'
import AWSIcon from '../CSS/images/aws-icon.png'
import MongoDBIcon from '../CSS/images/mongodb-icon.png'
import GitIcon from '../CSS/images/git-icon.png'
import GithubIcon from '../CSS/images/github-icon.png'
import HerokuIcon from '../CSS/images/heroku-icon.png'
import NetlifyIcon from '../CSS/images/netlify-icon.png'
import PostmanIcon from '../CSS/images/postman-icon.png'
import TerminalIcon from '../CSS/images/terminal-icon.png'
import ExpressIcon from '../CSS/images/express-icon.png'

export default class Skills extends Component {
    render() {
        return (
            <div className="skillsContainer">
                <ul class="skillsList">
                    <h1 className="languageTitle">Languages</h1>
                    <li>Javascript<img src={JavascriptIcon} alt=""></img></li>
                    <li>Python<img src={PythonIcon} alt=""></img></li>
                    <li>HTML<img src={HTMLIcon} alt=''></img></li>
                    <li>CSS<img src={CSSIcon} alt=''></img></li>
                    <h1 className="frameworkTitle">Frameworks</h1>
                    <li>React <img src={ReactIcon} alt=""></img></li>
                    <li>Node <img src={NodejsIcon} alt=""></img></li>
                    <li>Django <img src={DjangoIcon} alt=""></img></li>
                    <li>Express <img src={ExpressIcon} alt=""></img></li>
                    <li>Bootstrap <img src={BootstrapIcon} alt=""></img></li>
                    <li>Vue <img src={VueIcon} alt=""></img></li>
                    <li>Mustache <img src={MustacheIcon} alt=""></img></li>
                    <li>Prisma <img src={PrismaIcon} alt=""></img></li>
                    <h1 className="databaseTitle">Databases</h1>
                    <li>PostgresSQL <img src={PostgreslSQLIcon} alt=""></img></li>
                    <li>SQL <img src={SQLIcon} alt=""></img></li>
                    <li>AWS <img src={AWSIcon} alt=""></img></li>
                    <li>MongoDB <img src={MongoDBIcon} alt=""></img></li>
                    <h1 className="toolsTitle">Tools</h1>
                    <li>Git <img src={GitIcon} alt=""></img></li>
                    <li>Github <img src={GithubIcon} alt=""></img></li>
                    <li>Heroku <img src={HerokuIcon} alt=""></img></li>
                    <li>Netlify <img src={NetlifyIcon} alt=""></img></li>
                    <li>Postman <img src={PostmanIcon} alt=""></img></li>
                    <li>Terminal <img src={TerminalIcon} alt=""></img></li>
                </ul>
            </div>
        )
    }
}
