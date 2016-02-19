# rise2016-website

Website for the EYP's Rise 2016 event

## Getting started

> This project is using Middleman 3.4.0. Learn more about this framework: [https://middlemanapp.com](https://middlemanapp.com)

Clone the repo and install dependencies:

```
git clone git@github.com:MathieuDebit/rise2016-website.git
cd rise2016-website
bundle install
```

That's it! Everyting you have to know about how to work with a Middleman project is in the official documentation: [https://middlemanapp.com/basics/install/](https://middlemanapp.com/basics/install/).

- Start the server by running the following command, then visit [http://localhost:4567/](http://localhost:4567/).

```
middleman
```

- To have the static app, build sources:

```
middleman build
```

## Staging deployment

Configure environment variables in `.env`:

```
AWS_BUCKET=
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```
---
Made with ♥ by [Mathieu Débit](http://www.twitter.com/MathieuDebit).
