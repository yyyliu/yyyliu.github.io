const meta = {
  homepage: 'http://yangliu.life/',
  email: 'yliu0@uw.edu'
}

const education = [
  {
    name: 'University of Washington',
    degree: 'Ph.D. Computer Science',
    start: 'Jul. 2017',
    end: '',
    location: 'Seattle, WA',
    advisor: 'Jeffrey Heer'
  },
  /* {
     name: 'Carnegie Mellon University',
    degree: 'M.S. Electrical and Computer Engineering',
    start: '2017 Jan',
    end: '2017 May',
    location: 'Pittsburgh, PA',
    gpa: '4.0/4.0',
    desc: 'Completed 12 credits'
  }, */
  {
    name: 'Hong Kong University of Science and Technology',
    degree: 'M.Phil. Computer Science',
    start: 'Sep. 2012',
    end: 'Aug. 2014',
    location: 'Hong Kong',
    gpa: '3.98/4.3',
    thesis: 'large-scale visualization of 3D urban reconstruction',
    advisor: 'Long Quan and Huamin Qu'
  },
  {
    name: 'Hong Kong University of Science and Technology',
    degree: 'B.S. Biochemistry',
    start: 'Sep. 2008',
    location: 'Hong Kong',
    end: 'Jun. 2012',
    gpa: '3.95/4.3',
    desc: 'First Class Honor'
  },
  {
    hide: 'true',
    name: 'University of California, Berkeley',
    degree: 'Study Abroad',
    start: 'Jan. 2011',
    end: 'May. 2011',
    location: 'Berkeley, CA',
    gpa: '4.0/4.0'
  }
]

/**
 * Example:
 * {
    author: 'Yang Liu, Eunice Jun, Qisheng Li, Jeffrey Heer',
    title: 'Latent Space Cartography: Visual Analysis of Vector Space Embeddings',
    venue: 'Computer Graphics Forum (Proc. EuroVis)',
    time: '2019',
    accept_rate: '31',
    status: 'under review'
  }
 */
const papers = [
  {
    author: 'Yang Liu, Alex Kale, Tim Althoff, Jeffrey Heer',
    title: 'Boba: Authoring and Visualizing Multiverse Analyses',
    venue: 'IEEE Transactions on Visualization and Computer Graphics (Proc. VAST)',
    accept_rate: '24',
    time: '2020',
    status: 'to appear'
  },
  {
    author: 'Yang Liu, Tim Althoff, Jeffrey Heer',
    title: 'Paths Explored, Paths Omitted, Paths Obscured: Decision Points & Selective Reporting in End-to-End Data Analysis',
    venue: 'ACM Human Factors in Computing Systems (CHI)',
    accept_rate: '24',
    time: '2020'
  },
  {
    author: 'Yang Liu, Eunice Jun, Qisheng Li, Jeffrey Heer',
    title: 'Latent Space Cartography: Visual Analysis of Vector Space Embeddings',
    venue: 'Computer Graphics Forum (Proc. EuroVis)',
    accept_rate: '31',
    time: '2019'
  },
  {
    author: 'Yang Liu, Jeffrey Heer',
    title: 'Somewhere Over the Rainbow: An Empirical Assessment of Quantitative Colormaps',
    venue: 'ACM Human Factors in Computing Systems (CHI)',
    accept_rate: '26',
    time: '2018'
  },
  {
    author: 'Guodao Sun, Yang Liu, Wenbin Wu, Ronghua Liang, Huamin Qu',
    title: 'Embedding Temporal Display into Maps for Occlusion-Free Visualization of Spatio-temporal Data',
    time: '2014',
    accept_rate: '29',
    venue: 'Pacific Visualization Symposium (PacificVis)'
  }
]

const papers_unrefered = [
  {
    author: 'Yang Liu, Zhicheng Liu, Fan Du, Jeffrey Heer',
    title: 'Mining Design Feedback from Visualization Comments on Social Platforms',
    venue: 'ACM Human Factors in Computing Systems (CHI)',
    time: '2021',
    status: 'under review'
  },
  {
    author: 'Ge Zhang, Mike A. Merrill, Yang Liu, Jeffrey Heer, Tim Althoff',
    title: 'CORAL: COde RepresentAtion Learning with Weakly-Supervised Transformers for Analyzing Data Analysis',
    venue: 'arXiv preprint arXiv:2008.12828',
    time: '2020',
  },
  {
    author: 'Kanit Wongsuphasawat, Yang Liu, Jeffrey Heer',
    title: 'Goals, Process, and Challenges of Exploratory Data Analysis: An Interview Study',
    venue: 'arXiv preprint arXiv:1911.00568',
    time: '2019'
  }
]

/** template:
 {
    title: '',
    start: '',
    end: '',
    location: '',
    role: '',
    desc: []
 }
 */
const work = [
  {
    title: 'Adobe Research, Breakthrough Interactions and Graphics Lab',
    start: 'Apr. 2020',
    end: 'Jul. 2020',
    location: 'Seattle, WA',
    role: 'Research Intern',
    desc: [
      'Worked with Leo Zhicheng Liu and Fan Du on mining visualization critiques.'
    ]
  },
  {
    title: 'Everest Innovation Technology, Altizure.com',
    start: 'Apr. 2015',
    end: 'Dec. 2016',
    location: 'Hong Kong',
    role: 'Full Stack Developer',
    desc: [
      'Designed, prototyped and implemented a web platform from scratch as the very first developers in the team, which grew from 0 to more than 7000 activated users (Node.js, MongoDB, React, WebGL).',
      'Developed a cross-platform web viewer for loading and viewing large-scale 3D reconstruction map of 100km2 in area. The viewer employed level of detail rendering based on a quadtree to maintain interactive framerates across all platforms, as well as various compression methods for fast loading.',
      'Built a desktop viewer on Windows, Mac and Linux for downloading 3D models and viewing offline.'
    ]
  },
  {
    title: 'Microsoft, Office Big Data',
    start: 'Sep. 2014',
    end: 'Apr. 2015',
    location: 'Beijing, China',
    role: 'Software Development Engineer (SDE)',
    desc: [
      'Developed a cooking pipeline to process large volumes of SharePoint server log (PB per log per day) and provided clean, valid data through data API for data analysis teams.',
      'Implemented active monitoring to automatically check scheduled job running time and ensure data quality in the above cooking pipeline, in order to meet the SLA level of 99.9%.',
      'Maintained more than 100 daily jobs in Office data pipelines and provided support on data issues.'
    ]
  }
]

/** template:
 {
    name: '',
    time: '',
    location: '',
    desc: ''
 }
 */
const service = [
  {
    name: 'External Reviewer',
    time: '2019 - 2020',
    desc: ['The ACM Conference on Human Factors in Computing Systems (CHI), 2020-2021', 
      'IEEE Transactions on Visualization & Computer Graphics (TVCG), 2021',
      'The IEEE Information Visualization (InfoVis) Conference, 2020',
      'The IEEE Conference on Visual Analytics Science and Technology (VAST), 2020',
      'The ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW), 2020']
  },
  {
    name: 'Mentoring',
    time: '2020',
    location: 'Boba Project',
    desc: ['Jiarong Zhang, BS Computer Science & Engineering \'16',
      'Shiven Bhatt, BS Computer Science & Engineering \'19']
  },
  {
    name: 'CSE Mentoring Program',
    time: '2019 - 2020',
    // location: 'University of Washington',
    desc: ['Organized escape rooms, ice cream outings, and virtual dinners for my first year mentees.']
  },
  {
    name: 'Graduate Admission Committee',
    time: '2018, 2019',
    // location: 'University of Washington',
    desc: ['Reviewed 63 applications to the Ph.D. program of UW CSE.']
  },
  {
    name: 'Co-Organizer: Interactive Systems Seminar',
    time: '2018 - 2019',
    // location: 'University of Washington',
    desc: ['Co-organized a weekly seminar for reading and discussing HCI papers.']
  }
]

/**
 * Template
 {
    name: '',
    desc: '',
    time: ''
  }
 */
const awards = [
  {
    name: 'Postgraduate Studentship',
    desc: 'HKUST',
    time: '2013 - 2014'
  },
  {
    name: 'Academic Achievement Medal',
    desc: 'Top 1% undergraduates in HKUST',
    time: '2012'
  },
  {
    name: 'University Scholarship, School of Science Scholarship, D H Chen Foundation Scholarship',
    desc: 'HKUST',
    time: '2008 - 2012'
  },
  {
    name: 'Gold Medal',
    desc: 'International Genetically Engineered Machine Competition (iGEM)',
    time: '2010'
  },
  {
    name: 'Silver Medal',
    desc: ' International Genetically Engineered Machine Competition (iGEM)',
    time: '2009'
  }
]

/**
 * Template
 {
   course: '',
   time: '',
   university: '',
   desc: ''
 }
 */
const teaching = [
  {
    course: 'CSE 442: Data Visualization',
    time: '2020',
    university: 'UW',
    desc: 'Teaching Assistant'
  },
  {
    course: 'CSE 512: Data Visualization',
    time: '2019',
    university: 'UW',
    desc: 'Teaching Assistant'
  },
  {
    course: 'COMP 5421: Computer Vision',
    time: '2013',
    university: 'HKUST',
    desc: 'Teaching Assistant for Prof. Chi Keung Tang'
  },
  {
    course: 'COMP 2012: Object-Oriented Programming and Data Structure',
    time: '2013',
    university: 'HKUST',
    desc: 'Teaching Assistant'
  }
]

export {meta, education, papers, work, awards, teaching, service, papers_unrefered}
