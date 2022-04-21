# Micro FrontEnd Architecture
Micro frontend is an extended terminology from micro services. It is the concept of hosting independent front end applications wrapped in a decoupled shell like framework. It is a great way to manage development complexity by splitting products up into smaller, simpler applications which can be delivered by independent, autonomous teams. 

There are many ways to achieve this hosted architecture, one methodology is using the framework **Single SPA**. 

# Setup
This repository uses **Docker** to run all of its code. To run this repository, please do the following steps
1. Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) downloaded.
2. Clone this repository
3. Open a command line to the root of this repository and run the following command
   1. `docker-compose up -d`
4. navigate to http://localhost:8081

# Single SPA
Single SPA is a framework for bringing together multiple javascript based micro frontends in a single hosted application. Single spa can be used to bootstrap a new application from the ground up, or can wrap an existing monolithic application to slowly inject independently hosted applications. 

> [SPA Explained](https://youtu.be/L4jqow7NTVg)

Single SPA can be broken down into three major components
- Root Configurations
- Micro Applications
- Utility Applications

the root configuration and micro application components are **mandatory** components, where as the utility applications are **optional**, but recommended.

## Root Configuration
The root configuration is the core definition of the SingleSPA framework. This is the *how* the applications are wired together. The root configurations are pieced together by three major components.
- System Import Map
- Configuration Script
- Application Layout (Optional)

###  System Import Map
the system import map is a embedded script that pulls in any shared javascript files, and path locations to all hosted applications. Wherever the main applications index.html is going to reside, the system import map has to be there. When using SingleSPA, there are two places the index.html can be.
1. Monolithic: Wrapping an existing monolithic applications index.html with a SingleSPA wrapper and inject the system import map in there

> this repository is doing that using PHP as the hosted application [here](php/src/views/layouts/spa.php)

1. Root Config: Having the root config host the entry point and mount the index.html for the application. This is another way for the application to have a hosted *shell* like architecture. 

> Although this repository is not using this technique, an example file is [here](root-config/src/index.ejs)

Once the Import map is injected, the next major component is to add the following import script in the body of your template.

`System.import('@{org}/{app}-config');`

>example can be seen [here](php/src/views/layouts/spa.php)

### Configuration Script
The system import script above is pointing to the root configuration script. This script is the orchestration script. This script takes all of the named applications and registers them to the system export. click [here](root-config/src/mfe-root-config.js) to see how this repository is configuring the system root configuration. 

You will notice that all of the applications have an **mfe** in the beginning. that is this repositories "organization" name. In order for SingleSPA to register the applications properly, an org needs to be present, and uniform, between all of the applications. 


