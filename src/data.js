const projects = [
  {
    url: '/build/misc/lsc.pdf',
    image: '/build/images/eurovis19.jpg',
    legend: 'Interpreting latent spaces from variational autoencoders trained on emoji images. (a) The user starts with summary metrics for ' +
      'latent space variants, (b) then drills down to an overview distribution of a chosen latent space. (c) To map out a semantic relationship, the ' +
      'user defines an attribute vector, examines the custom projection to the vector axis, applies analogies and assesses the relationship uncertainty.',
    title: 'Latent space cartography: Visual analysis of vector space embeddings',
    descriptions: [
      'Latent spaces—reduced-dimensionality vector space embeddings of data, fit via machine learning—have been shown to capture ' +
      'interesting semantic properties and support data analysis and synthesis within a domain. Interpretation of latent spaces is ' +
      'challenging because prior knowledge, sometimes subtle and implicit, is essential to the process. We contribute methods for ' +
      '“latent space cartography”, the process of mapping and comparing meaningful semantic dimensions within latent spaces. We ' +
      'first perform a literature survey of relevant machine learning, natural language processing, and scientific research to distill ' +
      'common tasks and propose a workflow process. Next, we present an integrated visual analysis system for supporting this ' +
      'workflow, enabling users to discover, define, and verify meaningful relationships among data points, encoded within latent space ' +
      'dimensions. Three case studies demonstrate how users of our system can compare latent space variants in image generation, ' +
      'challenge existing findings on cancer transcriptomes, and assess a word embedding benchmark.',
      'It appears in Computer Graphics Forum (Proc. EuroVis), 2019.'
    ],
    buttons: [
      {name: 'paper', link: '/build/misc/lsc.pdf', icon: 'fa-file-o'},
      {name: 'appendix', link: '/build/misc/lsc-supp.pdf', icon: 'fa-file-o'},
      {name: 'software', link: 'https://github.com/yyyliu/latent-space-cartography', icon: 'fa-code'},
      {name: 'bibtex', link: '/build/bibtex/liu2019-lsc.txt', icon: 'fa-quote-left'}
    ],
  },
  {
    url: 'http://idl.cs.washington.edu/files/2018-QuantitativeColor-CHI.pdf',
    image: '/build/images/chi18.png',
    legend: 'Error rate by span and reference for assorted colormaps. Points indicate bootstrapped means, along with 50% (thick) and 95% (thin) CIs. Each sub-plot includes the mean value for each span level (dotted grey line). Viridis exhibits consistently low error across the board. The accuracy of blues matches that of viridis at larger spans, but drops notably for the smallest span. The blueorange diverging scheme exhibits errors when comparison is made across the central blue-orange hue boundary.',
    title: 'Somewhere over the rainbow: An empirical assessment of quantitative colormaps',
    descriptions: [
      'Quantitative color encodings are common in visualizations, but not all of them effectively represent data. In this paper, we contribute a comparative analysis of 9 colormaps. In our experiments, people judged relative distance among color triplets. We found that judiciously designed multi-hue colormaps perform well in time and error. Single-hue colormaps also perform well despite resolution issues. We also identified recurring issues, such as poor performance for low luminance regions on a white background.',
      'It appears in ACM Human Factors in Computing Systems (CHI), 2018.'
    ],
    buttons: [
      {name: 'paper', link: 'http://idl.cs.washington.edu/files/2018-QuantitativeColor-CHI.pdf', icon: 'fa-file-o'},
      {name: 'data', link: 'https://github.com/uwdata/quantitative-color-data', icon: 'fa-table'},
      {name: 'bibtex', link: '/build/bibtex/liu2018-colormaps.txt', icon: 'fa-quote-left'},
      {name: 'slides', link: '/build/misc/chi18-colormaps.pdf', icon: 'fa-image'}
    ]
  },
  {
    url: 'https://altizure.com',
    image: '/build/images/altizure.jpg',
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
    title: 'Embedding temporal display into map',
    descriptions: [
      'This paper tried to visualize spatio-temporal data in-place while minimizing occlusion or distortion. Inspired by an algorithm in Computer Graphics, we thought about seamlessly enlarging the roads on a raster map, so we could place time series plots directly on roads where the events occurred. In this work, I drafted the whole paper, proposed the visual principles and designs, came up with the case study stories, and carefully designed the user studies.',
      'It appears in IEEE Pacific Visualization Symposium (PacificVis), 2014.'
    ],
    buttons: [
      {name: 'paper', link: '/build/misc/pvis14.pdf', icon: 'fa-file-o'},
      {name: 'bibtex', link: '/build/bibtex/sun2014-embedding.txt', icon: 'fa-quote-left'}
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
    {text: '. Specific topics include graphical perception, exploratory data analysis and visualizing machine learning models.'}
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
