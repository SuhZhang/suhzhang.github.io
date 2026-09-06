export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  distinction?: string;
  topic: string;
  image?: string;
  imageAlt?: string;
  imageHref?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    id: 'geosr',
    title: 'Make Geometry Matter for Spatial Reasoning',
    authors: ['Shihua Zhang', 'Qiuhong Shen', 'Shizun Wang', 'Tianbo Pan', 'Xinchao Wang'],
    venue: 'ECCV 2026', distinction: 'Award Candidate · Oral',
    topic: 'Vision-language models · Spatial reasoning',
    image: '/images/geosr-static-radar.png',
    imageAlt: 'GeoSR static spatial reasoning radar chart',
    secondaryImage: '/images/geosr-dynamic-radar.png',
    secondaryImageAlt: 'GeoSR dynamic spatial reasoning radar chart',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2603.26639' },
      { label: 'Project', href: 'https://suhzhang.github.io/GeoSR/' },
      { label: 'Code', href: 'https://github.com/SuhZhang/GeoSR' },
    ],
  },
  {
    id: 'corradapter',
    image: '/images/corradapter-teaser.png', imageAlt: 'CorrAdapter improves consistency in multi-view image and video generation',
    title: 'Align Images Before You Generate',
    authors: ['Shihua Zhang', 'Qiuhong Shen', 'Xinchao Wang'],
    venue: 'CVPR 2026', topic: 'Image and video generation',
    links: [
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Align_Images_Before_You_Generate_CVPR_2026_paper.html' },
      { label: 'Code', href: 'https://github.com/SuhZhang/CorrAdapter' },
    ],
  },
  {
    id: 'sag-gnn',
    title: 'SAG-GNN: Semantic-Aware Guided GNN for Descriptor-Free 2D–3D Matching',
    authors: ['Shihua Zhang*', 'Tianhao Xu*', 'Zizhuo Li', 'Qing Ma', 'Jiayi Ma'],
    venue: 'CVPR 2026', topic: '2D–3D matching',
    image: '/images/sag-gnn-results.png', imageAlt: 'SAG-GNN qualitative image-to-point-cloud matching comparison',
    links: [
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_SAG-GNN_Semantic-Aware_Guided_GNN_for_Descriptor-Free_2D-3D_Matching_CVPR_2026_paper.html' },
      { label: 'Code', href: 'https://github.com/tinxu0203/SAG-GNN' },
    ],
  },
  {
    id: 'world-action-models',
    image: '/images/wam-survey-definition.png', imageAlt: 'Comparison of vision-language-action models, world models, and world action models',
    title: 'World Action Models: A Survey',
    authors: ['Qiuhong Shen', 'Shihua Zhang', 'Yue Liao', 'Qi Li', 'Zhenxiong Tan', 'Shizun Wang', 'Shuicheng Yan', 'Xinchao Wang'],
    venue: 'arXiv 2026', topic: 'World models · Embodied intelligence',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2606.20781' },
      { label: 'Project', href: 'https://world-action-models.github.io/' },
    ],
  },
  {
    id: 'dematch-plus-plus',
    image: '/images/dematch-plus-plus-experiments.png',
    imageAlt: 'DeMatch++ experimental Figure 6, first complete example: image matching, motion-vector clusters, smooth sub-fields, and the potential recovered motion field',
    imageHref: '/images/dematch-plus-plus-experiments-full.png',
    title: 'DeMatch++: Two-View Correspondence Learning via Deep Motion Field Decomposition and Respective Local-Context Aggregation',
    authors: ['Shihua Zhang', 'Zizhuo Li', 'Jiayi Ma'],
    venue: 'TPAMI 2025', topic: 'Image matching',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/TPAMI.2025.3596598' },
      { label: 'Code', href: 'https://github.com/SuhZhang/DeMatchPlus' },
    ],
  },
  {
    id: 'semaglue',
    title: 'Matching While Perceiving: Enhance Image Feature Matching with Applicable Semantic Amalgamation',
    authors: ['Shihua Zhang*', 'Zhenjie Zhu*', 'Zizhuo Li', 'Tao Lu', 'Jiayi Ma'],
    venue: 'AAAI 2025', topic: 'Image matching',
    image: '/images/semaglue-introduction.png', imageAlt: 'SemaGlue image feature matching and semantic comparison',
    links: [
      { label: 'Paper', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/33095' },
      { label: 'Code', href: 'https://github.com/ZeJ-Zhu/SemaGlue' },
    ],
  },
  {
    id: 'image-matching-survey',
    image: '/images/image-matching-survey-overview.png', imageAlt: 'Taxonomy of deep learning approaches to image matching',
    title: 'Deep Learning Reforms Image Matching: A Survey and Outlook',
    authors: ['Shihua Zhang*', 'Zizhuo Li*', 'Kaining Zhang', 'Yifan Lu', 'Yuxin Deng', 'Linfeng Tang', 'Xingyu Jiang', 'Jiayi Ma'],
    venue: 'arXiv 2025', topic: 'Image matching · Survey',
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2506.04619' }],
  },
  {
    id: 'dematch',
    image: '/images/dematch-framework.png', imageAlt: 'DeMatch motion-field decomposition and correspondence-learning framework',
    title: 'DeMatch: Deep Decomposition of Motion Field for Two-View Correspondence Learning',
    authors: ['Shihua Zhang', 'Zizhuo Li', 'Yuan Gao', 'Jiayi Ma'],
    venue: 'CVPR 2024', topic: 'Image matching',
    links: [
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/CVPR2024/html/Zhang_DeMatch_Deep_Decomposition_of_Motion_Field_for_Two-View_Correspondence_Learning_CVPR_2024_paper.html' },
      { label: 'Code', href: 'https://github.com/SuhZhang/DeMatch' },
    ],
  },
  {
    id: 'diffglue',
    image: '/images/diffglue-framework.png', imageAlt: 'DiffGlue framework with assignment-guided prior injection and the forward diffusion and backward denoising processes',
    title: 'DiffGlue: Diffusion-Aided Image Feature Matching',
    authors: ['Shihua Zhang', 'Jiayi Ma'],
    venue: 'ACM MM 2024', topic: 'Image matching',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1145/3664647.3681069' },
      { label: 'Code', href: 'https://github.com/SuhZhang/DiffGlue' },
    ],
  },
  {
    id: 'convmatch',
    image: '/images/convmatch-framework.png', imageAlt: 'ConvMatch correspondence learning through convolutional motion-field reasoning',
    title: 'ConvMatch: Rethinking Network Design for Two-View Correspondence Learning',
    authors: ['Shihua Zhang', 'Jiayi Ma'],
    venue: 'TPAMI 2024 · AAAI 2023', distinction: 'AAAI Oral', topic: 'Image matching',
    links: [
      { label: 'Journal', href: 'https://doi.org/10.1109/TPAMI.2023.3334515' },
      { label: 'Conference', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/25456' },
      { label: 'Code', href: 'https://github.com/SuhZhang/ConvMatch' },
      { label: 'Code (TPAMI)', href: 'https://github.com/SuhZhang/ConvMatch/tree/convmatch_plus' },
    ],
  },
];

export const additionalPublications = [
  {
    "title": "Selecting and Pruning: A Differentiable Causal Sequentialized State-Space Model for Two-View Correspondence Learning",
    "venue": "TIP",
    "year": "2026",
    "href": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f_tYK4AAAAJ&pagesize=100&citation_for_view=7f_tYK4AAAAJ:roLk4NBRz8UC",
    "authors": [
      "Xiang Fang*",
      "Shihua Zhang*",
      "Hao Zhang",
      "Xiaoguang Mei",
      "Huabing Zhou",
      "Jiayi Ma"
    ]
  },
  {
    "title": "CoMatch: Dynamic Covisibility-Aware Transformer for Bilateral Subpixel-Level Semi-Dense Image Matching",
    "venue": "ICCV",
    "distinction": "Spotlight",
    "year": "2025",
    "href": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f_tYK4AAAAJ&pagesize=100&citation_for_view=7f_tYK4AAAAJ:hqOjcs7Dif8C",
    "authors": [
      "Zizhuo Li",
      "Yifan Lu",
      "Linfeng Tang",
      "Shihua Zhang",
      "Jiayi Ma"
    ]
  },
  {
    "title": "U-Match: Exploring Hierarchy-Aware Local Context for Two-View Correspondence Learning",
    "venue": "TPAMI",
    "year": "2024",
    "href": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f_tYK4AAAAJ&pagesize=100&citation_for_view=7f_tYK4AAAAJ:eQOLeE2rZwMC",
    "authors": [
      "Zizhuo Li",
      "Shihua Zhang",
      "Jiayi Ma"
    ]
  },
  {
    "title": "ResMatch: Residual Attention Learning for Feature Matching",
    "venue": "AAAI",
    "year": "2024",
    "href": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f_tYK4AAAAJ&pagesize=100&citation_for_view=7f_tYK4AAAAJ:IjCSPb-OGe4C",
    "authors": [
      "Yuxin Deng",
      "Kaining Zhang",
      "Shihua Zhang",
      "Yansheng Li",
      "Jiayi Ma"
    ]
  },
  {
    "title": "ACMatch: Improving Context Capture for Two-View Correspondence Learning via Adaptive Convolution",
    "venue": "ISPRS",
    "year": "2024",
    "href": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f_tYK4AAAAJ&pagesize=100&citation_for_view=7f_tYK4AAAAJ:ufrVoPGSRksC",
    "authors": [
      "Xiang Fang",
      "Yifan Lu",
      "Shihua Zhang",
      "Yining Xie",
      "Jiayi Ma"
    ]
  },
  {
    "title": "U-Match: Two-View Correspondence Learning with Hierarchy-Aware Local Context Aggregation",
    "venue": "IJCAI",
    "distinction": "Oral",
    "year": "2023",
    "href": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f_tYK4AAAAJ&pagesize=100&citation_for_view=7f_tYK4AAAAJ:LkGwnXOMwfcC",
    "authors": [
      "Zizhuo Li*",
      "Shihua Zhang*",
      "Jiayi Ma"
    ]
  },
  {
    "title": "Improving Sparse Graph Attention for Feature Matching by Informative Keypoints Exploration",
    "venue": "CVIU",
    "year": "2023",
    "href": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f_tYK4AAAAJ&pagesize=100&citation_for_view=7f_tYK4AAAAJ:qjMakFHDy7sC",
    "authors": [
      "Xingyu Jiang*",
      "Shihua Zhang*",
      "Xiao-Ping Zhang",
      "Jiayi Ma"
    ]
  }
];
