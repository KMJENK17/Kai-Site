import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../CSS/resume.css';

function Resume() {
    return (
        <div className="ResumeContainer">
            <h1 className="resumeTitle">RESUME</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2b6777', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2b6777' }}
                    date="July 2021 - October 2021"
                    iconStyle={{ background: '#2b6777', color: '#000000' }}
                >
                    <h3 className="vertical-timeline-element-title">Digitalcrafts</h3>
                    <h4 className="vertical-timeline-element-subtitle">Full Stack Web Developer | Atlanta, GA </h4>
                    <p>
                        Using Front-End and Back-End technologies to complete projects in a timely manner
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ffffff', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
                    date="July 2021 - October 2021"
                    iconStyle={{ background: '#2b6777', color: '#2b6777' }}
                >
                    <h3 className="vertical-timeline-element-title">Digitalcrafts</h3>
                    <h4 className="vertical-timeline-element-subtitle">Full-Stack Web Developer Certification | Atlanta, GA</h4>
                    <p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2b6777', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2b6777' }}
                    date="September 2019 - July 2021"
                    iconStyle={{ background: '#2b6777', color: '#000000' }}
                >
                    <h3 className="vertical-timeline-element-title">Best Buy</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sales Advisor | Cumming, GA </h4>
                    <p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="August 2019 - Expected 2023"
                    iconStyle={{ background: '#2b6777', color: '#000000' }}
                >
                    <h3 className="vertical-timeline-element-title">University of North Georgia</h3>
                    <h4 className="vertical-timeline-element-subtitle">Computer Science | Dahlonega, GA </h4>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    );
}

export default Resume;
