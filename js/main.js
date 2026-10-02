// js/main.js

import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderShareButton } from './components/share.js';
import { renderBackButton } from './components/back-to-home-btn.js';

const header = document.querySelector('#siteHeader');
const footer = document.querySelector('#siteFooter');
const shareContainer = document.querySelector('#shareContainer');
const backBtnPlaceholder = document.querySelector('#shareBackBtn');

if (header) {
  header.append(renderHeader());
}

if (footer) {
  footer.append(renderFooter());
}

if (shareContainer) {
  shareContainer.append(renderShareButton());
}

if (backBtnPlaceholder) {
  backBtnPlaceholder.append(renderBackButton());
}
