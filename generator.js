(function () {
  'use strict';

  var seenKeys = new Set();

  // Same order as SUBJECTS in any locale (20 items): difficulty + topic per subject
  var SUBJECT_META = [
    { difficulty: 'easy', topic: 'productivity' },
    { difficulty: 'easy', topic: 'communication' },
    { difficulty: 'easy', topic: 'home' },
    { difficulty: 'hard', topic: 'browser' },
    { difficulty: 'hard', topic: 'files' },
    { difficulty: 'easy', topic: 'productivity' },
    { difficulty: 'easy', topic: 'health' },
    { difficulty: 'easy', topic: 'productivity' },
    { difficulty: 'easy', topic: 'home' },
    { difficulty: 'medium', topic: 'browser' },
    { difficulty: 'easy', topic: 'money' },
    { difficulty: 'easy', topic: 'home' },
    { difficulty: 'easy', topic: 'home' },
    { difficulty: 'medium', topic: 'productivity' },
    { difficulty: 'easy', topic: 'health' },
    { difficulty: 'medium', topic: 'productivity' },
    { difficulty: 'easy', topic: 'money' },
    { difficulty: 'medium', topic: 'browser' },
    { difficulty: 'easy', topic: 'productivity' },
    { difficulty: 'medium', topic: 'productivity' }
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getLocale(lang) {
    var locales = window.IdeaGeneratorLocales;
    if (!locales) return null;
    return locales[lang] || locales.en;
  }

  function getFilteredSubjectIndices(locale, filters) {
    var SUBJECTS = locale.SUBJECTS;
    var indices = [];
    for (var i = 0; i < SUBJECTS.length && i < SUBJECT_META.length; i++) {
      var m = SUBJECT_META[i];
      if (filters.difficulty && m.difficulty !== filters.difficulty) continue;
      if (filters.topic && m.topic !== filters.topic) continue;
      indices.push(i);
    }
    return indices.length ? indices : Array.from({ length: SUBJECTS.length }, function (_, i) { return i; });
  }

  function generateOne(lang, filters) {
    filters = filters || {};
    var locale = getLocale(lang);
    if (!locale && window.IdeaGeneratorLocales) locale = window.IdeaGeneratorLocales.en;
    if (!locale) return null;
    var FORMATS = locale.FORMATS;
    var ACTIONS = locale.ACTIONS;
    var SUBJECTS = locale.SUBJECTS;
    var SKILLS = locale.SKILLS;
    var BENEFITS = locale.BENEFITS;
    var DESC = locale.DESCRIPTION_TEMPLATES;
    var titleTpl = locale.titleTemplate || '{format} that {action} {subject}';
    var subjectIndices = getFilteredSubjectIndices(locale, filters);
    var maxTries = 50;
    var tries = 0;

    while (tries++ < maxTries) {
      var format = pick(FORMATS);
      var action = pick(ACTIONS);
      var subjectIdx = subjectIndices[Math.floor(Math.random() * subjectIndices.length)];
      var subject = SUBJECTS[subjectIdx];
      var formatForDesc = lang === 'en' ? format.toLowerCase() : format;
      var description = pick(DESC)
        .replace(/\{format\}/g, formatForDesc)
        .replace(/\{action\}/g, action)
        .replace(/\{subject\}/g, subject);
      var title = titleTpl
        .replace(/\{format\}/g, format)
        .replace(/\{action\}/g, action)
        .replace(/\{subject\}/g, subject);

      if (seenKeys.has(title)) continue;
      seenKeys.add(title);

      return {
        title: title,
        description: description,
        skills: pick(SKILLS),
        benefit: pick(BENEFITS)
      };
    }

    seenKeys.add('fallback-' + Date.now());
    return {
      title: locale.fallbackTitle || 'Custom automation for your workflow',
      description: locale.fallbackDescription || 'A small script or page that automates one repetitive task you do every day.',
      skills: pick(SKILLS),
      benefit: pick(BENEFITS)
    };
  }

  function generate(count, lang, filters) {
    lang = lang || 'en';
    filters = filters || {};
    count = Math.min(Math.max(Number(count) || 5, 1), 20);
    var ideas = [];
    var maxAttempts = count * 15;
    var attempts = 0;

    while (ideas.length < count && attempts < maxAttempts) {
      try {
        var idea = generateOne(lang, filters);
        if (idea) ideas.push(idea);
      } catch (e) {
        attempts++;
      }
    }
    return ideas;
  }

  function resetSeen() {
    seenKeys.clear();
  }

  window.IdeaGenerator = { generate: generate, resetSeen: resetSeen };
})();
