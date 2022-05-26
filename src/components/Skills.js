import React, { Component } from 'react'
import '../CSS/skills.css'

export default class Skills extends Component {
    render() {
        return (
            <div className="skillsContainer">
                <ul class="skillsList">
                    <h1 className="languageTitle">Languages</h1>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <h1 className="frameworkTitle">Frameworks</h1>
                    <li>React</li>
                    <li>Node</li>
                    <li>Django</li>
                    <li>Express</li>
                    <li>Bootstrap</li>
                    <li>Vue</li>
                    <li>Mustache</li>
                    <li>Prisma</li>
                    <h1 className="databaseTitle">Databases</h1>
                    <li>PostgresSQL</li>
                    <li>SQL</li>
                    <li>AWS</li>
                    <li>MongoDB</li>
                    <h1 className="toolsTitle">Tools</h1>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Heroku</li>
                    <li>Netlify</li>
                    <li>Postman</li>
                    <li>Terminal</li>
                </ul>
            </div>
        )
    }
}
