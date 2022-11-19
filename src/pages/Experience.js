import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import '../App.css';

function Experience() {
  return (
    <div className='experience'>
      
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date="2010-2012"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>DAV Public School</h3>
          <p>Science and Computers</p>
          <p>Percentage - 90.2%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date="2012-2016"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>National Institute of Technology, Jamshedpur</h3>
          <p>Bachelor of Technology, Mechanical Engineering</p>
          <p>CGPA - 8.98</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date="01/2017-01/2020"
        iconStyle={{background: "#e9d35b", color: "#fff"}}
        icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-title'>Freelance Developer, AXE TECH</h3>
          <h4>New Delhi</h4>
          <p>Digital Business Transformation for clients. Responsible for creating websites and inventory databases.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date="03/2020-03/2022"
        iconStyle={{background: "#e9d35b", color: "#fff"}}
        icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-title'>Java Developer, Publicis Sapient</h3>
          <h4>Bangalore, KA</h4>
          <p>Worked as Backend Engineer, creating databases, Restful Webservices and YAML documentation for the project - IBM Inventory Visibility.</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date="03/2022 to current"
        iconStyle={{background: "#e9d35b", color: "#fff"}}
        icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-title'>Software Engineer - Backend, OLX Autos</h3>
          <h4>Gurugram, HR</h4>
          <p>Founding member of the payments team. Integrated multiple Payment Service Providers viz. Adyen, PayU, Razorpay with OLX Autos.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience