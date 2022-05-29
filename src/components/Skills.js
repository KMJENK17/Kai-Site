import React, { Component } from 'react'
import '../CSS/skills.css'
import JavascriptIcon from '../CSS/icons/javascript-icon.png'
import PythonIcon from '../CSS/icons/python-icon.png'
import HTMLIcon from '../CSS/icons/html-icon.png'
import CSSIcon from '../CSS/icons/css-icon.png'
import ReactIcon from '../CSS/icons/react-icon.png'
import NodejsIcon from '../CSS/icons/nodejs-icon.png'
import DjangoIcon from '../CSS/icons/django-icon.png'
import BootstrapIcon from '../CSS/icons/bootstrap-icon.png'
import VueIcon from '../CSS/icons/vue-icon.png'
import MustacheIcon from '../CSS/icons/mustache-icon.png'
import PrismaIcon from '../CSS/icons/prisma-icon.png'
import PostgreslSQLIcon from '../CSS/icons/postgresql-icon.png'
import SQLIcon from '../CSS/icons/sql-icon.png'
import AWSIcon from '../CSS/icons/aws-icon.png'
import MongoDBIcon from '../CSS/icons/mongodb-icon.png'
import GitIcon from '../CSS/icons/git-icon.png'
import GithubIcon from '../CSS/icons/github-icon.png'
import HerokuIcon from '../CSS/icons/heroku-icon.png'
import NetlifyIcon from '../CSS/icons/netlify-icon.png'
import PostmanIcon from '../CSS/icons/postman-icon.png'
import TerminalIcon from '../CSS/icons/terminal-icon.png'
import ExpressIcon from '../CSS/icons/express-icon.png'

export default class Skills extends Component {
    render() {
        return (
            <div className="skillsContainer">
                <h1 className="skillsTitle">SKILLS</h1>
                <ul class="skillsList">
                    <b className="languageTitle">Languages:</b>
                    <li>Javascript<img src={JavascriptIcon} alt=""></img></li>
                    <li>Python<img src={PythonIcon} alt=""></img></li>
                    <li>HTML<img src={HTMLIcon} alt=''></img></li>
                    <li>CSS<img src={CSSIcon} alt=''></img></li>
                    <b className="frameworkTitle">Frameworks:</b>
                    <li>React <img src={ReactIcon} alt=""></img></li>
                    <li>Node <img src={NodejsIcon} alt=""></img></li>
                    <li>Django <img src={DjangoIcon} alt=""></img></li>
                    <li>Express <img src={ExpressIcon} alt=""></img></li>
                    <li>Bootstrap <img src={BootstrapIcon} alt=""></img></li>
                    <li>Vue <img src={VueIcon} alt=""></img></li>
                    <li>Mustache <img src={MustacheIcon} alt=""></img></li>
                    <li>Prisma <img src={PrismaIcon} alt=""></img></li>
                    <b className="databaseTitle">Databases:</b>
                    <li>PostgresSQL <img src={PostgreslSQLIcon} alt=""></img></li>
                    <li>SQL <img src={SQLIcon} alt=""></img></li>
                    <li>AWS <img src={AWSIcon} alt=""></img></li>
                    <li>MongoDB <img src={MongoDBIcon} alt=""></img></li>
                    <b className="toolsTitle">Tools:</b>
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
