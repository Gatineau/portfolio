import JavaIcon from '/src/assets/java.svg?react'
import PythonIcon from '/src/assets/python.svg?react'
import GolangIcon from '/src/assets/go.svg?react'
import ReactIcon from '/src/assets/react.svg?react'
import AngularIcon from '/src/assets/angular.svg?react'
import PostgresqlIcon from '/src/assets/postgresql.svg?react'
import OracleIcon from '/src/assets/oracle.svg?react'
import MongodbIcon from '/src/assets/mongodb.svg?react'
import KafkaIcon from '/src/assets/kafka.svg?react'
import ApiIcon from '/src/assets/api.svg?react'
import GitIcon from '/src/assets/git.svg?react'
import JenkinsIcon from '/src/assets/jenkins.svg?react'
import SonarQubeIcon from '/src/assets/sonarqube.svg?react'
import DockerIcon from '/src/assets/docker.svg?react'
import AwsIcon from '/src/assets/aws.svg?react'

export const projects = [
    {
      title: "Ticketing API",
      description:
        "A lightweight microservice for handling support tickets, designed with Spring Boot. The API supports ticket creation, status management, filtering, and comment visibility based on user roles (agent/user), secured via API keys.",
      tech: "Java 21, Spring Boot, Spring Security, Docker, JUnit",
      link: "https://github.com/Gatineau/ticketing-api",
    },
    {
      title: "Hyrox Track",
      description:
        "Hyrox race management application: participant sign-up, timing checkpoints, and live ranking updates",
      tech: "Golang, React, gRPC",
      link: "https://github.com/Gatineau",
    },
    {
      title: "BlockSpin",
      description:
        "A decentralized lottery application leveraging blockchain technology to ensure transparency and fairness. Users can participate in lotteries by purchasing tickets with cryptocurrency, and winners are selected through a verifiable random function.",
      tech: "Solidity, Hardhat, Chainlink VRF, React.js, ethers.js, Ethereum, IPFS, The Graph",
      link: "https://github.com/Gatineau",
    },
    {
      title: "Dart finisher",
      description:
        "React application calculating the exhaustive list of dart checkout combinations. Implementation of an optimized backtracking algorithm.",
      tech: "React, TypeScript",
      link: "https://github.com/Gatineau/darts-finisher",
    },
  ];

export const skills = {
  "Languages & Frameworks": [
    { name: "Java - Spring Framework", icon : JavaIcon },
    { name: "Python - Django - Flask" , icon : PythonIcon},
    { name: "Golang", icon : GolangIcon },
    { name: "Angular", icon : AngularIcon },
    { name: "React", icon : ReactIcon },
  ],
  "Database, API & Messaging": [
    { name: "PostgreSQL", icon : PostgresqlIcon },
    { name: "Oracle", icon : OracleIcon },
    { name: "MongoDB", icon : MongodbIcon },
    { name: "Kafka - RabbitMQ", icon : KafkaIcon },
    { name: "REST API / SOAP API", icon : ApiIcon },
  ],
  "DevOps & Cloud": [
    { name: "Git", icon : GitIcon },
    { name: "Jenkins", icon : JenkinsIcon },
    { name: "SonarQube", icon : SonarQubeIcon },
    { name: "Docker", icon : DockerIcon },
    { name: "AWS", icon : AwsIcon },
  ],
};