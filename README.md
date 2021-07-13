## Tempest Blown with the Wind

The official website of Tempest Squadron. Used for generating squadron mailers.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Clone the project, install the dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Development

To modify the website to your own squadron, try modifying the contents of [./config.js](./config.js) and
[./components/styles.js](./components/styles.js).

To create a new report, copy an existing one and change the words and data. It's easy! Then you can visit
the url of the report you created (such as [/reports/11](http://localhost:3000/reports/11)) and select
and copy all of the content to your favorite email client.

(You may be wondering why the styles are inline instead of doing something sane like CSS or SASS - that's
because these reports are largely emailed, and inline styles are the best way to handle the biggest number
of email clients. Sorry for the inconvenience. I tried to at least make it feel like CSS.)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## To Do

* Competitions page scraper instead of manually copying competitions
* Squadron page scraper to read extra pilot data
* More styling

