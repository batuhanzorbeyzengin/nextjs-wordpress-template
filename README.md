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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## TODO

- [x] Listing POSTs from WordPress
- [x] Making detail pages of listed POSTs
- [ ] Configuring the main menu to be executed by WordPress
- [ ] Having the logo manageable by wordpress
- [ ] Managing by WordPress with Head on the Next Js side
- [ ] Categorizing the articles