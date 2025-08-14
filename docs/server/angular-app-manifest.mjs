
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cinematic',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/cinematic/login",
    "route": "/cinematic"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/directors"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/home"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/actors"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/categories"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/history"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/login"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/register"
  },
  {
    "renderMode": 2,
    "route": "/cinematic/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 981, hash: 'bfe224ba7e0c89c6ff1aad36f5f046f0c73e56b6cd7f9a0650c5f76b0d4fe53e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1494, hash: 'bb348d30da0376b35c1af212fc4db50e5d236ed98019470798aaed0dd2db1a07', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'directors/index.html': {size: 7518, hash: '82ccb18b322bf817633f1fe375e28d5efc77336132bcb99540bda856f8ef10b6', text: () => import('./assets-chunks/directors_index_html.mjs').then(m => m.default)},
    'history/index.html': {size: 7518, hash: '82ccb18b322bf817633f1fe375e28d5efc77336132bcb99540bda856f8ef10b6', text: () => import('./assets-chunks/history_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 7518, hash: '82ccb18b322bf817633f1fe375e28d5efc77336132bcb99540bda856f8ef10b6', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'actors/index.html': {size: 7518, hash: '82ccb18b322bf817633f1fe375e28d5efc77336132bcb99540bda856f8ef10b6', text: () => import('./assets-chunks/actors_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7518, hash: '82ccb18b322bf817633f1fe375e28d5efc77336132bcb99540bda856f8ef10b6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7518, hash: '82ccb18b322bf817633f1fe375e28d5efc77336132bcb99540bda856f8ef10b6', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8105, hash: '30381a2f6ac406223b3d6a90ecbaca93d9ac89fbcce17aaaf4615d8880cb89c6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
