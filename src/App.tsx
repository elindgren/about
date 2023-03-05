import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CVItem from './components/cv-item'
import Main from './components/main'
import Section from './components/section'
import SubSection from './components/sub-section'
import SkillsSubSection from './components/skills-subsection'
import SkillItem from './components/skill-item'
import ResearchItem from './components/research-item'
import Welcome from './components/welcome'

function App() {
    return (
        <div>
            <ToastContainer />
            <Main>
                <Welcome />
                <Section title={'Research'}>
                    <ResearchItem
                        title="GPUMD: A package for constructing accurate machine-learned potentials and performing highly efficient atomistic simulations"
                        authors="Zheyong Fan, Yanzhou Wang, Penghua Ying et al."
                        body={
                            <>
                                <span>
                                    {
                                        'I am one of the contributors to the GPUMD package. For this work, I have specifically been involved in developing the Python framework '
                                    }
                                </span>
                                <a
                                    className="underline hover:text-primary-content font-bold"
                                    href="https://calorine.materialsmodeling.org/"
                                >
                                    Calorine
                                </a>
                                <span> for interfacing with GPUMD.</span>
                            </>
                        }
                        uri="https://research.chalmers.se/publication/532345"
                        time="2022"
                        image="publications/gpumd.png"
                        type="Article"
                    />
                    <ResearchItem
                        title="Saliency mapping of RS-fMRI data in GCNs for sex and brain age prediction"
                        authors="Kevin Andersson and Eric Lindgren"
                        body="Master Thesis in Physics, hosted by Syntronic Research and Development. We investigated Graph Convolutional Neural Networks (GCNs) for predicting brain age and biological sex from fMRI scans of the human brain."
                        uri="https://hdl.handle.net/20.500.12380/302435"
                        time="2021"
                        image="publications/master_thesis.png"
                        type="Master thesis"
                    />
                </Section>
                <Section title={'CV'}>
                    <SubSection
                        title={'Education'}
                        image="images/south_korea.jpg"
                        imageTitle="South Korea"
                    >
                        <CVItem
                            title="Exchange Studies"
                            location="Seoul National University, South Korea"
                            time="2020-2020"
                        />
                        <CVItem
                            title="MSc Physics"
                            location="Chalmers University of Technology, Sweden"
                            time="2019-2021"
                        />
                        <CVItem
                            title="BSc Engineering Physics"
                            location="Chalmers University of Technology, Sweden"
                            time="2016-2019"
                        />
                    </SubSection>
                    <SubSection
                        title={'Professional appointments'}
                        image="images/yata.png"
                        imageTitle="Yata logo"
                    >
                        <CVItem
                            title="PhD Student in Computational Physics and Machine Learning"
                            location="Chalmers University of Technology, Gothenburg, Sweden"
                            time="2021-Current"
                        />
                        <CVItem
                            title="Master Thesis Project"
                            location="Syntronic AB, Gothenburg, Sweden"
                            time="2021"
                        />
                        <CVItem
                            title="Software developer, machine learning engineer"
                            location="Yata, Gothenburg, Sweden"
                            time="2019-Current"
                        />
                        <CVItem
                            title="Amanuensis"
                            location="Chalmers University of Technology, Gothenburg, Sweden"
                            time="2019"
                        />
                        <CVItem
                            title="Summer intern"
                            location="Volvo Cars, Gothenburg, Sweden"
                            time="2019"
                        />
                        <CVItem
                            title="Summer intern"
                            location="Volvo Cars, Gothenburg, Sweden"
                            time="2018"
                        />
                    </SubSection>
                </Section>
                <Section title={'Skills'}>
                    <SkillsSubSection
                        title={'Programming languages & frameworks'}
                        image={'images/hpc.png'}
                        imageTitle="HPC"
                    >
                        <SkillItem
                            title={'Data science'}
                            comment={'🐍'}
                            body={'Python, Tensorflow/Keras, Matlab '}
                        />
                        <SkillItem
                            title={'Software development'}
                            comment={'☕'}
                            body={'C, C++, CUDA, Java '}
                        />
                        <SkillItem
                            title={'Web development'}
                            comment={'🕸️'}
                            body={'JavaScript, React.js, Node.js, Tailwindcss, CSS, HTML, PHP'}
                        />
                        <SkillItem
                            title={'Lab & measurement software'}
                            comment={'🧪'}
                            body={'LabVIEW'}
                        />
                        <SkillItem
                            title={'Miscellanous'}
                            comment={'📜'}
                            body={'Latex, Mathematica, Android'}
                        />
                    </SkillsSubSection>
                    <SkillsSubSection title={'Languages'}>
                        <SkillItem title={'Swedish'} comment={'Native speaker'} />
                        <SkillItem title={'English'} comment={'Professional profiency'} />
                        <SkillItem title={'French'} comment={'Elementary'} />
                        <SkillItem title={'Korean'} comment={'Beginner'} />
                    </SkillsSubSection>
                    <SkillsSubSection
                        title={'Professional interests'}
                        image={'images/perylenes.png'}
                        imageTitle="Perylene"
                    >
                        <SkillItem
                            title={'Computational physics'}
                            body={
                                'The focus of my degree. Mostly atomistic simulations, both classical and quantum mechanical.'
                            }
                            comment={'🌈'}
                        />
                        <SkillItem
                            title={'High Performance Computing'}
                            body={
                                'I am really intrigued by the inner workings of computers, and I find it very interesting to optimise computer programs running on powerful hardware.'
                            }
                            comment={'🖥️'}
                        />
                        <SkillItem
                            title={'Machine Learning'}
                            body={
                                'This interest is interconnected with my interest in high performance computing. The combination of using powerful hardware together with large amounts of data is something that I find very intriguing.'
                            }
                            comment={'🤖'}
                        />
                        <SkillItem
                            title={'Medtech'}
                            body={
                                'I have long had an interest for the interface between biology and technology, and my master thesis project has been a great opportunity for nurturing that interest. The combination of cutting-edge technological research applied in a manner that could improve the quality of life for people is something that really motivates me.'
                            }
                            comment={'🔬'}
                        />
                        <SkillItem
                            title={'E-learning'}
                            body={
                                'I believe that most e-learning tools used today does not utilise the possibilities of modern technology to its fullest extent, and hence I find novel efforts in this area to be very interesting. '
                            }
                            comment={'📚'}
                        />
                    </SkillsSubSection>
                </Section>
            </Main>
        </div>
    )
}

export default App
