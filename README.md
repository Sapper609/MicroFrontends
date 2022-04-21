# Micro FrontEnd Architecture
Micro frontend is an extended terminology from micro services. It is the concept of hosting independent front end applications wrapped in a decoupled shell like framework. It is a great way to manage development complexity by splitting products up into smaller, simpler applications which can be delivered by independent, autonomous teams. 

There are many ways to achieve this hosted architecture, one methodology is using the framework **Single SPA**. 

# Setup
This repository uses **Docker** to run all of its code. To run this repository, please do the following steps
1. Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) downloaded.
2. Clone this repository
3. Open a command line to the root of this repository and run the following command
   1. `docker-compose up -d`
4. navigate to http://localhost:8080

# Remarks
This repository is a demonstration on how to use SingleSPA in a monolithic PHP application and inject a React based project. To read more about the underlying technologies used in this repository, click on the following links
- [Single SPA Website](https://single-spa.js.org/)
- [Docker Website](https://www.docker.com/)
- [React Website](https://reactjs.org/)
- [Monolithic vs Micro Frontend](https://micro-frontends.org/)
- [Docker Hub](https://hub.docker.com/)