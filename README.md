The purpose of this repo is to create a WordPress management panel, next js front-end managed structure.

## Dependencies
[WordPress](https://wordpress.org/download/) 6.2.2 +

[Nextjs](https://nextjs.org/docs/getting-started/installation) 13.4.7 +

[Nodejs](https://nodejs.org/en) 16.8+

## Getting Started

First, after installing the packages with ``yarn``, create an ``.env`` file and pass the value found in env-template to it. You need to install a wordpress in your local environment.

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

How to run project with Dockerfile:

```bash
docker build -t next-wp-template .
```
```bash
docker run -p 3000:3000 next-wp-template
```

After that, you should be able to access from http://localhost:3000. If the 3000 port is used by another application in your local environment, it will be sufficient to simply change the port we mapped in the docker run command. To give an example:

```bash
docker run -p 3001:3000 next-wp-template
```

Thus, you can now access the project from the http://localhost:3001 port.

## TODO

- [x] Listing POSTs from WordPress
- [x] Making detail pages of listed POSTs
- [ ] Configuring the main menu to be executed by WordPress
- [ ] Having the logo manageable by wordpress
- [ ] Managing by WordPress with Head on the Next Js side
- [ ] Categorizing the articles