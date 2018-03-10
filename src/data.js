const projects = [
  {
    url: 'https://altizure.com',
    embed: 'https://site.altizure.com/project/54ed7ff541fbfa3e1967fc78/model/embed#autoplay=false&lights=off',
    title: 'Altizure',
    descriptions: [
      'Altizure is a cloud platform for automatic 3D reconstruction to turn drone photographs into 3D models. Here I worked as a full-stack developer on every aspect of the web platform, including both front ends and back ends. As a team of two, we built a portal with an in-house cluster to run reconstruction parallelly and a fast viewer to browse, share and do quick tasks on generated 3D models. Within a year and a half, we succeeded in growing our user base from zero to more than 7,000 activated users.'
    ],
    buttons: [
      {name: 'website', link: 'https://altizure.com', icon: 'fa-external-link'},
      {name: 'video', link: 'https://www.youtube.com/watch?v=-SCEJykKex4', icon: 'fa-youtube-play'},
      {name: 'thesis', link: '/build/misc/thesis.pdf', icon: 'fa-file-o'},
      {name: 'intro', link: 'https://hkust25projects.ust.hk/en/projects/detail/mapping_the_world_with_drones', icon: 'fa-external-link'},
      {name: 'channel', link: 'https://www.youtube.com/channel/UCJ1TQcdZt3i7fgWFyczrcFw', icon: 'fa-youtube'}
    ]
  },
  {
    url: '/build/misc/pvis14.pdf',
    image: '/build/images/pvis2014.jpg',
    title: 'Embedding Temporal Display into Map',
    descriptions: [
      'This paper tried to visualize spatio-temporal data in-place while minimizing occlusion or distortion. Inspired by an algorithm in Computer Graphics, we thought about seamlessly enlarging the roads on a raster map, so we could place time series plots directly on roads where the events occurred. In this work, I drafted the whole paper, proposed the visual principles and designs, came up with the case study stories, and carefully designed the user studies.',
      'It was published on IEEE Pacific Visualization Symposium (PacificVis), 2014.'
    ],
    buttons: [
      {name: 'paper', link: '/build/misc/pvis14.pdf', icon: 'fa-file-o'}
    ]
  },
  {
    image: '/build/images/kinect.jpg',
    title: 'Make the Intangible Tangible',
    descriptions: [
      'It is a creative project done in collaboration with three students from China Academy of Arts. At that time, I was interested in Kinect and thought about how we could record the movement of the human body in 3D and turned that into art. The movement of the hand is transient and intangible, but to record the curve and turn it into 3D printing would make it a concrete, permanent object. So I built a demo allowing users to draw arbitrary 3D "painting" with their hands which could later be turned into 3D printed souvenirs.',
      'It was demonstrated in several locations. It was one of the central attractions in the HKIE Hi-Tech Fiesta 2014.'
    ],
    buttons: [
      {name: 'article', link: 'http://www.cse.ust.hk/~huamin/ieeepotential.pdf', icon: 'fa-file-o'}
    ],
    ps: 'Fig. 1 and Fig. 11'
  }
]

const bio = [
  [
    {text: 'I\'m a Computer Science PhD student at the'},
    {text: ' Interactive Data Lab', url: 'https://idl.cs.washington.edu/'},
    {text: ' at the'},
    {text: ' University of Washington', url: 'https://www.cs.washington.edu/'},
    {text: '. I work in the area of Information Visualization and HCI, advised by Prof.'},
    {text: ' Jeffery Heer', url: 'http://homes.cs.washington.edu/~jheer/'},
    {text: '. My research interests are in the area of visualization and human-computer interaction.'}
  ],
  [
    {text: 'In the past, I have been affiliated with the'},
    {text: ' Hong Kong University of Science and Technology', url: 'http://www.ust.hk/'},
    {text: ','},
    {text: ' Carnegie Mellon University', url: 'https://www.ece.cmu.edu/'},
    {text: ','},
    {text: ' Microsoft China', url: 'https://www.microsoft.com/'},
    {text: ', and'},
    {text: ' Altizure', url: 'https://www.altizure.com/'},
    {text: '.'}
  ]
]

export {projects, bio}
