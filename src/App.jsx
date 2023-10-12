import React from 'react';
import './App.css';
import avatar from './assets/avatar.jpg'; // 使用require或import导入图片
// import paper_pic_1 from './assets/avatar.png';
// import paper_pic_2 from './assets/avatar.png';
import img_github from './assets/github.svg';
import img_twitter from './assets/twitter.svg';
import img_csdn from './assets/csdn.svg';
import img_google_scholar from './assets/googleScholar.svg';


function App() {
  // 示例数据，你需要替换成自己的信息
  const personalInfo = {
    name: '虞非凡',
    contact: 'yufeifan23@mails.ucas.ac.cn',
    location: '浙江 中国',
    school: '中国科学院大学',
    github: 'https://github.com/xxx',
    twitter: 'https://twitter.com/xxx',
    csdn: 'https://blog.csdn.net/xxx',
    googleScholar: 'https://scholar.google.com/citations?user=xxx&hl=en',

  };

  const educations = [
    '学士：阳明学院，阳明创新班（荣誉班级），工业工程专业，宁波大学，2019年9月至2023年6月',
    '博士：中国科学院宁波材料技术与工程研究所，机械电子工程专业，中国科学院大学，2023年9月至今',
  ];

  const honors = [
    '2023 年 05 月：美国大学生数学建模竞赛Honorable Mention',
    '2023 年 04 月：“互联网+”大学生创新创业大赛 国银奖',
    '2022 年 12 月：获浙江省政府奖学金',
    '2022 年 07 月：“互联网+”大学生创新创业大赛 浙江省金奖',
    '2022 年 07 月：“互联网+”大学生创新创业大赛 浙江省金钥匙奖',
    '2022 年 07 月：“挑战杯”中国大学生创业计划竞赛 浙江省铜奖',
    '2021 年 12 月：获浙江省政府奖学金',
    '2021 年 10 月：全国大学生数学建模竞赛 浙江省二等奖',
    '2021 年 08 月：担任华为耀星校园大使   ',
    '2021 年 07 月：长三角数学建模竞赛 二等奖',
    '2021 年 05 月：美国大学生数学建模竞赛Meritorious Winner',
    '2021 年 05 月：“挑战杯”大学生课外学术作品竞赛 浙江省一等奖',
    '2020 年 12 月：清华IE亮剑全国工业工程应用案例大赛 三等奖',
    '2020 年 12 月：获宁波大学二等奖学金',
    '2020 年 10 月：全国大学生数学建模竞赛 浙江省三等奖',
    '2020 年 10 月：担任“西门子”杯中国智能制造挑战赛 中国西部大使',
    '2020 年 10 月：担任“西门子”杯中国智能制造挑战赛 校园大使',
    '2020 年 06 月：获宁波大学阳明才能奖学金',
    '2020 年 05 月：美国大学生数学建模竞赛Successful Participant',
  ];


  // const academicAchievements = [
  //   {
  //     title: 'Cross-head Supervision for Crowd Counting with Noisy Annotations, ICASSP 2023',
  //     image: paper_pic_1,
  //     description: 'To address the prevalent issue of label noise in crowd counting datasets, we propose a dual-branch network using convolutional and transformer modules for mutual supervision. This learning paradigm effectively provides supervision in noisy regions, leading to improved counting accuracy.',
  //     paperLink: 'https://ieeexplore.ieee.org/document/10095636/',
  //     code: 'https://github.com/RaccoonDML/CHSNet'
  //   },
  //   {
  //     title: 'Adjustable Memory-efficient Image Super-resolution via Individual Kernel Sparsity, ACMMM 2022',
  //     image: paper_pic_2,
  //     description: "To abtain sparsed image super-resolution models, we introduce a dynamic threshold learning algorithm in which the threshold adaptively decays under the guidance of target sparsity. The proposed method can achieve parameter sparsity of 50% to 70% while maintaining the existing super-resolution model's accuracy.",
  //     paperLink: 'https://dl.acm.org/doi/10.1145/3503161.3547768',
  //     code: 'https://github.com/RaccoonDML/IKS'
  //   },
  // ];

  const papers = [
    '[1] Gao X, Yu F. Research on National Education System Based on Bayesian Back Propagation[C]//2021 International Conference on Education, Information Management and Service Science (EIMSS). IEEE, 2021: 244-248.',
    '[2] Zhang E, Yu F, Jiang T, et al. Common prosperity level evaluation: A comprehensive method based on probabilistic linguistic ordered weighted distance measure, prospect theory, and TOPSIS[J]. Frontiers in Psychology, 2023, 14: 1152333.',
    '[3] Yu F, Wang J, Chen X. Evaluating RNN and Its Improved Models for Lithium Battery SoH and BRL Prediction. (CISC2023录用)',
    '[4] Chen T, Chen X, Yu F, et al. MQB-RRT*: An improved path planning algorithm based on improving initial solution and fast convergence. (CISC2023录用)',
    '[5] 虞非凡, 陈新民, 王继强 等.基于前景理论概率语言组合TOPSIS综合评价方法的沿海省份航空产业评价. (在投)',
    '[6] Yu F, Cong W, Chen X, et al. Harnessing LSTM for Nonlinear Ship Deck Motion Prediction in UAV Autonomous Landing amidst High Sea States. (ICANDVC2023录用)',
    '[7] Xu F, Qiu J, Chen X, Lin Y, Yu F. Aircraft Anti-Skid Braking Nonlinear Control Based on ADRC. (ICANDVC2023录用)',
  ];

  const patents = [
    '[1]房玺正,曹均,王嘉豪,虞非凡等. 集成化轴瓦喷涂工艺设备及加工方法[P]. 浙江省：CN113426618B,2022-11-08.',
    '[2]房玺正,曹均,王嘉豪,虞非凡等. 适用于多种尺寸磁控轴瓦的夹具机构[P]. 浙江省：CN216098594U,2022-03-22.',
    '[3]房玺正,曹均,王嘉豪,虞非凡等. 轴瓦夹取紧固装置[P]. 浙江省：CN215037554U,2021-12-07.',
    '[4]房玺正,曹均,王嘉豪,虞非凡等. 适用于轴瓦的三维抓取机构[P]. 浙江省：CN214922205U,2021-11-30.',
    '[5]房玺正,曹均,王嘉豪,虞非凡等. 适用于轴瓦的三维抓取机构及方法[P]. 浙江省：CN112894862A,2021-06-04.',
    '[6]凌天舒,虞非凡,袁衍.机械运转控制信息化平台V1.0.2021SR1055071',
    '[7]凌子啸,虞非凡,凌天舒.自动化设备控制调整辅助管理软件V1.02022SR0608056',
    '[8]袁煜淇,胥力之,虞非凡.基于大数据的网络安全管理系统V1.0.2020SR0699620',
  ];


  const projects = [
    {
      title: '2023年9月至今，中国科学院大学，宁波材料技术与工程研究所，特种飞行器与系统工程团队，浙江',
      description: "研究内容：基于深度学习的无人机智能控制。研究指导人：王继强，陈新民，林跃",
    },
    {
      title: '2023年9月至今，浙江特种飞行器工程中心，浙江',
      description: "研究内容：高海情背景下的基于深度学习的无人机自主着舰技术。研究指导人：王继强，陈新民，林跃。研究成果：利用LSTM预测三个维度下的在高海情下的舰船甲板运动，并参与控制方向理论研究，产出2篇EI会议",
    },
    {
      title: '2022年12月至2023年8月，中国科学院大学科创计划项目，浙江',
      description: "研究内容：探究深度学习和无人机、智能控制的结合与应用方式。研究指导人：王继强。研究成果：利用LSTM等神经网络预测用于无人机的电池使用寿命和SoH,并参与基于蚁群算法的导航方向研究，产出2篇EI会议",
    },
    {
      title: '2021年10月至2023年3月，宁波大学机械工程与力学学院，浙江',
      description: "研究内容：将模糊决策与评价理论改进后应用与航空航天领域。研究指导人：余均合。研究成果：宁波大学本科毕业论文",
    },
    {
      title: '2021年10月至2023年3月，宁波大学商学院，浙江',
      description: "研究内容：探究系统工程中模糊决策与评价理论并进行改进。研究指导人：曾守桢。研究成果：在PLTOWD距离测度的基础上推导出基于前景理论的PLTOWD算子，出产一篇SCIQ1文章",
    },
    {
      title: '2020年10月至2021年10月，宁波大学先进储能技术与装备研究院，浙江',
      description: "研究内容：参与超级电容器器件的性能测试实验。研究指导人：阮殿波",
    },
    {
      title: '2020年9月至2021年6月，宁波大学机械工程与力学学院，浙江',
      description: "研究内容：参与汽车发动机轴瓦及其涂料研究。研究指导人：曹均。参与成果：参加多次大挑、小挑和互联网+竞赛，参与发表5项专利（涵公开），3项软件著作权",
    },
    {
      title: '2020年3月至2020年9月，宁波大学先进储能技术与装备研究院，浙江',
      description: "研究内容：参与电池等储能器件的深度学习寿命预测。研究指导人：林文文。参与成果：参加多次数学建模竞赛，并参与发表一篇EI会议",
    },
  ];

  const hobbies = [
    'Badminton',
    'Fitness',
    'Skiing',
    'Poker',
    'Reading',
  ];

  const Interests = [
    '系统工程',
    '空天海无人机的智能控制',
    '深度学习',
    '机器视觉',
  ];

  return (
    <div className='container w-full mx-auto'>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="container basis-1/4 bg-gradient-to-b from-gray-200 rounded-xl flex-col space-y-8 p-4 max-w-sm mx-auto">
          <img  src={avatar} className="mx-auto rounded-3xl shadow-xl" />
          <h1 className="text-2xl font-bold text-primary">{personalInfo.name}</h1>

          <div>
            <h2 className="text-lg font-bold">基本信息</h2>
            <div>
              <div>{personalInfo.school}</div>
              <div>{personalInfo.location}</div>
              <div>{personalInfo.contact}</div>
              <div className='flex flex-row justify-center mt-4'>
                <a href={personalInfo.googleScholar} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_google_scholar} alt='scholar'/></a>
                <a href={personalInfo.github} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_github} alt='github'/></a>
                <a href={personalInfo.twitter} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_twitter} alt='twitter'/></a>
                {/* <a href={personalInfo.csdn} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_csdn} alt='csdn'/></a> */}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">研究方向</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Interests.map((hobby, index) => (
                <div className="bg-slate-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>
{/* 
          <div>
            <h2 className="text-lg font-bold">兴趣爱好</h2>
            <div className='grid grid-cols-2 gap-4'>
              {hobbies.map((hobby, index) => (
                <div className="bg-zinc-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div> */}

        </div>

        <div class="container basis-3/4 rounded-xl text-left p-4 space-y-12">
          <section className="">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">教育背景</h2>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>{educations[0]}</li>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>{educations[1]}</li>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">奖项和荣誉</h2>
            {honors.map((award, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
            ))}
            {/* <div className='text-lg pt-2 pb-1 font-bold'>竞赛获奖</div>
            {awards.map((award, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
            ))} */}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">发表论文</h2>
            <div className="grid grid-cols-1 gap-2">
              {papers.map((paper, index) => (
                <div key={index} className="card rounded-lg shadow-md bg-gray-100 p-2 hover:bg-gray-300">{paper}</div>
              ))}
            </div>

            <div className='text-xl pt-8 pb-2 font-bold'>发明专利</div>
            <div className="grid grid-cols-1 gap-2">
              {patents.map((patent, index) => (
                <div key={index} className="card rounded-lg shadow-md bg-gray-100 p-2 hover:bg-gray-300">{patent}</div>
              ))}
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">科研经历</h2>
            <ul className="list-disc space-y-2">
              {projects.map((project, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <div key={index} className="text-gray-600">{project.description}</div>
                </div>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div >
  );
}

export default App;
