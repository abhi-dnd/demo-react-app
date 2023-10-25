# Getting Started 

In codebase you might see different domains: `localhost1.com`, `localhost2.com`, this is to make sure we test multiple domains properly, you can achieve the same by going to your `etc/hosts` file and adding these new domains pointing to same `localhost`. Resource: https://stackoverflow.com/questions/17505835/how-do-i-set-up-the-hosts-file-for-multiple-domains-hosts-with-the-same-ip

If not, you can rename the api calls everywhere to `localhost`. 

## Available Scripts

Run React UI: `npm run start`

Run Node JS Server: `cd src/server`, then `node server.js`

### Make changes to UI

Album component is the main component being used in project: `src/Album.js`

### Make changes to Node APIs

`src/server/server.js`


### External project

Also need to run Client Onboarding locally to properly redirect: https://github.com/dyedurham/UH.ClientOnboarding.ui/tree/master
