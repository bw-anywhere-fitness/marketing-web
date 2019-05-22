
class Tabs {
  constructor(tabContainer) {
    this.tabContainer = tabContainer;
    this.tabLinks = Array.from(this.tabContainer.querySelectorAll(`.tab-link`));
    this.tabItems = Array.from(this.tabContainer.querySelectorAll(`.tab-item`));
    this.activeLink = this.tabContainer.querySelector(`.tab-link[data-info="all"]`);
    this.activeTab = this.activeLink.dataset.info;

    this.activeLink.classList.add(`active`);
    this.tabLinks.forEach(link => link.addEventListener(`click`, this.selectTab));
  }

  selectTab = (e) => {
    this.activeLink = e.target;
    this.activeTab = this.activeLink.dataset.info;
    this.clearTab();
    this.activeLink.classList.add(`active`);

    if (this.activeTab !== `all`){
      //console.dir(this.tabItems);
      const selectedItems = this.tabItems.filter(item => item.dataset.info === this.activeTab);
      selectedItems.forEach(this.renderItems);
    } else {
      this.tabItems.forEach(this.renderItems);
    }
  }

  clearTab() {
    this.tabLinks.forEach(link => link.classList.remove(`active`));
    this.tabItems.forEach(item => item.style.display = `none`);
  }

  renderItems(item) {
    item.style.display = `flex`
    item.style.opacity = 0;
    TweenLite.to(item, 1.5, {opacity: 1});
  }
}

const container = document.querySelector(`.team-group`);
new Tabs(container);
