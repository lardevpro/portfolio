
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lardevpro.github.io/portfolio/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 982, hash: 'f7095e56d3685c47d65fb383cf7318f0f4daf5be7c2e62cc25b4f74b6cafd003', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1165, hash: '28aff5858ae92d77f862ef324ab71df9071c03aa07f480ec198704416a5e3904', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-G4HYYH4D.css': {size: 366, hash: 'yw+DCU4fvow', text: () => import('./assets-chunks/styles-G4HYYH4D_css.mjs').then(m => m.default)}
  },
};
