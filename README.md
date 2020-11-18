# Gatsby site for datadiversitykids.org map app

## Contributing

### Branches

- Check out a new branch from `master` to make changes.
- Push your new branch up and create a pull request back into `master`.
- To stage changes, merge `master` into `staging`.
- To move changes to production, merge `master` into `production`.

## Development Practices

- Code Formatting: [Prettier](https://prettier.io/) (using
  .prettierrc config)
  - [Atom plugin](https://atom.io/packages/prettier-atom)
  - [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Prefer functional components using hooks instead of class
  based components

All modules should:

- Contain an `index.js` the exports any components required
  by other modules

All components should:

- Should opt to use functional components with hooks over
  class components
- Have a `Component.md` that document example usage
- document props accepted using `Component.propTypes`
- provide default props via `Component.defaultProps`
- Components are styled using Material UI's theme, Material UI's theme overrides, and Material UI's `makeStyles()`.
- Use Material UI for page elements. Investigate existing Material UI components before creating new comopnents.

## Gatsby-Specific

- All language strings used in Gatsby pages (ie. not passed into the explorer) should be passed to the page via GraphQL queries. If this is not done then implementing the CMS later is a real b****.
- All images in custom page templates should be rendered using `gatsby-image` or `gatsby-background-image` and the images themselves should be passed to these GraphQL queries. Both of these plugins accept a `srcSet` obtainable only from GraphQL. 
  - https://www.gatsbyjs.com/plugins/gatsby-image/
  - https://www.gatsbyjs.com/plugins/gatsby-background-image/?=background
- Follow the [configuration and theming docs for the starter theme](https://gatsby-starter-hyperobjekt.netlify.app/).

## Visual Style Guide

The client has a [very thorough style guide](https://drive.google.com/drive/folders/1eRv3la42eC-Y2hPqY-rB6qQ4h-Vv7AQS) with many specifications that pertain to maps and graphs. Our work should conform to this style guide, exceptions should be approved by the client.

## Process.env

When developing locally you need a `.env.development` file with 3 values: 
```
GATSBY_MAPBOX_USER=***
GATSBY_MAPBOX_API_TOKEN=***
NODE_ENV=development
```
