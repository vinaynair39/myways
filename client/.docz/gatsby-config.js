const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Client',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'C:\\v2\\myways\\client\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Client',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\v2\\myways\\client',
          templates:
            'C:\\v2\\myways\\client\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\v2\\myways\\client\\.docz',
          cache: 'C:\\v2\\myways\\client\\.docz\\.cache',
          app: 'C:\\v2\\myways\\client\\.docz\\app',
          appPackageJson: 'C:\\v2\\myways\\client\\package.json',
          gatsbyConfig: 'C:\\v2\\myways\\client\\gatsby-config.js',
          gatsbyBrowser: 'C:\\v2\\myways\\client\\gatsby-browser.js',
          gatsbyNode: 'C:\\v2\\myways\\client\\gatsby-node.js',
          gatsbySSR: 'C:\\v2\\myways\\client\\gatsby-ssr.js',
          importsJs: 'C:\\v2\\myways\\client\\.docz\\app\\imports.js',
          rootJs: 'C:\\v2\\myways\\client\\.docz\\app\\root.jsx',
          indexJs: 'C:\\v2\\myways\\client\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\v2\\myways\\client\\.docz\\app\\index.html',
          db: 'C:\\v2\\myways\\client\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
