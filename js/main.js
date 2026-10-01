// js/main.js

import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

const header = document.querySelector('#siteHeader');
const footer = document.querySelector('#siteFooter');

header.append(renderHeader());
footer.append(renderFooter());
