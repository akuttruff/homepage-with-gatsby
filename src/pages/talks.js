import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import TalkList from '../components/tech-talks/talk-list';
import { talkDetails } from '../data/index';

const TechTalks = () => (
  <Layout>
    <Sidebar />
    <div className="content">
      <div className="resume">
        <h1 className="resume-subhead">Talks</h1>
        <TalkList talkDetails={talkDetails} />
      </div>
    </div>
  </Layout>
);

export default TechTalks;
