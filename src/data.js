const publications = [
  {
    url: 'https://arxiv.org/abs/2007.05551',
    image: '/build/images/vis20-boba.png',
    thumbnail: '/build/images/vis20-boba-thumb.jpg',
    legend: 'Authoring and visualizing multiverse analyses with Boba. Users start by annotating a script with analytic decisions (a), from which Boba synthesizes a multiplex of possible analysis variants (b). To interpret the results from all analyses, users start with a graph of analytic decisions (c), where sensitive decisions are highlighted in darker blues. Clicking a decision node allows users to compare point estimates (d, blue dots) and uncertainty distributions (d, gray area) between different alternatives. Users may further drill down to assess the fit quality of individual models (e) by comparing observed data (pink) with model predictions (teal).',
    title: 'Boba: Authoring and visualizing multiverse analyses',
    authors: ['Yang Liu', 'Alex Kale', 'Tim Althoff', 'Jeffrey Heer'],
    venue: 'IEEE Transactions on Visualization and Computer Graphics (Proc. VAST), 2020',
    descriptions: [
      'Multiverse analysis is an approach to data analysis in which all "reasonable" analytic decisions are evaluated in parallel and interpreted collectively, in order to foster robustness and transparency. However, specifying a multiverse is demanding because analysts must manage myriad variants from a cross-product of analytic decisions, and the results require nuanced interpretation. We contribute Boba: an integrated domain-specific language (DSL) and visual analysis system for authoring and reviewing multiverse analyses. With the Boba DSL, analysts write the shared portion of analysis code only once, alongside local variations defining alternative decisions, from which the compiler generates a multiplex of scripts representing all possible analysis paths. The Boba Visualizer provides linked views of model results and the multiverse decision space to enable rapid, systematic assessment of consequential decisions and robustness, including sampling uncertainty and model fit. We demonstrate Boba\'s utility through two data analysis case studies, and reflect on challenges and design opportunities for multiverse analysis software.',
    ],
    buttons: [
      {name: 'paper', link: 'https://arxiv.org/abs/2007.05551', icon: 'fa-file-o'},
      {name: 'appendix', link: 'https://osf.io/9dcfa/', icon: 'fa-file-o'},
      {name: 'software', link: 'https://github.com/uwdata/boba', icon: 'fa-code'},
      {name: 'video', link: 'https://youtu.be/NtHrUm4_kyw', icon: 'fa-youtube-play'},
      {name: 'talk', link: 'https://youtu.be/YWhjyAu0hZs?t=2533', icon: 'fa-youtube-play'},
      {name: 'bibtex', link: '/build/bibtex/liu2020-boba.txt', icon: 'fa-quote-left'}
    ]
  },
  {
    url: 'https://arxiv.org/abs/1910.13602',
    image: '/build/images/chi20.png',
    thumbnail: '/build/images/chi20-thumb.jpg',
    legend: 'Analytic Decision Graph for an interview participant, representing a controlled experiment to investigate the impact of web design on reading performance. At several steps, the participant revised her analytic decisions based on end results and reviewer feedback, for instance merging two levels of an IV because effect sizes were similar. While she examined model specification options thoroughly, she appeared to place less emphasis on inference decisions such as choosing which significance test to use.',
    title: 'Paths explored, paths omitted, paths obscured: Decision points & selective reporting in end-to-end data analysis',
    authors: ['Yang Liu', 'Tim Althoff', 'Jeffrey Heer'],
    venue: 'ACM Human Factors in Computing Systems (CHI), 2020',
    descriptions: [
      'Drawing reliable inferences from data involves many, sometimes arbitrary, decisions across phases of data collection, wrangling, and modeling. As different choices can lead to diverging conclusions, understanding how researchers make analytic decisions is important for supporting robust and replicable analysis. In this study, we pore over nine published research studies and conduct semi-structured interviews with their authors. We observe that researchers often base their decisions on methodological or theoretical concerns, but subject to constraints arising from the data, expertise, or perceived interpretability. We confirm that researchers may experiment with choices in search of desirable results, but also identify other reasons why researchers explore alternatives yet omit findings. In concert with our interviews, we also contribute visualizations for communicating decision processes throughout an analysis. Based on our results, we identify design opportunities for strengthening end-to-end analysis, for instance via tracking and meta-analysis of multiple decision paths.',
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
    thumbnail: '/build/images/eurovis19-thumb.jpg',
    legend: 'Interpreting latent spaces from variational autoencoders trained on emoji images. (a) The user starts with summary metrics for latent space variants, (b) then drills down to an overview distribution of a chosen latent space. (c) To map out a semantic relationship, the user defines an attribute vector, examines the custom projection to the vector axis, applies analogies and assesses the relationship uncertainty.',
    title: 'Latent space cartography: Visual analysis of vector space embeddings',
    authors: ['Yang Liu', 'Eunice Jun', 'Qisheng Li', 'Jeffrey Heer'],
    venue: 'Computer Graphics Forum (Proc. EuroVis), 2019',
    descriptions: [
      'Latent spaces—reduced-dimensionality vector space embeddings of data, fit via machine learning—have been shown to capture ' +
      'interesting semantic properties and support data analysis and synthesis within a domain. Interpretation of latent spaces is ' +
      'challenging because prior knowledge, sometimes subtle and implicit, is essential to the process. We contribute methods for ' +
      '“latent space cartography”, the process of mapping and comparing meaningful semantic dimensions within latent spaces. We ' +
      'first perform a literature survey of relevant machine learning, natural language processing, and scientific research to distill ' +
      'common tasks and propose a workflow process. Next, we present an integrated visual analysis system for supporting this ' +
      'workflow, enabling users to discover, define, and verify meaningful relationships among data points, encoded within latent space ' +
      'dimensions. Three case studies demonstrate how users of our system can compare latent space variants in image generation, ' +
      'challenge existing findings on cancer transcriptomes, and assess a word embedding benchmark.'
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
    url: 'https://arxiv.org/abs/1911.00568',
    image: '/build/images/arxiv19.png',
    thumbnail: '/build/images/arxiv19-thumb.jpg',
    legend: ' A matrix of interviewees, their corresponding analysis context, and high-level tasks they perform in the analysis process.',
    title: 'Goals, process, and challenges of exploratory data analysis: An interview study',
    authors: ['Kanit Wongsuphasawat', 'Yang Liu', 'Jeffrey Heer'],
    venue: 'arXiv, 2019',
    descriptions: [
      'How do analysis goals and context affect exploratory data analysis (EDA)? To investigate this question, we conducted semi-structured interviews with 18 data analysts. We characterize common exploration goals: profiling (assessing data quality) and discovery (gaining new insights). Though the EDA literature primarily emphasizes discovery, we observe that discovery only reliably occurs in the context of open-ended analyses, whereas all participants engage in profiling across all of their analyses. We describe the process and challenges of EDA highlighted by our interviews. We find that analysts must perform repetitive tasks (e.g., examine numerous variables), yet they may have limited time or lack domain knowledge to explore data. Analysts also often have to consult other stakeholders and oscillate between exploration and other tasks, such as acquiring and wrangling additional data. Based on these observations, we identify design opportunities for exploratory analysis tools, such as augmenting exploration with automation and guidance.'
    ],
    buttons: [
      {name: 'paper', link: 'https://arxiv.org/abs/1911.00568', icon: 'fa-file-o'},
      {name: 'bibtex', link: '/build/bibtex/wongsuphasawat2019.txt', icon: 'fa-quote-left'}
    ]
  },
  {
    url: 'http://idl.cs.washington.edu/files/2018-QuantitativeColor-CHI.pdf',
    image: '/build/images/chi18.png',
    thumbnail: '/build/images/chi18-thumb.png',
    legend: 'Error rate by span and reference for assorted colormaps. Points indicate bootstrapped means, along with 50% (thick) and 95% (thin) CIs. Each sub-plot includes the mean value for each span level (dotted grey line). Viridis exhibits consistently low error across the board. The accuracy of blues matches that of viridis at larger spans, but drops notably for the smallest span. The blueorange diverging scheme exhibits errors when comparison is made across the central blue-orange hue boundary.',
    title: 'Somewhere over the rainbow: An empirical assessment of quantitative colormaps',
    authors: ['Yang Liu', 'Jeffrey Heer'],
    venue: 'ACM Human Factors in Computing Systems (CHI), 2018',
    descriptions: [
      'Quantitative color encodings are common in visualizations, but not all of them effectively represent data. In this paper, we contribute a comparative analysis of 9 colormaps. In our experiments, people judged relative distance among color triplets. We found that judiciously designed multi-hue colormaps perform well in time and error. Single-hue colormaps also perform well despite resolution issues. We also identified recurring issues, such as poor performance for low luminance regions on a white background.'
    ],
    buttons: [
      {name: 'paper', link: 'http://idl.cs.washington.edu/files/2018-QuantitativeColor-CHI.pdf', icon: 'fa-file-o'},
      {name: 'data', link: 'https://github.com/uwdata/quantitative-color-data', icon: 'fa-table'},
      {name: 'bibtex', link: '/build/bibtex/liu2018-colormaps.txt', icon: 'fa-quote-left'},
      {name: 'slides', link: '/build/misc/chi18-colormaps.pdf', icon: 'fa-image'}
    ]
  },
  {
    url: '/build/misc/pvis14.pdf',
    image: '/build/images/pvis14.jpg',
    thumbnail: '/build/images/pvis14-thumb.jpg',
    legend: 'Different temporal representations embedded in broadened roads. (a) Temporal visualizations including Time series curves, ThemeRiver, and spiral graph. (b) and (c) demonstrate the comparison of heatmaps on normal and broadened roads. (d) and (e) show the comparison of the direct overlaying method and our embedded view.',
    title: 'Embedding temporal display into maps for occlusion-free visualization of spatio-temporal data',
    authors: ['Guodao Sun', 'Yang Liu', 'Wenbin Wu', 'Ronghua Liang', 'Huamin Qu'],
    venue: 'IEEE Pacific Visualization Symposium (PacificVis), 2014',
    descriptions: [
      'It is often necessary to analyze spatio-temporal data such as traffic flow, air pollution, and vehicle trajectories in a city. A map is often used to show the spatial context while various temporal displays like time series plots can be used to present the changes in the data over time. In this paper, we present a novel visualization that can seamlessly embed temporal displays into a map for occlusion-free visualization of both the spatial and temporal attributes of the data. We first extend the seam carving algorithm to broaden the roads of interest in a map with the least distortion to other areas, and then embed temporal displays into the roads to reveal temporal patterns without the occlusion of map information. We study various design choices in our method, including the encoding of the time direction and temporal display, and conduct two comprehensive user studies to validate our design decisions. We also demonstrate the usability of our approach with case studies on real traffic flow data in a major city.'
    ],
    buttons: [
      {name: 'paper', link: '/build/misc/pvis14.pdf', icon: 'fa-file-o'},
      {name: 'bibtex', link: '/build/bibtex/sun2014-embedding.txt', icon: 'fa-quote-left'}
    ]
  }
]

const projects = [
  {
    url: 'https://github.com/uwdata/multiverse-spec',
    thumbnail: '/build/images/boba-thumb.jpg',
    title: 'Boba',
    summary: 'An open-source python package for authoring and executing multiverse analysis.',
    buttons: [
      {name: 'GitHub', link: 'https://github.com/uwdata/boba'},
      {name: 'PyPI', link: 'https://pypi.org/project/boba/'}
    ]
  },
  {
    url: 'https://github.com/uwdata/latent-space-cartography',
    thumbnail: '/build/images/lsc-thumb.jpg',
    title: 'Latent Space Cartography',
    summary: 'A visual analysis tool for mapping and comparing meaningful "semantic" dimensions in latent spaces.',
    buttons: [
      {name: 'GitHub', link: 'https://github.com/uwdata/latent-space-cartography'},
      {name: 'paper', link: 'http://localhost:8080/build/misc/lsc.pdf'}
    ]
  },
  {
    url: 'https://altizure.com',
    image: '/build/images/altizure.jpg',
    thumbnail: '/build/images/altizure-thumb.jpg',
    title: 'Altizure',
    summary: 'A cloud platform for reconstructing 3D models from drone photographs.',
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
    image: '/build/images/kinect.jpg',
    thumbnail: '/build/images/kinect-thumb.jpg',
    title: 'Make the Intangible Tangible',
    summary: 'An art project where we traced the movement of the human body and turned it into 3D-printed objects.',
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
    {text: 'Hello! I\'m a 4th year PhD student.'},
    {text: 'I research information visualization, with the general goal of promoting robust data analysis.'},
    {text: 'My current focus is to study how analyses might go awry and build new tools to improve reproducibility.'},
  ],
  [
    {text: ' I\'m at the'},
    {text: ' Interactive Data Lab', url: 'https://idl.cs.washington.edu/'},
    {text: ' at the'},
    {text: ' University of Washington', url: 'https://www.cs.washington.edu/'},
    {text: ', advised by Prof.'},
    {text: ' Jeffrey Heer', url: 'http://homes.cs.washington.edu/~jheer/'},
    {text: '. In the past, I have been affiliated with the'},
    {text: ' Hong Kong University of Science and Technology', url: 'http://www.ust.hk/'},
    {text: ','},
    {text: ' Microsoft China', url: 'https://www.microsoft.com/'},
    {text: ', and'},
    {text: ' Altizure', url: 'https://www.altizure.com/'},
    {text: '.'}
  ]
]

export {publications, projects, bio}
