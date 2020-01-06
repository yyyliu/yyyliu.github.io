const projects = [
  {
    url: 'https://arxiv.org/abs/1910.13602',
    image: '/build/images/chi20.png',
    legend: 'Analytic Decision Graph for an interview participant, representing a controlled experiment to' +
      ' investigate the impact of web design on reading performance. At several steps, the participant revised her analytic'+
      ' decisions based on end results and reviewer feedback, for instance merging'+
      ' two levels of an IV because effect sizes were similar. While she examined'+
      ' model specification options thoroughly, she appeared to'+
      ' place less emphasis on inference decisions such as choosing which significance test to use.',
    title: 'Paths explored, paths omitted, paths obscured: Decision points & selective reporting in end-to-end data analysis',
    descriptions: [
      'Drawing reliable inferences from data involves many, sometimes arbitrary, decisions across phases of data collection, wrangling, and modeling.'+
      'As different choices can lead to diverging conclusions, understanding how researchers make analytic decisions is important for supporting robust and replicable analysis.'+
      'In this study, we pore over nine published research studies and conduct semi-structured interviews with their authors.'+
      'We observe that researchers often base their decisions on methodological or theoretical concerns, but subject to constraints arising from the data, expertise, or perceived interpretability.'+
      'We confirm that researchers may experiment with choices in search of desirable results, but also identify other reasons why researchers explore alternatives yet omit findings.'+
      'In concert with our interviews, we also contribute visualizations for communicating decision processes throughout an analysis.'+
      'Based on our results, we identify design opportunities for strengthening end-to-end analysis, for instance via tracking and meta-analysis of multiple decision paths.',
      'ACM Human Factors in Computing Systems (CHI), 2020.'
    ],
    buttons: [
      {name: 'paper', link: 'https://arxiv.org/abs/1910.13602', icon: 'fa-file-o'},
      {name: 'appendix', link: 'https://osf.io/m5cph/', icon: 'fa-file-o'},
      {name: 'bibtex', link: '/build/bibtex/liu2020-interview.txt', icon: 'fa-quote-left'}
    ]
  },
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
      'Computer Graphics Forum (Proc. EuroVis), 2019.'
    ],
    buttons: [
      {name: 'paper', link: '/build/misc/lsc.pdf', icon: 'fa-file-o'},
      {name: 'appendix', link: '/build/misc/lsc-supp.pdf', icon: 'fa-file-o'},
      {name: 'software', link: 'https://github.com/yyyliu/latent-space-cartography', icon: 'fa-code'},
      {name: 'video', link: 'https://youtu.be/war0DRbRGNE', icon: 'fa-youtube-play'},
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
      'ACM Human Factors in Computing Systems (CHI), 2018.'
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
    {text: 'Hello! I\'m a 3rd year PhD student.'},
    {text: 'I research information visualization, with the general goal of promoting robust data analysis.'},
    {text: 'My current focus is to study how analyses might go awry and build new tools to improve reproducibility.'},
  ],
  [
    {text: ' I\'m at the'},
    {text: ' Interactive Data Lab', url: 'https://idl.cs.washington.edu/'},
    {text: ' at the'},
    {text: ' University of Washington', url: 'https://www.cs.washington.edu/'},
    {text: ', working with Prof.'},
    {text: ' Jeffery Heer', url: 'http://homes.cs.washington.edu/~jheer/'},
    {text: '. In the past, I have been affiliated with the'},
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
