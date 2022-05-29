import React, { Component } from 'react'
import '../CSS/contactme.css';
import KaiPic from '../CSS/website-images/kai-jenkins.jpeg';
import GithubIcon from '../CSS/icons/github-icon.png'
import Linkedinicon from '../CSS/icons/linkedin-icon.png';


export default class Contactme extends Component {
  render() {
    return (
      <div className="contactmeContainer">
        <h1 className="contactmeTitle">CONTACT ME</h1>
        <div class="card">
          <img src={KaiPic} alt="" className="contactImg" />
          <h1>Kai Jenkins</h1>
          <p class="title">Full Stack Web Developer</p>
          <p>Atlanta, GA</p>
          <p>Phone: 404-769-2721</p>
          <p>Email: kaijenkins@me.com</p>
          <div className="contactMeIcons">
            <a href="https://github.com/KMJENK17">
              <img src={GithubIcon} href="https://github.com/KMJENK17" alt=''></img>
            </a>
            <a href="https://www.linkedin.com/in/kai-jenkins/">
              <img src={Linkedinicon} alt=''></img>
            </a>
          </div>


        </div>
      </div>

    )
  }
}
