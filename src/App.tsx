import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CVItem from './components/cv-item'
import Main from './components/main'
import Section from './components/section'
import SubSection from './components/sub-section'
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
                    <SubSection title={'Master Thesis'}>
                        <ResearchItem
                            title="Saliency mapping of RS-fMRI data in GCNs for sex and brain age prediction"
                            body="Master Thesis in Physics, hosted by Syntronic Research and Development. Together with Kevin Andersson, we investigated Graph Convolutional Neural Networks (GCNs) for predicting brain age and biological sex from fMRI scans of the human brain."
                            uri="https://hdl.handle.net/20.500.12380/302435"
                            time="2020"
                            image="publications/master_thesis"
                            abstract="Insight into how biological sex and healthy ageing affects the human brain are important for an increased understanding of the brain. Healthy ageing insights are also useful for clinical applications, for instance in identifying unhealthy ageing due to neurodegenerative disease. To this end, several studies in the last few years have used machine learning methods on neuroscientific data to predict subject sex and brain age. One particularly interesting approach has been to represent functionally connected networks in the brain as graphs, and apply Graph Convolutional Networks (GCNs). To investigate which functional brain networks are connected with sex and age, we develop and analyse GCN-based models that predict sex and age from resting-state fMRI data. The analysis of the models is done using saliency mapping techniques that give insight into which functional brain networks in the data are relevant for the predictions. With this approach, we obtain a sex prediction accuracy of up to 79% and an age prediction MAE of 5.9 years. Furthermore, we find indications that the Somatomotor Medial Network and the cerebellum are among the more important functional brain networks for predicting sex and brain age."
                        />
                    </SubSection>
                </Section>
                <Section title={'CV'}>
                    <SubSection title={'Education'}>
                        <CVItem
                            title="Exchange Studies"
                            location="Seoul National University, South Korea"
                            time="2020-2020"
                            body="Enrolled at the College of Natural Sciences from February to June 2020, studying
                        computer science, computational bioinformatics and computational physics."
                        />
                        <CVItem
                            title="MSc"
                            location="Chalmers University of Technology, Sweden"
                            time="2019-2021"
                            body="Latter part of ''civilingenjörsexamen''. My studies focuses on computational methods such as artificial neural networks (ANNs), statistical analysis and density functional theory (DFT), as applied on problems in various areas of physics."
                        />
                        <CVItem
                            title="BSc"
                            location="Chalmers University of Technology, Sweden"
                            time="2016-2019"
                            body="Part of a five year programme for a ''civilingenjörsexamen'' in Swedish. My bachelor studies focused in building a solid foundation in math and physics, as well as in experimental physics."
                        />
                    </SubSection>
                    <SubSection title={'Professional appointments'}>
                        <CVItem
                            title="PhD Student in Computational Physics and Machine Learning"
                            location="Chalmers University of Technology, Gothenburg, Sweden"
                            time="2021-Current"
                            body="I'm developing a framework to model the interaction between molecules, using molecular simulations and machine learning. I specifically focus on molecules that, among other applications, are relevant in the development of more efficient solar panels.

                            As part of my education, I'm also involved in the teaching of students at the Bachelor and Masters level. I primarily teach in courses related to the topics of machine learning and computational physics."
                        />
                        <CVItem
                            title="Master Thesis Project"
                            location="Syntronic AB, Gothenburg, Sweden"
                            time="2021"
                            body="Master Thesis project with the aim of applying neural networks and machine learning methods based on graph theory on data over the functional behavior of the human brain. Specifically, we are applying graph convolutional neural networks (GCNs) and population graphs on fMRI brain networks in order to classify and understand the ageing of the human brain."
                        />
                        <CVItem
                            title="Software developer, machine learning engineer"
                            location="Yata, Gothenburg, Sweden"
                            time="2019-Current"
                            body="Yata is a project founded by and driven by me and a group of friends. The goal of the project is to improve digital learning for both students and teachers, which we primarily do through our study environment Yata. Yata is a webpage where students and teachers can interact; students can do home exercises and ask questions, whilst teachers can interact with the students and monitor their progress. My focus has been on frontend development of the webpage, and on machine learning and data analysis of the students' study patterns. This project is a continuation of the Bachelor thesis project that I and my fellow project members completed in the spring of 2019, in which we developed a basic version of the Yata application, as well as studying the connection between students' study patterns and their grades. This project is currently being used in courses at Chalmers University of Technology."
                        />
                        <CVItem
                            title="Amanuensis"
                            location="Chalmers University of Technology, Gothenburg, Sweden"
                            time="2019"
                            body="Temporary employment as a part of the Yata project."
                        />
                        <CVItem
                            title="Summer intern"
                            location="Volvo Cars, Gothenburg, Sweden"
                            time="2019"
                            body="I worked in an agile software development team as a summer intern. Specifically, I continued development of a system for automatic logging of communications between in-car components."
                        />
                        <CVItem
                            title="Amanuensis"
                            location="Volvo Cars, Gothenburg, Sweden"
                            time="2018"
                            body="During the summer of 2018 I worked as a summer intern at Volvo Cars in Gothenburg, where I developed a measurement application for automatic measurements on DAB-radio in LabVIEW."
                        />
                    </SubSection>
                </Section>
                <Section title={'Skills'}>
                    <SubSection title={'Programming languages & frameworks 🖥️'}>
                        <SkillItem
                            title={'Data science 🤖'}
                            body={'Python 🐍, Tensorflow/Keras, Matlab '}
                        />
                        <SkillItem title={'Software development ☕'} body={'C, Java '} />
                        <SkillItem
                            title={'Web development 🕸️'}
                            body={'JavaScript, React.js, Node.js, Tailwindcss, CSS, HTML, PHP'}
                        />
                        <SkillItem title={'Lab & measurement software 🧪'} body={'LabVIEW'} />
                        <SkillItem title={'Miscellanous 📜'} body={'Latex, Mathematica, Android'} />
                    </SubSection>
                    <SubSection title={'Languages'}>
                        <SkillItem title={'Swedish'} body={'Fluent'} comment={'Native speaker'} />
                        <SkillItem
                            title={'English'}
                            body={'Fluent'}
                            comment={'Professional profiency'}
                        />
                        <SkillItem
                            title={'French'}
                            body={'Elementary'}
                            comment={'Courses during middle and high school'}
                        />
                        <SkillItem
                            title={'Korean'}
                            body={'Beginner'}
                            comment={'One course equivalent to 7.5 ECTS'}
                        />
                    </SubSection>
                    <SubSection title={'Professional interests'}>
                        <SkillItem
                            title={'Computational physics'}
                            body={
                                'The focus of my degree. Mostly atomistic simulations, both classical and quantum mechanical.'
                            }
                            comment={''}
                        />
                        <SkillItem
                            title={'High Performance Computing'}
                            body={
                                'I am really intrigued by the inner workings of computers, and I find it very interesting to optimise computer programs running on powerful hardware.'
                            }
                            comment={''}
                        />
                        <SkillItem
                            title={'Machine Learning'}
                            body={
                                'This interest is interconnected with my interest in high performance computing. The combination of using powerful hardware together with large amounts of data is something that I find very intriguing.'
                            }
                            comment={''}
                        />
                        <SkillItem
                            title={'Medtech'}
                            body={
                                'I have long had an interest for the interface between biology and technology, and my master thesis project has been a great opportunity for nurturing that interest. The combination of cutting-edge technological research applied in a manner that could improve the quality of life for people is something that really motivates me.'
                            }
                            comment={''}
                        />
                        <SkillItem
                            title={'E-learning'}
                            body={
                                'I believe that most e-learning tools used today does not utilise the possibilities of modern technology to its fullest extent, and hence I find novel efforts in this area to be very interesting. '
                            }
                            comment={''}
                        />
                    </SubSection>
                </Section>
            </Main>
        </div>
    )
}

export default App
