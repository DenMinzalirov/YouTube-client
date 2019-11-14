let page;
let toolTipView;
const container = document.querySelector('.result-container');

function toolTip() {
  toolTipView.innerHTML = '';
}

export default function pageControl() {
  page = document.querySelector('.page');
  toolTipView = document.querySelector('.tool-tip-view');
  if (document.documentElement.clientWidth <= 586) {
    const pageControlConst = 319;
    if (container.scrollLeft >= pageControlConst * 0) {
      page.innerHTML = 'Page 1';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > pageControlConst) {
      page.innerHTML = 'Page 2';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 2 * pageControlConst) {
      page.innerHTML = 'Page 3';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 3 * pageControlConst) {
      page.innerHTML = 'Page 4';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 4 * pageControlConst) {
      page.innerHTML = 'Page 5';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 5 * pageControlConst) {
      page.innerHTML = 'Page 6';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 6 * pageControlConst) {
      page.innerHTML = 'Page 7';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 7 * pageControlConst) {
      page.innerHTML = 'Page 8';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 8 * pageControlConst) {
      page.innerHTML = 'Page 9';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 9 * pageControlConst) {
      page.innerHTML = 'Page 10';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
  }
  if (document.documentElement.clientWidth < 1265 && document.documentElement.clientWidth > 586) {
    const pageControlConst = 600;
    if (container.scrollLeft >= pageControlConst * 0) {
      page.innerHTML = 'Page 1';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > pageControlConst) {
      page.innerHTML = 'Page 2';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 2 * pageControlConst) {
      page.innerHTML = 'Page 3';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 3 * pageControlConst) {
      page.innerHTML = 'Page 4';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 4 * pageControlConst) {
      page.innerHTML = 'Page 5';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 5 * pageControlConst) {
      page.innerHTML = 'Page 6';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 6 * pageControlConst) {
      page.innerHTML = 'Page 7';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 7 * pageControlConst) {
      page.innerHTML = 'Page 8';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 8 * pageControlConst) {
      page.innerHTML = 'Page 9';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 9 * pageControlConst) {
      page.innerHTML = 'Page 10';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
  }
  if (document.documentElement.clientWidth >= 1265) {
    const pageControlConst = 1200;
    if (container.scrollLeft >= pageControlConst * 0) {
      page.innerHTML = 'Page 1';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > pageControlConst) {
      page.innerHTML = 'Page 2';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 1300 + pageControlConst) {
      page.innerHTML = 'Page 3';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 2500 + pageControlConst) {
      page.innerHTML = 'Page 4';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 3700 + pageControlConst) {
      page.innerHTML = 'Page 5';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 4900 + pageControlConst) {
      page.innerHTML = 'Page 6';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 6100 + pageControlConst) {
      page.innerHTML = 'Page 7';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 7300 + pageControlConst) {
      page.innerHTML = 'Page 8';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 8500 + pageControlConst) {
      page.innerHTML = 'Page 9';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
    if (container.scrollLeft > 9700 + pageControlConst) {
      page.innerHTML = 'Page 10';
      toolTipView.innerHTML = page.innerHTML;
      setTimeout(toolTip, 1000);
    }
  }
}
