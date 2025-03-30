/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import csharpIcon from "../public/csharp.svg";
import flutterIcon from "../public/flutter.png";
import mobileDevIcon from "../public/icon-app.svg";
import webDevIcon from "../public/icon-dev.svg";
import nextjsIcon from "../public/nextjs.svg";
import reactIcon from "../public/react.png";
import databaseIcon from "../public/database.svg";
import serverIcon from "../public/server.svg";

function CardItem({ image, title, content }: { image: any; title: string; content: string }) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image src={image} width={40} alt={title} />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>

        <p className="service-item-text">{content}</p>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Yusuf ŞAL</title>
      </Head>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm a passionate and versatile software engineer with hands-on experience in building
            scalable, high-performance systems across frontend, backend, mobile, and even immersive
            technologies like VR. Over the years, I’ve contributed to projects ranging from
            national-scale government platforms to startups, freelance apps, and innovative personal
            ventures. My work spans technologies such as React, React Native, .NET, Flutter, NestJS,
            PostgREST, Redis, RabbitMQ, and more. I’ve led development teams, architected full-stack
            systems, and built everything from CMS tools and admin dashboards to VR career guidance
            apps and meditation platforms published on the App Store and Google Play. What drives me
            is building meaningful, efficient, and user-centered software — whether I’m optimizing
            backend pipelines, crafting intuitive user interfaces, or mentoring teammates. I enjoy
            taking complex problems and turning them into elegant solutions that make a real impact.
            Feel free to explore my portfolio and reach out if you’d like to collaborate or just
            talk tech! 
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What im doing</h3>

          <ul className="service-list">
            <CardItem
              title="Frontend Web Development"
              content="I build robust, interactive web applications using React, Node.js, TypeScript, and Next.js—applying modern best practices to deliver user-friendly interfaces and seamless experiences."
              image={webDevIcon}
            />
            <CardItem
              title="Backend Web Development"
              content="I develop secure, high-performance server-side applications using Node.js, TypeScript, NestJS, MongoDB, and PostgreSQL. My focus is on creating scalable architectures, clean code, and efficient data handling."
              image={webDevIcon}
            />
            <CardItem
              title="Mobile App Development"
              content="I create cross-platform mobile apps for iOS and Android using Flutter, emphasizing performance, intuitive UI, and consistent user experiences across devices."
              image={mobileDevIcon}
            />
          </ul>
        </section>

        <section className="service">
          <h3 className="h3 service-title">Tech Stack</h3>

          <ul className="service-list">
            <CardItem
              title="Scalability & Architecture"
              content="I design systems with scalability in mind, using tools like RabbitMQ for asynchronous communication, Docker for containerization, Redis for caching, InfluxDB for time-series data, and serverless functions to optimize cost and performance under load."
              image={serverIcon}
            />
            <CardItem
              title="Databases"
              content="I work with a wide range of databases including MongoDB, PostgreSQL, and SQL Server for various use cases—whether it's document storage, relational data, or analytics. I also utilize Redis for high-speed caching and session storage."
              image={databaseIcon}
            />
            <CardItem
              title="C# / .NET"
              content="I develop C# backend applications, especially within the .NET ecosystem, using Domain-Driven Design (DDD) principles to build maintainable, testable, and high-performance services and APIs."
              image={csharpIcon}
            />
            <CardItem
              title="ReactJS"
              content="I use React to create dynamic, data-driven frontend applications—focusing on responsive UIs, efficient state management, and engaging user interactions."
              image={reactIcon}
            />
            <CardItem
              title="NextJS"
              content="I build SEO-friendly, server-side rendered web applications using Next.js and TypeScript, delivering fast, secure, and accessible user experiences."
              image={nextjsIcon}
            />
            <CardItem
              title="Flutter"
              content="I leverage Flutter to build high-performance Android and iOS apps, ensuring smooth animations, responsive designs, and rapid development cycles."
              image={flutterIcon}
            />
          </ul>
        </section>
      </article>
    </>
  );
}
