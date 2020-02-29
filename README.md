![thirdave.network Logo Header](https://res.cloudinary.com/narative/image/upload/v1554161802/home-meta.jpg)

<br />

# thirdwave.network

thirdave.network builds brands, websites and products for growth-minded companies.. <br />
We’re a team with senior startup experience here to help your business take the next step.

#### Technology

thirdwave.network is powered by [Gatsby](gatsbyjs.org) that pulls data from [Contentful](https://www.contentful.com) and is hosted on [Netlify's](https://netlify.com). Apart from that, we aim to keep things as barebones as we can.

#### Running the code locally

```sh
yarn start
```

#### Building the website

```sh
yarn build
```

#### Deploying the website

Deployments are done using [Netlify](https://app.netlify.com/). You must be added to the thirdave.network Netlify organization to deploy.

```sh
# To deploy, commit and push to master
git push
```

### Heroku

#### Deploy

```heroku git:remote -a thirdwave-network-mailer```

```git subtree push --prefix src/server/ heroku master```

```heroku logs --tail```

### Getting started

[Contentful CLI](https://github.com/contentful/contentful-cli)
[Contentful exporting](https://github.com/contentful/contentful-cli/tree/master/docs/space/export)
[Contentful importing](https://github.com/contentful/contentful-cli/tree/master/docs/space/import)

#### Prerequisites

```sh
# To install the Contenful cli utilities globally
yarn global add contentful-cli

# Then, to link the utilties to your account
contentful login

# Then, you can select a space to use for the import/export
contentful space use
```

Note: Should you use an existing space, change its locale to English (en).

#### Exporting

```sh
# To export the latest Contentful content and assets run
contentful space export --space-id "txu76a3w3kbd" --include-drafts --download-assets --export-dir "./contentful-export"
```

#### Importing

In your project, ...

```sh
# In this repository
contentful space import --content-file ../contentful/contentful-export-vnhpjjd2fzcz-master-2019-07-04T16-29-36.json

# In a new repository
contentful space import --content-file
```

## License

BSD 3-Clause, see the [LICENSE](./LICENSE) file.
