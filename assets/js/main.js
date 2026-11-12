(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const config = window.PORTFOLIO_CONFIG || {};
  const profileLink = document.getElementById('github-profile-link');
  if (profileLink && config.githubProfile) {
    profileLink.href = config.githubProfile;
    profileLink.hidden = false;
  }

  document.querySelectorAll('[data-repo]').forEach(link => {
    const repoUrl = config.projectRepos && config.projectRepos[link.dataset.repo];
    if (repoUrl) {
      link.href = repoUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.hidden = false;
    }
  });
})();
