(function () {
  'use strict';

  var translations = {
    en: {
      title: 'Project Idea Generator',
      tagline: '1–3 hour builds for everyday life — web dev, automation, small tools',
      numberLabel: 'Number of ideas',
      generateBtn: 'Generate ideas',
      resetBtn: 'Reset (allow repeats)',
      cardWhat: 'What',
      cardSkills: 'Skills',
      cardWhy: 'Why',
      emptyState: 'Repeats allowed again. Click "Generate ideas" for a new set.',
      footer: 'Each idea is built from random combinations. Use "Reset" to allow the same idea to appear again.',
      themeSwitchToDark: 'Switch to dark theme',
      themeSwitchToLight: 'Switch to light theme',
      languageLabel: 'Language',
      filterDifficulty: 'Difficulty',
      filterTopic: "What it's about",
      difficultyAll: 'All',
      difficultyEasy: 'Easy',
      difficultyMedium: 'Medium',
      difficultyHard: 'Hard',
      topicAll: 'All',
      topicProductivity: 'Productivity',
      topicCommunication: 'Communication',
      topicHome: 'Home & daily',
      topicBrowser: 'Browser',
      topicFiles: 'Files',
      topicHealth: 'Health',
      topicMoney: 'Money'
    },
    de: {
      title: 'Projekt-Ideen-Generator',
      tagline: 'Projekte für 1–3 Stunden für den Alltag — Web, Automatisierung, kleine Tools',
      numberLabel: 'Anzahl der Ideen',
      generateBtn: 'Ideen generieren',
      resetBtn: 'Zurücksetzen (Wiederholungen erlauben)',
      cardWhat: 'Was',
      cardSkills: 'Skills',
      cardWhy: 'Warum',
      emptyState: 'Wiederholungen wieder erlaubt. Klicke auf "Ideen generieren" für eine neue Liste.',
      footer: 'Jede Idee entsteht aus zufälligen Kombinationen. "Zurücksetzen" erlaubt dieselbe Idee erneut.',
      themeSwitchToDark: 'Zu dunklem Design wechseln',
      themeSwitchToLight: 'Zu hellem Design wechseln',
      languageLabel: 'Sprache',
      filterDifficulty: 'Schwierigkeit',
      filterTopic: 'Worum geht es',
      difficultyAll: 'Alle',
      difficultyEasy: 'Einfach',
      difficultyMedium: 'Mittel',
      difficultyHard: 'Schwer',
      topicAll: 'Alle',
      topicProductivity: 'Produktivität',
      topicCommunication: 'Kommunikation',
      topicHome: 'Zuhause & Alltag',
      topicBrowser: 'Browser',
      topicFiles: 'Dateien',
      topicHealth: 'Gesundheit',
      topicMoney: 'Geld'
    },
    ru: {
      title: 'Генератор идей проектов',
      tagline: 'Проекты на 1–3 часа для повседневной жизни — вёрстка, автоматизация, небольшие инструменты',
      numberLabel: 'Количество идей',
      generateBtn: 'Сгенерировать идеи',
      resetBtn: 'Сброс (разрешить повторы)',
      cardWhat: 'Что',
      cardSkills: 'Навыки',
      cardWhy: 'Зачем',
      emptyState: 'Повторы снова разрешены. Нажмите «Сгенерировать идеи» для нового набора.',
      footer: 'Каждая идея собирается из случайных комбинаций. «Сброс» позволяет показывать ту же идею снова.',
      themeSwitchToDark: 'Включить тёмную тему',
      themeSwitchToLight: 'Включить светлую тему',
      languageLabel: 'Язык',
      filterDifficulty: 'Сложность',
      filterTopic: 'Тема',
      difficultyAll: 'Все',
      difficultyEasy: 'Лёгкие',
      difficultyMedium: 'Средние',
      difficultyHard: 'Сложные',
      topicAll: 'Все',
      topicProductivity: 'Продуктивность',
      topicCommunication: 'Общение',
      topicHome: 'Дом и быт',
      topicBrowser: 'Браузер',
      topicFiles: 'Файлы',
      topicHealth: 'Здоровье',
      topicMoney: 'Деньги'
    },
    fr: {
      title: "Générateur d'idées de projets",
      tagline: 'Projets de 1–3 h pour la vie quotidienne — web, automatisation, petits outils',
      numberLabel: "Nombre d'idées",
      generateBtn: 'Générer des idées',
      resetBtn: 'Réinitialiser (autoriser les répétitions)',
      cardWhat: 'Quoi',
      cardSkills: 'Compétences',
      cardWhy: 'Pourquoi',
      emptyState: 'Répétitions à nouveau autorisées. Cliquez sur « Générer des idées » pour un nouveau set.',
      footer: "Chaque idée est construite à partir de combinaisons aléatoires. « Réinitialiser » permet de revoir la même idée.",
      themeSwitchToDark: 'Passer au thème sombre',
      themeSwitchToLight: 'Passer au thème clair',
      languageLabel: 'Langue',
      filterDifficulty: 'Difficulté',
      filterTopic: "Thème / Sujet",
      difficultyAll: 'Toutes',
      difficultyEasy: 'Facile',
      difficultyMedium: 'Moyen',
      difficultyHard: 'Difficile',
      topicAll: 'Toutes',
      topicProductivity: 'Productivité',
      topicCommunication: 'Communication',
      topicHome: 'Maison & quotidien',
      topicBrowser: 'Navigateur',
      topicFiles: 'Fichiers',
      topicHealth: 'Santé',
      topicMoney: 'Argent'
    }
  };

  var currentLang = localStorage.getItem('ideaGeneratorLang') || 'en';
  var currentTheme = localStorage.getItem('ideaGeneratorTheme') || 'light';

  function getText(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function setLanguage(lang) {
    if (translations[lang]) {
      currentLang = lang;
      localStorage.setItem('ideaGeneratorLang', lang);
      updatePage();
      if (window.IdeaGeneratorApp && window.IdeaGeneratorApp.onLanguageChange) {
        window.IdeaGeneratorApp.onLanguageChange();
      }
    }
  }

  function setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      currentTheme = theme;
      localStorage.setItem('ideaGeneratorTheme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  function updatePage() {
    document.documentElement.lang = currentLang === 'ru' ? 'ru' : currentLang === 'de' ? 'de' : currentLang === 'fr' ? 'fr' : 'en';
    document.title = getText('title');
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var text = getText(key);
      if (text) nodes[i].textContent = text;
    }
    var optNodes = document.querySelectorAll('[data-i18n-opt]');
    for (var j = 0; j < optNodes.length; j++) {
      var optKey = optNodes[j].getAttribute('data-i18n-opt');
      if (optKey) optNodes[j].textContent = getText(optKey);
    }
    var generateBtn = document.getElementById('generate');
    var resetBtn = document.getElementById('reset');
    if (generateBtn) generateBtn.textContent = getText('generateBtn');
    if (resetBtn) resetBtn.textContent = getText('resetBtn');
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      var isDark = currentTheme === 'dark';
      themeBtn.setAttribute('aria-label', getText(isDark ? 'themeSwitchToLight' : 'themeSwitchToDark'));
      themeBtn.setAttribute('title', getText(isDark ? 'themeSwitchToLight' : 'themeSwitchToDark'));
    }
    var langSelect = document.getElementById('language');
    if (langSelect) langSelect.value = currentLang;
  }

  setTheme(currentTheme);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePage);
  } else {
    updatePage();
  }

  window.IdeaGeneratorI18n = {
    getText: getText,
    setLanguage: setLanguage,
    setTheme: setTheme,
    getLanguage: function () { return currentLang; },
    getTheme: function () { return currentTheme; }
  };
})();
