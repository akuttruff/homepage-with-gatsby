import React from "react"
import Layout from '../components/layout';
import EducationDetails from '../components/resume/education-details';
import WorkDetailList from '../components/resume/work-detail-list';
import Sidebar from '../components/sidebar';
import { educationDetails, workDetails } from '../data';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="content">
      <div className="resume">
        <WorkDetailList workDetails={workDetails} />
        <EducationDetails educationDetails={educationDetails} />
      </div>
    </div>
  </Layout>
);

export default IndexPage
