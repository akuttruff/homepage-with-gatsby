import React from 'react';
import Layout from '../components/layout';
import WorkDetailList from './../components/resume/work-detail-list';
import Sidebar from '../components/sidebar';
import EducationDetails from '../components/resume/education-details';
import { educationDetails, workDetails } from './../data/index';

const Work = () => (
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

export default Work;
