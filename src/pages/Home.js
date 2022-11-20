import React from 'react'
import { Email, LinkedIn, GitHub} from '@material-ui/icons';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, This is Akshay</h2>
            <div className='prompt'>
                <p>I am a software engineer, keen on working new projects and solving challenging problems.</p>
                <a href="https://www.linkedin.com/in/akshayth"><LinkedIn/></a>
                <a href="mailto:akshay@aksact.dev"><Email/></a>
                <a href="https://github.com/popty"><GitHub/></a>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>
                        Java, Spring Boot, Kafka, MySQL, PostgreSQL, JUnit, Dynamo DB, AWS S3, Data Structures and Algorithms
                    </span>
                </li>
                <li>
                <h2>Front-End</h2>
                    <span>
                        ReactJS, Javascript, HTML, CSS, Tailwind CSS, NPM, Yarn
                    </span>
                </li>
                <li>
                <h2>Languages</h2>
                    <span>
                        Java, C++, Javascript, TypeScript, Go
                    </span>
                </li>
                <li>
                <h2>DevOps</h2>
                    <span>
                       CI/CD, Gitlab, Docker, Kubernetes
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home