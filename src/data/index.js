import { ClojureVideo, GraphQLVideo } from '../media';
import {
  jamaLogo,
  littleBirdLogo,
  renewLogo,
  skywardLogo,
  violinPhoto,
} from '../images';

const routes = [
  {
    link: '/work',
    title: 'Work',
  }, {
    link: '/music',
    title: 'Music',
  }, {
    link: '/talks',
    title: 'Tech Talks',
  }, {
    link: '/writing',
    title: 'Writing',
  },
];

const socialLinks = [
  {
    url: 'http://github.com/akuttruff',
    iconClass: 'fa fa-github',
  }, {
    url: 'http://twitter.com/amiekuttruff',
    iconClass: 'fa fa-twitter',
  }, {
    url: 'https://www.linkedin.com/in/amiekuttruff/',
    iconClass: 'fa fa-linkedin-square',
  },
];

const educationDetails = [
  {
    schoolLink: 'http://www.tufts.edu',
    school: 'Tufts University',
    subject: '— B.A. International Letters and Visual Studies (2009)',
  }, {
    schoolLink: 'http://www.uni-tuebingen.de',
    school: 'Universität Tübingen',
    subject: '— German Studies (2005)',
  },
];

const musicDetails = {
  title: 'Music',
  description: 'Classical violinist available for orchestra or chamber ensemble work',
  email: 'mailto:amie.kuttruff@gmail.com',
  emailLabel: 'Email',
  img: violinPhoto,
};

const talkDetails = [
  {
    title: 'DEEPEN AND DIVERSIFY THE CLOJURE COMMUNITY WITH JUNIOR ENGINEERS',
    talkSrc: 'http://2016.clojurewest.org/speakers#akuttruff',
    location: '(Clojure/West 2016, Seattle WA)',
    summaryId: 'clojure-summary',
    summary: 'The simplicity of the Clojure language and the supportive, collaborative spirit of its community played a pivotal role in my success as a junior engineer. I felt frustrated with cryptic \'method_missing\' stack traces in my first years of programming, and Clojure reshaped the way I saw code and data. This talk examines elements of the language that help and hinder newcomers, ways in which teams can better support junior developers, and how companies can create value by investing in upcoming talent.',
    talkComponent: ClojureVideo(),
  }, {
    title: 'SCHEMA-DRIVEN DEVELOPMENT WITH GRAPH-QL AND REACT-APOLLO',
    talkSrc: 'https://renewfinancial.com/government',
    location: '(Renew Financial 2018, Portland OR)',
    summaryId: 'graphql-summary',
    summary: 'GraphQL is a query language and server-side runtime for processing queries and mutations of data. It\'s language-agnostic, and allows you to define your own type system. With GraphQL, the shape of your query matches the shape of your response data, without the over- or under-fetching of data that you get with REST APIs. Combined with Apollo-React, GraphQL is a breath of fresh air for the full-stack development landscape.',
    talkComponent: GraphQLVideo(),
  },
];

const workDetails = [
  {
    img: skywardLogo,
    alt: 'Skyward logo',
    companyUrl: 'https://skyward.io/enterprise-solutions/',
    company: 'SKYWARD',
    timeRange: '(July 2018 - present)',
    title: 'Senior Front End Engineer',
    descriptionItems: [
      'Designs, develops, and implements new capabilities for the Skyward Cloud Platform while safely deprecating and removing our legacy AngularJS framework',
      'Architects new features in React and Redux, with a passion for sane state management and ease of testability',
      'Works closely with UX specialists to build intuitive, simple, and elegant user interfaces',
      'Fosters collaborative Agile practices to help our teams develop quality software in the innovative industry of enterprise drone flight',
    ],
  }, {
    img: renewLogo,
    alt: 'Renew Financial logo',
    companyUrl: 'https://renewfinancial.com/',
    company: 'RENEW FINANCIAL',
    timeRange: '(October 2017 - June 2018)',
    title: 'Software Engineer II',
    descriptionItems: [
      'Built user interfaces that make renewable energy and energy-efficiency improvements accessible to homeowners',
      'Wrote clean, testable, modern JavaScript with React.js + Redux within a legacy AngularJS codebase',
      'Ensured quality software by writing behavior-driven unit tests with Jasmine, Karma, and Enzyme',
      'Maintained a modern JavaScript ecosystem with tools like Webpack, Babel, ESLint, and Gulp',
      'Enthusiastically supported group and pair programming to promote open communication within an agile product development environment',
    ],
  }, {
    img: jamaLogo,
    alt: 'Jama Software logo',
    companyUrl: 'http://www.jamasoftware.com',
    company: 'JAMA SOFTWARE',
    timeRange: '(February 2016 - October 2017)',
    title: 'Software Engineer, Mid-Level',
    descriptionItems: [
      'Worked with UX and Product teams to implement market-differentiating features for requirements management software',
      'Refactored and improved a Java and EXT.js legacy codebase using React.js, Fluxxor, and Redux',
      'Developed code using test- and behavior-driven techniques with Jasmine, Karma, JUnit, and Enzyme',
      'Contributed to the development of an autoscaled Java microservice using AWS ECS',
    ],
  }, {
    img: littleBirdLogo,
    companyUrl: 'http://getlittlebird.com',
    alt: 'Little Bird logo',
    company: 'LITTLE BIRD',
    timeRange: '(January 2014 - December 2015)',
    title: 'Software Engineer',
    descriptionItems: [
      'Worked with Ruby, Clojure, ClojureScript, React.js, HTML/CSS, JavaScript, MongoDB, PostgreSQL',
      'Developed front- and back-end application features for network graph analysis software',
      'Scripted browser testing automation for QA',
      'Created data visualizations using D3 and Gephi',
      'Managed branched projects with Git in an agile environment',
    ],
  },
];

export {
  routes,
  socialLinks,
  educationDetails,
  musicDetails,
  talkDetails,
  workDetails,
};
