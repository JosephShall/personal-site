import Head from "next/head";
import { IoBookOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Yusuf ŞAL Resume</title>
      </Head>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>


        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <MdWorkOutline />
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Lead Software Engineer — Human Resources Office Of Presidency Of Turkey
              </h4>
              <span>July 2024 — Present</span>
              <p className="timeline-text">
                Led the development of a national internship application platform handling thousands of daily requests. Implemented scalable architecture with PostgREST and serverless functions. Built a CMS for fast content updates while maintaining SEO, and created a VR app to support career guidance for youth.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Senior Full Stack Developer — Panteon Games</h4>
              <span>October 2023 — July 2024</span>
              <p className="timeline-text">
                Maintained and updated game configuration files and managed scalable game server orchestration. Built a React-based admin panel for A/B testing and a backend in C# to handle core game logic and data operations.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Full Stack Developer — Freelance</h4>
              <span>October 2021 — October 2023</span>
              <p className="timeline-text">
                Delivered production-level mobile apps, dashboards, and full-stack platforms using Flutter, React, NestJS, and MongoDB. Notable projects include a meditation app and a recipe CMS app. Designed and handed off a complete architecture for a scooter-sharing app.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Developer — Endeksa</h4>
              <span>January 2019 — August 2021</span>
              <p className="timeline-text">
                Built scalable frontend and backend solutions with React, React Native, .NET, and SQL Server. Integrated machine learning data, created robust pipelines with Docker, Redis, RabbitMQ, and practiced DDD in .NET services.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My Skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Mobile Development</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Backend Development</h5>
                <data value="95">95%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "95%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Frontend Development</h5>
                <data value="85">85%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">JavaScript / TypeScript</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Dart / Flutter</h5>
                <data value="85">85%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">HTML & CSS</h5>
                <data value="80">80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">C# / .NET</h5>
                <data value="85">85%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Scalability & Architecture</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Databases</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
      
    </>
  );
}
