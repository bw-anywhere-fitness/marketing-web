
class Tabs {
  constructor(tabContainer) {
    this.tabContainer = tabContainer;
    this.tabLinks = Array.from(this.tabContainer.querySelectorAll(`.tab-link`));
    this.tabItems = Array.from(this.tabContainer.querySelectorAll(`a`));
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

function createItem(member) {
  const anchor = document.createElement(`a`);
  anchor.setAttribute(`data-info`, member.role);
  anchor.setAttribute(`target`, `_blank`);
  anchor.setAttribute(`href`, member.url);
  const item = document.createElement(`div`);
  item.classList.add(`tab-item`);
  const img = document.createElement(`img`);
  img.src = member.pic;
  img.alt = `Display Photo`;
  const roleDiv = document.createElement(`div`);
  roleDiv.classList.add(`role`);
  const p1 = document.createElement(`p`);
  const p2 = document.createElement(`p`);
  const label1 = document.createElement(`span`);
  label1.classList.add('label');
  label1.textContent = `Name:`;
  const label2 = document.createElement(`span`);
  label2.classList.add('label');
  label2.textContent = `Role:`;
  const memRole = document.createElement(`span`);
  memRole.classList.add(`member-info`);
  memRole.textContent = roles[member.role];
  const memName = document.createElement(`span`);
  memName.classList.add(`member-info`);
  memName.textContent = member.name;

  p1.appendChild(label1);
  p1.appendChild(memName);
  p2.appendChild(label2);
  p2.appendChild(memRole);
  roleDiv.appendChild(p1);
  roleDiv.appendChild(p2);
  item.appendChild(img);
  item.appendChild(roleDiv);
  anchor.appendChild(item);

  document.querySelector(`.tab-content`).appendChild(anchor);
}

const roles = {
  lead: `Team Lead`,
  ui: `UI/UX Dev`,
  fe: `Frontend Dev`,
  be: `Backend Dev`,
  ios: `iOS Dev`,
}

const member = {
  name: `Rodean, Fraser`,
  pic: `img/dev-rodean.png`,
  role: `be`,
  url: `https://github.com/deanovision`,
}
createItem(member);

const container = document.querySelector(`.team-group`);
new Tabs(container);
