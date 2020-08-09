import React from "react"
import EducationDetails from '../components/resume/education-details';
import WorkDetailList from '../components/resume/work-detail-list';
import Sidebar from '../components/sidebar';
import { educationDetails, workDetails } from '../data';

const IndexPage = () => (
  <div>
    <Sidebar />
    <div className="content">
      <div className="resume">
        <WorkDetailList workDetails={workDetails} />
        <EducationDetails educationDetails={educationDetails} />
      </div>
    </div>
  </div>
);

export default IndexPage
