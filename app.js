(function () {
  'use strict';

  var output = document.getElementById('output');
  var countInput = document.getElementById('count');
  var generateBtn = document.getElementById('generate');
  var resetBtn = document.getElementById('reset');
  var lastGeneratedIdeas = [];

  function getText(key) {
    return window.IdeaGeneratorI18n ? window.IdeaGeneratorI18n.getText(key) : key;
  }

  function renderCard(idea, index) {
    var article = document.createElement('article');
    article.className = 'idea-card';
    article.innerHTML =
      '<span class="idea-number">' + String(index + 1).padStart(2, '0') + '</span>' +
      '<h2 class="idea-title">' + escapeHtml(idea.title) + '</h2>' +
      '<div class="card-row">' +
        '<span class="card-label">' + escapeHtml(getText('cardWhat')) + '</span>' +
        '<p class="card-value">' + escapeHtml(idea.description) + '</p>' +
      '</div>' +
      '<div class="card-row">' +
        '<span class="card-label">' + escapeHtml(getText('cardSkills')) + '</span>' +
        '<p class="card-value">' + escapeHtml(idea.skills) + '</p>' +
      '</div>' +
      '<div class="card-row">' +
        '<span class="card-label">' + escapeHtml(getText('cardWhy')) + '</span>' +
        '<p class="card-value">' + escapeHtml(idea.benefit) + '</p>' +
      '</div>';
    return article;
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderOutput(ideas, isEmptyState) {
    output.innerHTML = '';
    if (isEmptyState) {
      var p = document.createElement('p');
      p.className = 'empty-state';
      p.textContent = getText('emptyState');
      output.appendChild(p);
      return;
    }
    ideas.forEach(function (idea, i) {
      output.appendChild(renderCard(idea, i));
    });
  }

  function runGenerate() {
    var count = Math.min(20, Math.max(1, parseInt(countInput.value, 10) || 5));
    countInput.value = count;
    var lang = window.IdeaGeneratorI18n ? window.IdeaGeneratorI18n.getLanguage() : 'en';
    var difficultyEl = document.getElementById('difficulty');
    var topicEl = document.getElementById('topic');
    var filters = {
      difficulty: (difficultyEl && difficultyEl.value) || null,
      topic: (topicEl && topicEl.value) || null
    };
    var ideas = window.IdeaGenerator.generate(count, lang, filters);
    lastGeneratedIdeas = ideas;
    renderOutput(ideas, false);
  }

  function runReset() {
    window.IdeaGenerator.resetSeen();
    lastGeneratedIdeas = [];
    renderOutput([], true);
  }

  function onLanguageChange() {
    runGenerate();
  }

  function updateThemeIcon() {
    var theme = window.IdeaGeneratorI18n.getTheme();
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var moon = btn.querySelector('.theme-icon-moon');
    var sun = btn.querySelector('.theme-icon-sun');
    var isDark = theme === 'dark';
    if (moon) moon.hidden = isDark;
    if (sun) sun.hidden = !isDark;
    btn.setAttribute('aria-label', window.IdeaGeneratorI18n.getText(isDark ? 'themeSwitchToLight' : 'themeSwitchToDark'));
    btn.setAttribute('title', window.IdeaGeneratorI18n.getText(isDark ? 'themeSwitchToLight' : 'themeSwitchToDark'));
  }

  generateBtn.addEventListener('click', runGenerate);
  resetBtn.addEventListener('click', runReset);

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var theme = window.IdeaGeneratorI18n.getTheme();
    window.IdeaGeneratorI18n.setTheme(theme === 'light' ? 'dark' : 'light');
    updateThemeIcon();
  });

  document.getElementById('language').addEventListener('change', function () {
    window.IdeaGeneratorI18n.setLanguage(this.value);
  });

  window.IdeaGeneratorApp = { onLanguageChange: onLanguageChange };

  updateThemeIcon();
  runGenerate();
})();
