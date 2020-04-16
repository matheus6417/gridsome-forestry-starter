// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Regulus DT",
  siteUrl: `https://regulus-development.netlify.com/`,
  host: "0.0.0.0",
  siteDescription: "Creative technologist",
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'Wc9K60fbzMpYROvxdwZ7lAtt',
          version: 'draft'
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/home/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  } 
};
