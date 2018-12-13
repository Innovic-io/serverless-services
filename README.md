# Serverless services
Serverless Bitcoin, IP, Weather API in NodeJS

Run `npm install` to get started.
 
You need the Serverless Framework cli tool.


## Running locally:
You'll need the npm package to develop offline with `serverless-offline`: `npm install serverless-offline --save-dev`

To run locally execute in terminal: 

```IS_OFFLINE=true sls offline start --stage dev```

### Offline Scheduling 

`npm install serverless-offline-scheduler --save-dev`


### Deploying

Deploying: 

` serverless deploy`


Deploying a single function:

` serverless deploy function --function functionName
`

## Useful Resources

| Description | Link     |
| :------------- | :------------- |
| Cryptocurrency API KEY |  [cryptocurrency](https://api.blockchain.info/customer/signup) |
| OpenWeatherMap API KEY |  [openweathermap](https://openweathermap.org/api) |
| |
| Resources: |
| Intro       | [SitePoint](https://www.sitepoint.com/getting-started-node-js-aws-lambda/) |
| Serverless Docs | [AWS version](https://serverless.com/framework/docs/providers/aws/) |
| Official examples | [GH Repo](https://github.com/serverless/examples) |
| serverless offline plugin | [gh repo](https://github.com/dherault/serverless-offline) |
| serverless authentication boilerplate | [gh repo](https://github.com/laardee/serverless-authentication-boilerplate) |
| secured API example | [gh repo](https://github.com/pmuens/serverless-secured-api) |
| Environment Vars | [Serverless Docs](https://serverless.com/framework/docs/providers/aws/guide/variables/) |
| Scheduling on Serverless | [docs](https://serverless.com/framework/docs/providers/aws/events/schedule/) |
