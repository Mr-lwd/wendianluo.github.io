/* ============================================================================
   i18n — English / Chinese (Simplified) dictionary
   Full bilingual site. Paper titles, author lists, journal names, and DOIs
   intentionally remain English in both languages (academic convention).
   ========================================================================== */
window.I18N = {
  en: {
    // Document
    "meta.title": "Wendian Luo — Research & Engineering",
    "meta.description": "Wendian Luo — M.Eng. candidate in Computer Technology at Sichuan University. Research in edge intelligence, federated learning, computer vision, and energy-efficient computing.",

    // Navigation
    "nav.about": "About",
    "nav.education": "Education",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.awards": "Awards",
    "nav.cv": "CV",

    // Hero
    "hero.eyebrow": "Sichuan University · College of Computer Science",
    "hero.title": "M.Eng. candidate in Computer Technology",
    "hero.quote": "Research interests in <em>Edge Intelligence</em>, <em>Federated Learning</em>, <em>Computer Vision</em>, <em>Large Language Models</em>, and <em>Embodied Intelligence</em>.",
    "cta.downloadCv": "Download CV",
    "cta.viewPubs": "View Publications",
    "hero.location": "Chengdu, China",

    // About
    "about.eyebrow": "01 · Profile",
    "about.title": "About Me",
    "about.summaryLead": "Master's candidate in <strong>Computer Technology</strong> at Sichuan University with research experience in <strong>edge intelligence</strong>, <strong>federated learning</strong>, <strong>computer vision</strong>, and <strong>energy-efficient computing</strong>.",
    "about.summaryBody": "First author of peer-reviewed work on semi-asynchronous federated prototype learning and low-power real-time scheduling. Experienced in PyTorch-based algorithm development, heterogeneous edge systems, DVFS-aware optimization, and large language model fine-tuning and deployment.",
    "about.interestsTitle": "Research Interests",
    "about.interest1": "Edge Intelligence",
    "about.interest2": "Federated & Distributed Learning",
    "about.interest3": "Zero-Shot Industrial Anomaly Detection",
    "about.interest4": "Energy-Efficient AI & Real-Time Systems",
    "about.interest5": "LLM Evaluation, Fine-Tuning & Deployment",
    "about.interest6": "Embodied Intelligence",

    // Education
    "edu.eyebrow": "02 · Academic Path",
    "edu.title": "Education",
    "edu.tagExpected": "Expected",
    "edu.meng.degree": "M.Eng. in Computer Technology",
    "edu.meng.school": "Sichuan University · College of Computer Science · Chengdu, China",
    "edu.meng.gpa": "GPA: 3.65 / 4.00.",
    "edu.meng.scholarship": "First-Class Graduate Academic Scholarship.",
    "edu.beng.degree": "B.Eng. in Computer Science and Technology",
    "edu.beng.school": "Sichuan University · College of Computer Science · Chengdu, China",
    "edu.beng.gpa": "GPA: 3.76 / 4.00; GPA ranking: 38 / 318 (top 12%); graduate recommendation ranking: 8 / 318.",
    "edu.beng.grad": "Outstanding Graduate of Sichuan Province, 2024.",

    // Research experience
    "research.eyebrow": "03 · Research",
    "research.title": "Research Experience",
    "badge.firstAuthor": "First Author",
    "badge.openSource": "Open Source",
    "research.tmsc.title": "TMSC: Zero-Shot Industrial Anomaly Detection",
    "research.tmsc.role": "Researcher and Developer · <a class=\"card-link\" href=\"https://github.com/Mr-lwd/TMSC\" target=\"_blank\" rel=\"noopener\">Project Repository ↗</a>",
    "research.tmsc.b1": "Developed a zero-shot anomaly detection pipeline using <strong>DINOv3</strong> and <strong>CLIP</strong>, integrating multi-layer representations, dual-branch prompt adapters, cross-modal attention, and three-region semantic calibration.",
    "research.fedsae.title": "FedSAE: Semi-Asynchronous Energy-Efficient Federated Prototype Learning",
    "research.fedsae.role": "First Author and Researcher · Sichuan University",
    "research.fedsae.b1": "Designed a semi-asynchronous <strong>end–edge–cloud federated prototype learning</strong> framework that exchanges class-level feature statistics instead of raw data or full model parameters.",
    "research.fedsae.b2": "Validated the energy-saving effectiveness of the framework's dynamic <strong>DVFS</strong> mechanism through experiments on an <strong>NVIDIA Jetson TX2</strong> edge platform.",
    "research.lpsafs.title": "LPSAFS: Low-Power Scheduling with Segmented Frequency Scaling",
    "research.lpsafs.role": "First Author and Researcher · Sichuan University",
    "research.lpsafs.b1": "Designed a segmented frequency-scaling algorithm based on <strong>minimum-slack allocation</strong> for periodic real-time tasks under discrete DVFS states, deadline constraints, and reliability requirements.",

    // Publications
    "pubs.eyebrow": "04 · Scholarly Output",
    "pubs.title": "Publications",
    "pubs.journalHead": "Journal Articles",
    "pubs.confHead": "Conference Papers",
    "badge.journal": "Journal",
    "badge.majorRevision": "Major Revision",
    "badge.conference": "Conference",

    // Professional experience
    "exp.eyebrow": "05 · Industry",
    "exp.title": "Professional Experience",
    "exp.tagInternship": "Internship",
    "exp.role": "Large Language Model Algorithm R&D Intern",
    "exp.org": "Media Intelligence Laboratory, Chengdu Sobey · Chengdu, China",
    "exp.b1": "Constructed and cleaned English instruction-tuning datasets for Story-to-Scene generation, scene keyword extraction, and shot-level visual description tasks; developed scripts for translation, provenance tracing, deduplication, and format validation.",
    "exp.b2": "Fine-tuned and evaluated <strong>Qwen-72B</strong> with LLaMA-Factory and LoRA on an eight-GPU NVIDIA A800 server.",
    "exp.b3": "Deployed inference services using <strong>vLLM</strong>, Flask, and HTTP APIs; completed capability integration, API documentation, and project handover.",

    // Projects
    "proj.eyebrow": "06 · Selected Work",
    "proj.title": "Selected Projects",
    "proj.robot.title": "OpenClaw-Enabled Mobile Robot Control & Vision-Guided Grasping",
    "proj.robot.badge": "System Integration",
    "proj.robot.role": "Project Developer · <em>ROSMASTER M3 PRO</em>",
    "proj.robot.b1": "Deployed and configured an <strong>OpenClaw</strong>-based natural-language robot-control platform integrating MCP/FastMCP with <strong>ROS 2</strong>, enabling tool-based access to the omnidirectional chassis, 6-DoF arm, and perception modules.",
    "proj.robot.b2": "Integrated and validated a closed-loop <strong>RGB-D tracking-and-grasping</strong> workflow spanning visual grounding, mobile-base alignment, 3D grasp-point estimation, inverse-kinematics control, and collision-aware retreat; tuned grasp offsets and diagnosed visual/depth localization errors.",
    "proj.medical.title": "PaddlePaddle-Based 3D Medical Data Analysis Platform",
    "proj.medical.badge": "National Second Prize",
    "proj.medical.role": "Primary Developer · <em>12th China Software Cup</em>",
    "proj.medical.b1": "Developed the medical platform, 3D imaging workspace, and UI/UX using <strong>Vue.js</strong>, Vuetify, and VTK.js; contributed to the Python/<strong>Django</strong> backend and Tencent Cloud COS integration.",
    "proj.medical.b2": "Integrated <strong>PaddlePaddle MedicalSeg</strong> into an end-to-end workflow covering medical-image upload, AI-assisted segmentation, 3D visualization, and patient management.",
    "proj.tingyin.title": "Tingyin: Deep Learning-Based Acoustic Life Detection for Earthquake Rescue",
    "proj.tingyin.badge": "National Innovation Program",
    "proj.tingyin.role": "Core Team Member · <em>Sichuan University</em>",
    "proj.tingyin.b1": "Developed the mobile application, conducted hardware feasibility analysis, and contributed to algorithm deployment and end-to-end system integration.",
    "proj.tingyin.b2": "Integrated <strong>TSTNN</strong>-based speech enhancement and <strong>Whisper</strong>-based speech recognition; completed the project ahead of schedule and received First Prize in the Sichuan Division of the 2023 Chinese College Students Computer Design Competition.",

    // Skills
    "skills.eyebrow": "07 · Toolbox",
    "skills.title": "Technical Skills",
    "skills.label.programming": "Programming",
    "skills.label.ml": "Machine Learning",
    "skills.label.edgeai": "Edge AI",
    "skills.label.aidev": "AI Development",
    "skills.label.languages": "Languages",
    "skills.chip.federated": "Federated Learning",
    "skills.chip.zsad": "Zero-Shot Anomaly Detection",
    "skills.chip.modelDeploy": "Model Deployment",
    "skills.chip.zh": "Chinese — native",
    "skills.chip.en": "English — CET-4 & CET-6",
    "skills.chip.ielts": "Preparing for IELTS",

    // Honors
    "honors.eyebrow": "08 · Recognition",
    "honors.title": "Honors & Awards",
    "honors.graduate.title": "Outstanding Graduate of Sichuan Province",
    "honors.graduate.org": "Sichuan Province",
    "honors.scholarship.title": "First-Class Graduate Academic Scholarship",
    "honors.scholarship.org": "Sichuan University",
    "honors.softwarecup.title": "National Second Prize",
    "honors.softwarecup.org": "12th China Software Cup",
    "honors.competition.title": "First Prize, Sichuan Division",
    "honors.competition.org": "Chinese College Students Computer Design Competition",
    "honors.merit.title": "Merit and Academic Scholarships",
    "honors.merit.org": "Sichuan University",

    // Footer
    "footer.email": "Email",
    "footer.cv": "CV",
    "footer.copy": "Wendian Luo. Crafted with care in Chengdu, China.",

    // ARIA labels
    "aria.navToggle": "Toggle navigation",
    "aria.backToTop": "Back to top",
    "aria.themeToggle": "Switch color theme",
    "aria.langToggle": "Switch to Chinese"
  },

  zh: {
    // Document
    "meta.title": "Wendian Luo — 研究与工程",
    "meta.description": "Wendian Luo — 四川大学计算机技术专业硕士研究生。研究方向：边缘智能、联邦学习、计算机视觉与节能计算。",

    // Navigation
    "nav.about": "关于",
    "nav.education": "教育",
    "nav.research": "研究",
    "nav.publications": "论文",
    "nav.experience": "经历",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "nav.awards": "荣誉",
    "nav.cv": "简历",

    // Hero
    "hero.eyebrow": "四川大学 · 计算机学院",
    "hero.title": "计算机技术 · 硕士在读",
    "hero.quote": "研究兴趣：<em>边缘智能</em>、<em>联邦学习</em>、<em>计算机视觉</em>、<em>大语言模型</em> 与 <em>具身智能</em>。",
    "cta.downloadCv": "下载简历",
    "cta.viewPubs": "查看论文",
    "hero.location": "成都，中国",

    // About
    "about.eyebrow": "01 · 个人简介",
    "about.title": "关于我",
    "about.summaryLead": "四川大学<strong>计算机技术</strong>方向硕士研究生，研究经历涵盖<strong>边缘智能</strong>、<strong>联邦学习</strong>、<strong>计算机视觉</strong>与<strong>节能计算</strong>。",
    "about.summaryBody": "作为第一作者发表了半异步联邦原型学习与低功耗实时调度方向的同行评审工作。熟悉基于 PyTorch 的算法开发、异构边缘系统、DVFS 感知优化，以及大语言模型的微调与部署。",
    "about.interestsTitle": "研究兴趣",
    "about.interest1": "边缘智能",
    "about.interest2": "联邦学习与分布式学习",
    "about.interest3": "零样本工业异常检测",
    "about.interest4": "节能 AI 与实时系统",
    "about.interest5": "大语言模型评测、微调与部署",
    "about.interest6": "具身智能",

    // Education
    "edu.eyebrow": "02 · 教育背景",
    "edu.title": "教育经历",
    "edu.tagExpected": "在读",
    "edu.meng.degree": "计算机技术 · 工学硕士",
    "edu.meng.school": "四川大学 · 计算机学院 · 成都，中国",
    "edu.meng.gpa": "GPA：3.65 / 4.00。",
    "edu.meng.scholarship": "一等学业奖学金。",
    "edu.beng.degree": "计算机科学与技术 · 工学学士",
    "edu.beng.school": "四川大学 · 计算机学院 · 成都，中国",
    "edu.beng.gpa": "GPA：3.76 / 4.00；专业排名 38 / 318（前 12%）；保研排名 8 / 318。",
    "edu.beng.grad": "四川省优秀毕业生，2024。",

    // Research experience
    "research.eyebrow": "03 · 研究工作",
    "research.title": "研究经历",
    "badge.firstAuthor": "第一作者",
    "badge.openSource": "开源",
    "research.tmsc.title": "TMSC：零样本工业异常检测",
    "research.tmsc.role": "研究开发者 · <a class=\"card-link\" href=\"https://github.com/Mr-lwd/TMSC\" target=\"_blank\" rel=\"noopener\">项目仓库 ↗</a>",
    "research.tmsc.b1": "基于 <strong>DINOv3</strong> 与 <strong>CLIP</strong> 构建零样本异常检测流水线，融合多层表征、双分支提示适配器、跨模态注意力与三区域语义校准。",
    "research.fedsae.title": "FedSAE：半异步节能联邦原型学习",
    "research.fedsae.role": "第一作者 · 研究者 · 四川大学",
    "research.fedsae.b1": "设计了半异步 <strong>端—边—云联邦原型学习</strong> 框架，仅交换类级特征统计量，而非原始数据或完整模型参数。",
    "research.fedsae.b2": "在 <strong>NVIDIA Jetson TX2</strong> 边缘平台上进行实验，验证了框架动态 <strong>DVFS</strong> 机制的节能有效性。",
    "research.lpsafs.title": "LPSAFS：分段变频的低功耗调度",
    "research.lpsafs.role": "第一作者 · 研究者 · 四川大学",
    "research.lpsafs.b1": "面向离散 DVFS 状态、截止时限与可靠性约束下的周期实时任务，设计了基于<strong>最小松弛分配</strong>的分段变频调度算法。",

    // Publications
    "pubs.eyebrow": "04 · 学术成果",
    "pubs.title": "发表论文",
    "pubs.journalHead": "期刊论文",
    "pubs.confHead": "会议论文",
    "badge.journal": "期刊",
    "badge.majorRevision": "大修中",
    "badge.conference": "会议",

    // Professional experience
    "exp.eyebrow": "05 · 业界经历",
    "exp.title": "实习经历",
    "exp.tagInternship": "实习",
    "exp.role": "大语言模型算法研发实习生",
    "exp.org": "成都索贝 · 媒体智能实验室 · 成都，中国",
    "exp.b1": "构建并清洗面向 Story-to-Scene 生成、场景关键词抽取与镜头级画面描述任务的英文指令微调数据集；开发了翻译、溯源、去重与格式校验脚本。",
    "exp.b2": "使用 LLaMA-Factory 与 LoRA，在八卡 NVIDIA A800 服务器上微调并评测 <strong>Qwen-72B</strong>。",
    "exp.b3": "使用 <strong>vLLM</strong>、Flask 与 HTTP API 部署推理服务，并完成能力集成、API 文档与项目交接。",

    // Projects
    "proj.eyebrow": "06 · 代表项目",
    "proj.title": "代表项目",
    "proj.robot.title": "基于 OpenClaw 的移动机器人控制与视觉引导抓取",
    "proj.robot.badge": "系统集成",
    "proj.robot.role": "项目开发者 · <em>ROSMASTER M3 PRO</em>",
    "proj.robot.b1": "部署并配置基于 <strong>OpenClaw</strong> 的自然语言机器人控制平台，集成 MCP/FastMCP 与 <strong>ROS 2</strong>，实现对全向底盘、6 自由度机械臂与感知模块的工具化访问。",
    "proj.robot.b2": "集成并验证覆盖视觉定位、移动基座对齐、3D 抓取点估计、逆运动学控制与避碰回退的闭环 <strong>RGB-D 跟踪-抓取</strong>流程；调优抓取偏移并诊断视觉/深度定位误差。",
    "proj.medical.title": "基于 PaddlePaddle 的 3D 医学数据分析平台",
    "proj.medical.badge": "全国二等奖",
    "proj.medical.role": "主要开发者 · <em>第十二届中国软件杯</em>",
    "proj.medical.b1": "使用 <strong>Vue.js</strong>、Vuetify 与 VTK.js 开发医学平台、3D 影像工作台与 UI/UX；参与 Python/<strong>Django</strong> 后端与腾讯云 COS 集成。",
    "proj.medical.b2": "将 <strong>PaddlePaddle MedicalSeg</strong> 集成到覆盖医学影像上传、AI 辅助分割、3D 可视化与患者管理的端到端流程中。",
    "proj.tingyin.title": "听音：面向地震救援的深度学习声学生命探测",
    "proj.tingyin.badge": "国家级大创",
    "proj.tingyin.role": "核心成员 · <em>四川大学</em>",
    "proj.tingyin.b1": "负责移动应用开发、硬件可行性分析，并参与算法部署与端到端系统集成。",
    "proj.tingyin.b2": "集成 <strong>TSTNN</strong> 语音增强与 <strong>Whisper</strong> 语音识别；提前完成项目，并在 2023 年中国大学生计算机设计大赛四川省赛区获得一等奖。",

    // Skills
    "skills.eyebrow": "07 · 技能清单",
    "skills.title": "技术技能",
    "skills.label.programming": "编程语言",
    "skills.label.ml": "机器学习",
    "skills.label.edgeai": "边缘 AI",
    "skills.label.aidev": "AI 开发",
    "skills.label.languages": "语言能力",
    "skills.chip.federated": "联邦学习",
    "skills.chip.zsad": "零样本异常检测",
    "skills.chip.modelDeploy": "模型部署",
    "skills.chip.zh": "中文（母语）",
    "skills.chip.en": "英语（CET-4 / CET-6）",
    "skills.chip.ielts": "备考雅思",

    // Honors
    "honors.eyebrow": "08 · 荣誉奖项",
    "honors.title": "荣誉与奖励",
    "honors.graduate.title": "四川省优秀毕业生",
    "honors.graduate.org": "四川省",
    "honors.scholarship.title": "一等学业奖学金",
    "honors.scholarship.org": "四川大学",
    "honors.softwarecup.title": "全国二等奖",
    "honors.softwarecup.org": "第十二届中国软件杯",
    "honors.competition.title": "四川省赛区一等奖",
    "honors.competition.org": "中国大学生计算机设计大赛",
    "honors.merit.title": "学业优秀奖学金",
    "honors.merit.org": "四川大学",

    // Footer
    "footer.email": "邮箱",
    "footer.cv": "简历",
    "footer.copy": "Wendian Luo · 用心制作于中国成都。",

    // ARIA labels
    "aria.navToggle": "切换导航菜单",
    "aria.backToTop": "回到顶部",
    "aria.themeToggle": "切换配色主题",
    "aria.langToggle": "切换到英文"
  }
};
