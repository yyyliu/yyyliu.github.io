const meta = {
  homepage: 'http://yangliu.life/',
  email: 'yliu0@uw.edu'
}

const education = [
  {
    name: 'University of Washington',
    degree: 'Ph.D. Computer Science',
    start: '2017 July 10',
    end: '',
    location: 'Seattle, WA',
    advisor: 'Jeffrey Heer'
  },
  {
    name: 'Carnegie Mellon University',
    degree: 'M.S. Electrical and Computer Engineering',
    start: '2017 Jan',
    end: '2017 May',
    location: 'Pittsburgh, PA',
    gpa: '4.0/4.0',
    desc: 'Completed 12 credits'
  },
  {
    name: 'Hong Kong University of Science and Technology',
    degree: 'M.Phil. Computer Science',
    start: '2012 Sep 1',
    end: '2014 Aug 31',
    location: 'Hong Kong',
    gpa: '3.98/4.3',
    thesis: 'Large-scale visualization of 3D urban reconstruction',
    advisor: 'Long Quan and Huamin Qu'
  },
  {
    name: 'Hong Kong University of Science and Technology',
    degree: 'B.S. Biochemistry',
    start: '2008 Sep 1',
    location: 'Hong Kong',
    end: '2012 Jun',
    gpa: '3.95/4.3',
    desc: 'First Class Honor'
  },
  {
    hide: 'true',
    name: 'University of California, Berkeley',
    degree: 'Study Abroad',
    start: '2011 Jan',
    end: '2011 May',
    location: 'Berkeley, CA',
    gpa: '4.0/4.0'
  }
]

const papers = [
  {
    author: 'Yang Liu, Eunice Jun, Qisheng Li, Jeffrey Heer',
    title: 'Latent Space Cartography: Visual Analysis of Vector Space Embeddings',
    venue: 'Computer Graphics Forum (Proc. EuroVis)',
    time: '2019',
    status: 'in submission'
  },
  {
    author: 'Kanit Wongsuphasawat, Yang Liu, Jeffrey Heer',
    title: 'Goals, Process, and Challenges of Exploratory Data Analysis: An Interview Study',
    venue: 'Computer Graphics Forum (Proc. EuroVis)',
    time: '2019',
    status: 'in submission'
  },
  {
    author: 'Yang Liu, Jeffrey Heer',
    title: 'Somewhere Over the Rainbow: An Empirical Assessment of Quantitative Colormaps',
    venue: 'ACM Human Factors in Computing Systems (CHI)',
    time: '2018'
  },
  {
    author: 'Guodao Sun, Yang Liu, Wenbin Wu, Ronghua Liang, Huamin Qu',
    title: 'Embedding Temporal Display into Maps for Occlusion-Free Visualization of Spatio-temporal Data',
    time: '2014',
    venue: 'Pacific Visualization Symposium (PacificVis)'
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
    title: 'Everest Innovation Technology, Altizure.com',
    start: '2015 Apr 20',
    end: '2016 Dec 1',
    location: 'Hong Kong',
    role: 'Full Stack Developer',
    desc: [
      'Designed, prototyped and implemented a web platform from scratch as the very first developers in the team, which now grew from 0 to more than 7000 activated users (Node.js, MongoDB, React, WebGL).',
      'Developed a cross-platform web viewer for loading and viewing large-scale 3D reconstruction map  of 100km2 in area, which employed Level of detail rendering based on a quadtree to maintain interactive framerates across all platforms, as well as various compression methods for fast loading.',
      'Built a desktop viewer on Windows, Mac and Linux for downloading 3D models and viewing offline.',
      'Involved in building a distributed system running reconstruction jobs in parallel on an in-house cluster.'
    ]
  },
  {
    title: 'Microsoft Corporation, Office Big Data',
    start: '2014 Sep 15',
    end: '2015 Apr 10',
    location: 'Beijing, China',
    role: 'Software Development Engineer (SDE)',
    desc: [
      'Developed a cooking pipeline to process huge volumes of SharePoint server log (PB per log per day) on MapReduce clusters and provided clean, valid data through data API for internal teams to do analytics.',
      'Implemented active monitoring to automatically check scheduled job running time and ensure data quality in the above cooking pipeline, in order to meet the SLA level of 99.9%.',
      'Maintained more than 100 daily jobs in Office data pipelines and provided support on data issues.'
    ]
  }
]

/** template:
 {
    name: '',
    time: '',
    desc: ''
 }
 */
const service = [
  {
    name: 'Graduate Admission Committee',
    time: '2019',
    desc: 'Served on the committee to review graduate applications to the Allen School of Computer Science at the University of Washington.'
  },
  {
    name: 'Co-Organizer: Interactive Systems Seminar',
    time: '2018 - Present',
    desc: 'Co-organized a weekly seminar for reading and discussing HCI papers, at the University of Washington.'
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

export {meta, education, papers, work, awards, teaching, service}
