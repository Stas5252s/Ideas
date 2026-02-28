/* eslint-disable max-len */
window.IdeaGeneratorLocales = {
  en: {
    titleTemplate: '{format} that {action} {subject}',
    FORMATS: [
      'Browser extension', 'Single-page web app', 'Bookmarklet', 'CLI script',
      'Small Node.js script', 'Local HTML + JS page', 'PWA (offline-first page)',
      'Chrome/Edge extension', 'Tampermonkey userscript', 'Desktop shortcut + local page',
      'Python script', 'PowerShell script', 'Scheduled task + script'
    ],
    ACTIONS: [
      'reminds you to', 'tracks your', 'randomly picks', 'batches and shows',
      'searches across', 'logs and summarizes', 'schedules', 'one-click saves',
      'formats and copies', 'rotates through', 'alerts you when', 'exports',
      'filters and lists', 'timers for', 'checklist for'
    ],
    SUBJECTS: [
      'morning routine steps', 'reply-later emails', 'meal ideas from your list',
      'browser tabs after a focus timer', 'files in Downloads by name or content',
      'daily note with 3 priorities', 'medication times', 'pasted text into a code block or list',
      'parking time and spot note', 'favorite sites for "last updated"',
      'product price + date in a table', 'who does the next chore',
      'door-lock and stove checklist', 'meeting prep items', 'water intake',
      'screen-time blocks', 'quick expense entries', 'bookmarks by tag or search',
      'clipboard history (last 10)', 'weekly goals and check-ins'
    ],
    SKILLS: [
      'HTML, CSS, JS', 'HTML, CSS, JS, localStorage', 'JS, DOM', 'JS, DOM, optional REST API',
      'Node.js or Python', 'Node.js, file system APIs', 'Bash/PowerShell/Node',
      'HTML, CSS, JS, PWA manifest', 'JS, Clipboard API', 'Browser extension APIs',
      'HTML, CSS, JS, optional backend', 'React or vanilla JS', 'Python, requests, regex',
      'Node, HTTP, cheerio or similar'
    ],
    BENEFITS: [
      'Less anxiety before leaving home.', 'Fewer context switches; batch replies later.',
      'No more "what do we eat?" indecision.', 'Clear timeboxes for deep work.',
      'Find that file without remembering the name.', 'One place for "what matters today".',
      'Quick visual check, private, no account.', 'Readable snippets in Slack or email fast.',
      'Remember where you parked without sharing location.', 'See what changed without opening 10 tabs.',
      'Your own price history, no server.', 'No more "whose turn?" arguments.',
      'No second-guessing locks or appliances.', 'Less forgotten prep, calmer meetings.',
      'Better hydration without a heavy app.', 'Awareness of where time goes.',
      'Simple expense log for small purchases.', 'Find bookmarks without scrolling.',
      'Reuse that thing you copied an hour ago.', 'Weekly progress at a glance.'
    ],
    DESCRIPTION_TEMPLATES: [
      '{format} that {action} {subject}. Single interaction or short flow; state in localStorage or a local file.',
      'A {format}: {action} {subject}. Runs locally or as a tiny script; no backend required.',
      'Build a {format} to {action} {subject}. Aim for one screen and under 3 hours to ship.',
      'Small {format} — {action} {subject}. Data stays on device or in a folder you choose.',
      '{format} where you {action} {subject}. Optional: export or sync later.'
    ],
    fallbackTitle: 'Custom automation for your workflow',
    fallbackDescription: 'A small script or page that automates one repetitive task you do every day. Pick a format (script, extension, or page) and a single outcome (track, remind, or export).'
  },
  de: {
    titleTemplate: '{format}: {action} {subject}',
    FORMATS: [
      'Browser-Erweiterung', 'Einseitige Web-App', 'Bookmarklet', 'CLI-Skript',
      'Kleines Node.js-Skript', 'Lokale HTML-+JS-Seite', 'PWA (offline-first)',
      'Chrome/Edge-Erweiterung', 'Tampermonkey-Userscript', 'Desktop-Verknüpfung + lokale Seite',
      'Python-Skript', 'PowerShell-Skript', 'Geplante Aufgabe + Skript'
    ],
    ACTIONS: [
      'erinnert dich an', 'protokolliert deine', 'wählt zufällig', 'bündelt und zeigt',
      'durchsucht', 'protokolliert und fasst zusammen', 'plant', 'speichert per Klick',
      'formatiert und kopiert', 'rotiert durch', 'warnt dich, wenn', 'exportiert',
      'filtert und listet', 'Timer für', 'Checkliste für'
    ],
    SUBJECTS: [
      'Morgenroutinen', 'E-Mails zum Später-Beantworten', 'Gerichte aus deiner Liste',
      'Browser-Tabs nach einem Fokus-Timer', 'Dateien in Downloads nach Name oder Inhalt',
      'Tagesnotiz mit 3 Prioritäten', 'Medikamentenzeiten', 'eingefügten Text als Codeblock oder Liste',
      'Parkzeit und -ort', 'Lieblingsseiten für „zuletzt aktualisiert“',
      'Produktpreis + Datum in einer Tabelle', 'wer als Nächstes dran ist',
      'Tür-Schloss- und Herd-Checkliste', 'Besprechungsvorbereitung', 'Wasseraufnahme',
      'Bildschirmzeit-Blöcke', 'schnelle Ausgaben', 'Lesezeichen nach Tag oder Suche',
      'Zwischenablage-Verlauf (letzte 10)', 'wöchentliche Ziele und Check-ins'
    ],
    SKILLS: [
      'HTML, CSS, JS', 'HTML, CSS, JS, localStorage', 'JS, DOM', 'JS, DOM, optional REST API',
      'Node.js oder Python', 'Node.js, Dateisystem-APIs', 'Bash/PowerShell/Node',
      'HTML, CSS, JS, PWA-Manifest', 'JS, Clipboard API', 'Browser-Extension-APIs',
      'HTML, CSS, JS, optional Backend', 'React oder Vanilla JS', 'Python, requests, regex',
      'Node, HTTP, cheerio o. ä.'
    ],
    BENEFITS: [
      'Weniger Angst vor dem Verlassen der Wohnung.', 'Weniger Kontextwechsel; E-Mails gebündelt später beantworten.',
      'Kein „Was essen wir?“-Entscheidungsstress mehr.', 'Klare Zeitblöcke für konzentriertes Arbeiten.',
      'Dateien finden ohne den genauen Namen zu kennen.', 'Ein Ort für „was heute zählt“.',
      'Schnelle visuelle Kontrolle, privat, ohne Konto.', 'Lesbare Snippets schnell in Slack oder E-Mail.',
      'Erinnern, wo du geparkt hast, ohne Standort preiszugeben.', 'Sehen, was sich geändert hat, ohne 10 Tabs zu öffnen.',
      'Eigene Preishistorie, ohne Server.', 'Keine „Wer ist dran?“-Diskussionen mehr.',
      'Kein Zweifeln an Schloss oder Herd.', 'Weniger vergessene Vorbereitung, ruhigere Meetings.',
      'Bessere Flüssigkeitsaufnahme ohne schwere App.', 'Bewusstsein, wohin die Zeit geht.',
      'Einfache Ausgabenliste für kleine Einkäufe.', 'Lesezeichen finden ohne langes Scrollen.',
      'Das vor einer Stunde Kopierte wieder nutzen.', 'Wochenfortschritt auf einen Blick.'
    ],
    DESCRIPTION_TEMPLATES: [
      '{format}: {action} {subject}. Eine Aktion oder kurzer Ablauf; Zustand in localStorage oder lokaler Datei.',
      'Eine {format}: {action} {subject}. Läuft lokal oder als kleines Skript; kein Backend nötig.',
      'Baue eine {format}, um {action} {subject}. Ein Bildschirm, unter 3 Stunden umsetzbar.',
      'Kleine {format} — {action} {subject}. Daten bleiben auf dem Gerät oder in einem Ordner deiner Wahl.',
      '{format}, mit der du {action} {subject}. Optional: später exportieren oder synchronisieren.'
    ],
    fallbackTitle: 'Eigene Automatisierung für deinen Workflow',
    fallbackDescription: 'Ein kleines Skript oder eine Seite, die eine wiederkehrende Aufgabe automatisiert. Wähle ein Format (Skript, Erweiterung oder Seite) und ein Ziel (tracken, erinnern oder exportieren).'
  },
  ru: {
    titleTemplate: '{format}: {action} {subject}',
    FORMATS: [
      'Расширение для браузера', 'Одностраничное веб-приложение', 'Букмарклет', 'CLI-скрипт',
      'Небольшой Node.js-скрипт', 'Локальная HTML + JS страница', 'PWA (офлайн-страница)',
      'Расширение Chrome/Edge', 'Userscript для Tampermonkey', 'Ярлык на рабочем столе + локальная страница',
      'Python-скрипт', 'PowerShell-скрипт', 'Запланированная задача + скрипт'
    ],
    ACTIONS: [
      'напоминает о', 'отслеживает твои', 'случайно выбирает', 'собирает и показывает',
      'ищет по', 'логирует и суммирует', 'планирует', 'сохраняет в один клик',
      'форматирует и копирует', 'перебирает по очереди', 'предупреждает, когда',
      'экспортирует', 'фильтрует и выводит список', 'таймеры для', 'чек-лист для'
    ],
    SUBJECTS: [
      'шаги утренней рутины', 'письма «ответить позже»', 'идеи блюд из твоего списка',
      'вкладки браузера после таймера фокуса', 'файлы в Загрузках по имени или содержимому',
      'ежедневная заметка с 3 приоритетами', 'время приёма лекарств', 'вставленный текст в блок кода или список',
      'время и место парковки', 'любимые сайты по «последнему обновлению»',
      'цена товара + дата в таблице', 'кто следующий по очереди',
      'чек-лист замка и плиты', 'подготовка к встречам', 'приём воды',
      'блоки экранного времени', 'быстрые траты', 'закладки по тегу или поиску',
      'история буфера обмена (последние 10)', 'недельные цели и отчёты'
    ],
    SKILLS: [
      'HTML, CSS, JS', 'HTML, CSS, JS, localStorage', 'JS, DOM', 'JS, DOM, опционально REST API',
      'Node.js или Python', 'Node.js, файловые API', 'Bash/PowerShell/Node',
      'HTML, CSS, JS, PWA manifest', 'JS, Clipboard API', 'API расширений браузера',
      'HTML, CSS, JS, опционально бэкенд', 'React или vanilla JS', 'Python, requests, regex',
      'Node, HTTP, cheerio или аналог'
    ],
    BENEFITS: [
      'Меньше тревоги перед выходом из дома.', 'Меньше переключений контекста; ответы пачкой позже.',
      'Больше никакого «что поедим?».', 'Чёткие интервалы для глубокой работы.',
      'Найти тот файл, не помня точное имя.', 'Одно место для «что важно сегодня».',
      'Быстрая визуальная проверка, приватно, без аккаунта.', 'Читаемые сниппеты в Slack или почту.',
      'Помнить, где припарковался, не отдавая геолокацию.', 'Видеть, что изменилось, не открывая 10 вкладок.',
      'Своя история цен, без сервера.', 'Больше никаких «чья очередь?».',
      'Не сомневаться, закрыл ли дверь и выключил ли плиту.', 'Меньше забытой подготовки, спокойнее встречи.',
      'Лучше пить воду без тяжёлого приложения.', 'Понимание, куда уходит время.',
      'Простой учёт расходов на мелочи.', 'Найти закладки без прокрутки.',
      'Воспользоваться тем, что скопировал час назад.', 'Недельный прогресс с первого взгляда.'
    ],
    DESCRIPTION_TEMPLATES: [
      '{format}: {action} {subject}. Одно действие или короткий сценарий; состояние в localStorage или локальном файле.',
      '{format}: {action} {subject}. Работает локально или как небольшой скрипт; бэкенд не нужен.',
      'Сделать {format} для {action} {subject}. Один экран, уложиться в 3 часа.',
      'Небольшая {format} — {action} {subject}. Данные остаются на устройстве или в выбранной папке.',
      '{format}, где ты {action} {subject}. По желанию: экспорт или синхронизация позже.'
    ],
    fallbackTitle: 'Своя автоматизация под твой рабочий процесс',
    fallbackDescription: 'Небольшой скрипт или страница, автоматизирующие одну повторяющуюся задачу. Выбери формат (скрипт, расширение или страницу) и результат (отслеживание, напоминание или экспорт).'
  },
  fr: {
    titleTemplate: '{format} qui {action} {subject}',
    FORMATS: [
      'Extension navigateur', 'Application web à une page', 'Bookmarklet', 'Script CLI',
      'Petit script Node.js', 'Page HTML + JS locale', 'PWA (page hors ligne)',
      'Extension Chrome/Edge', 'Userscript Tampermonkey', 'Raccourci bureau + page locale',
      'Script Python', 'Script PowerShell', 'Tâche planifiée + script'
    ],
    ACTIONS: [
      'te rappelle de', 'suit ton', 'choisit au hasard', 'regroupe et affiche',
      'recherche dans', 'enregistre et résume', 'planifie', 'sauvegarde en un clic',
      'formate et copie', 'alterne entre', 't\'alerte quand', 'exporte',
      'filtre et liste', 'minuteries pour', 'liste de contrôle pour'
    ],
    SUBJECTS: [
      'étapes de routine du matin', 'e-mails « à répondre plus tard »', 'idées de repas de ta liste',
      'onglets du navigateur après un timer de focus', 'fichiers dans Téléchargements par nom ou contenu',
      'note quotidienne avec 3 priorités', 'heures de prise de médicaments', 'texte collé en bloc de code ou liste',
      'heure et place de stationnement', 'sites favoris pour « dernière mise à jour »',
      'prix produit + date dans un tableau', 'qui fait la prochaine tâche',
      'liste porte et plaques', 'préparation de réunions', 'prise d\'eau',
      'blocs de temps d\'écran', 'dépenses rapides', 'favoris par tag ou recherche',
      'historique du presse-papiers (10 derniers)', 'objectifs et bilans hebdomadaires'
    ],
    SKILLS: [
      'HTML, CSS, JS', 'HTML, CSS, JS, localStorage', 'JS, DOM', 'JS, DOM, REST API optionnel',
      'Node.js ou Python', 'Node.js, APIs système de fichiers', 'Bash/PowerShell/Node',
      'HTML, CSS, JS, manifest PWA', 'JS, Clipboard API', 'APIs d\'extension navigateur',
      'HTML, CSS, JS, backend optionnel', 'React ou vanilla JS', 'Python, requests, regex',
      'Node, HTTP, cheerio ou similaire'
    ],
    BENEFITS: [
      'Moins d\'anxiété avant de quitter la maison.', 'Moins de changements de contexte ; réponses groupées plus tard.',
      'Fini le « qu\'est-ce qu\'on mange ? ».', 'Blocs de temps clairs pour le travail en profondeur.',
      'Retrouver ce fichier sans en connaître le nom.', 'Un seul endroit pour « ce qui compte aujourd\'hui ».',
      'Vérification visuelle rapide, privée, sans compte.', 'Snippets lisibles dans Slack ou par e-mail.',
      'Se souvenir où tu as garé sans partager la position.', 'Voir ce qui a changé sans ouvrir 10 onglets.',
      'Ta propre histoire des prix, sans serveur.', 'Fini les « c\'est à qui le tour ? ».',
      'Plus de doute sur la serrure ou la plaque.', 'Moins de préparation oubliée, réunions plus calmes.',
      'Mieux s\'hydrater sans app lourde.', 'Conscience de où part le temps.',
      'Simple journal des dépenses pour les petits achats.', 'Retrouver les favoris sans défiler.',
      'Réutiliser ce que tu as copié il y a une heure.', 'Progression hebdo en un coup d\'œil.'
    ],
    DESCRIPTION_TEMPLATES: [
      '{format} qui {action} {subject}. Une action ou flux court ; état dans localStorage ou fichier local.',
      'Une {format} : {action} {subject}. Tourne en local ou en petit script ; pas de backend.',
      'Construire une {format} pour {action} {subject}. Un écran, livrable en moins de 3 h.',
      'Petite {format} — {action} {subject}. Les données restent sur l’appareil ou dans un dossier choisi.',
      '{format} où tu {action} {subject}. Optionnel : export ou sync plus tard.'
    ],
    fallbackTitle: 'Automatisation personnalisée pour ton workflow',
    fallbackDescription: 'Un petit script ou une page qui automatise une tâche répétitive. Choisis un format (script, extension ou page) et un résultat (suivi, rappel ou export).'
  }
};
