const translations = {
  en: {
    // Header / Nav
    "nav_home": "Home",
    "nav_projects": "Projects",
    "nav_contributions": "Contributions",
    "nav_certifications": "Certifications",
    "title_passionate_developer": "A passionate 15 Year old developer from the UK",

    // Hero Section
    "hero_greeting": "Hello, I'm Derek",
    "hero_subtitle": "Crafting digital experiences with passion and precision",
    "hero_btn_about": "About Me",
    "hero_btn_view_projects": "View Projects",
    "hero_scroll_explore": "Scroll to explore",

    // About Section
    "about_title": "About Me",
    "about_intro_1": "Welcome to my digital space! I'm Derek Yuan, a passionate young developer with a love for creating innovative solutions and exploring cutting-edge technologies.",
    "about_intro_2": "At just 15 years old, I've already immersed myself in the world of software development, constantly learning and pushing the boundaries of what's possible.",
    "contact_heading": "Contact",
    "connect_heading": "Connect",
    "stack_overflow_link": "Stack Overflow",
    "github_link": "GitHub",

    // Skills Section
    "skills_title": "Technical Skills",
    "skills_subtitle": "Technologies I work with",

    // Stats Section
    "stats_title": "Journey in Numbers",
    "stats_years_old": "Years Old",
    "stats_projects": "Projects",
    "stats_commits": "Commits",
    "stats_certifications": "Certifications",

    // CTA Section
    "cta_title": "Ready to Collaborate?",
    "cta_subtitle": "Let's create something amazing together. I'm always open to discussing new opportunities and innovative projects.",
    "cta_btn_view_work": "View My Work",
    "cta_btn_get_in_touch": "Get In Touch",

    // Footer
    "footer_copyright": "Derek Yuan. All rights reserved.",

    // General
    "toggle_language_btn": "中文", // Button text to switch to Chinese

    // Projects Page
    "projects_page_title": "My Projects",
    "projects_page_subtitle": "Here are some of the key projects I've worked on throughout my career.",
    "projects_filter_all": "All",
    "projects_filter_python": "Python",
    "projects_filter_web": "Web Development",
    "projects_filter_mobile": "Mobile/Android",
    "projects_filter_game": "Game Development",
    "projects_filter_other": "Other Projects",
    "projects_search_placeholder": "Search...",
    "projects_no_results": "No projects found matching your search criteria.",
    // --- Project Specific ---
    "project_nn_title": "Neural Network from Scratch",
    "project_nn_tags": "Python, AI, Machine Learning",
    "project_nn_desc": "A custom neural network implementation built entirely from the ground up, using no external modules or dependencies. Includes a language model, image generation system, and a graphical user interface.",
    "project_pixelmaster_title": "PixelMasterX",
    "project_pixelmaster_tags": "Python, Tkinter, Image Processing",
    "project_pixelmaster_desc": "A versatile desktop application for file conversion and image manipulation built with Python and Tkinter.",
    "project_easygit_title": "EasyGit",
    "project_easygit_tags": "Python, GUI, Version Control",
    "project_easygit_desc": "A simplified version control system built in Python that provides local repository management without the complexity of merge conflicts. Features a user-friendly tkinter-based GUI.",
    "project_sortviz_title": "Sorting Algorithm Visualiser",
    "project_sortviz_tags": "TypeScript, Algorithms, Visualization",
    "project_sortviz_desc": "An interactive tool designed to help users understand and visualize various sorting algorithms in action. Perfect for students learning about algorithmic complexity and sorting techniques.",
    "project_quicknotzz_title": "QuickNotzz",
    "project_quicknotzz_tags": "Kotlin, Android, Note-taking",
    "project_quicknotzz_desc": "A user-friendly note-taking application developed in Kotlin. It allows users to create, edit, and organize notes seamlessly.",
    "project_dragonbot_title": "DragonBot-LiChessBot",
    "project_dragonbot_tags": "Python, Chess, AI",
    "project_dragonbot_desc": "A Lichess bot with over 10,000 opening book moves and an ELO of around 1960. Easily runnable from the python file and playable from Lichess with one-click challenge. Lichess Username: DRAGONTAMER-BOT",
    "project_chesstoolkit_title": "ChessToolkit",
    "project_chesstoolkit_tags": "Python, Chess Analysis",
    "project_chesstoolkit_desc": "A Chess Toolkit designed to help you improve at chess, with functions such as analyzing games using both custom and set engines locally and on the cloud.",
    "project_chesswebdigger_title": "Chess Username Finder",
    "project_chesswebdigger_tags": "JavaScript, Node.js, Express, Chess",
    "project_chesswebdigger_desc": "A web application that helps chess players find their online usernames across popular chess platforms like Chess.com and Lichess. Features include searching by player's full name, FIDE ID, federation, rating, birth year, with results displayed with confidence scores. Users can view game counts for found players and analyze opening repertoires with an interactive chess board.",
    "project_monkeytype_title": "MonkeyType (Fork)",
    "project_monkeytype_tags": "TypeScript, Web Development",
    "project_monkeytype_desc": "A customizable typing website with a minimalistic design and numerous features. Test yourself in various modes, track your progress and improve your typing speed.",
    "project_androidarch_title": "Android Architecture Samples (Fork)",
    "project_androidarch_tags": "Kotlin, Android",
    "project_androidarch_desc": "A collection of samples to discuss and showcase different architectural tools and patterns for Android apps. A useful reference for Android development best practices.",
    "project_kotlinlang_title": "Kotlin Programming Language (Fork)",
    "project_kotlinlang_tags": "Kotlin, Programming Language",
    "project_kotlinlang_desc": "The official Kotlin Programming Language repository. This fork allows me to explore the inner workings of Kotlin and contribute to its development.",
    "project_chesspairings_title": "ChessPairings",
    "project_chesspairings_tags": "JavaScript, Node.js, Python, Swiss System, Web App",
    "project_chesspairings_desc": "A web application for managing chess tournaments using the Swiss pairing system. Organizers can load player data from chess tournament websites, generate pairings, record results, and view standings with tiebreak scores (Buchholz, Sonneborn-Berger). Features include player data import, automatic pairings, result recording, and navigation between rounds. Built with Node.js, Express, Python (Beautiful Soup), and vanilla JS.",
    "project_btn_github": "GitHub",
    "project_btn_github_fork": "GitHub Fork",
    "project_btn_live_demo": "Live Demo",
    "project_btn_site": "Site",
    "project_btn_lichess": "Lichess",


    // Contributions Page
    "contributions_page_title": "My Contributions",
    "contributions_page_subtitle": "Open source contributions to various projects and communities.",
    "contributions_category_os": "Open Source Contributions",
    // --- Contribution Specific --- (Example, more would be needed)
    "contribution_android_arch_title": "Android Architecture Samples - Test Refactoring",
    "contribution_android_arch_date": "June 2025",
    "contribution_android_arch_desc": "Refactored the TasksTest.kt file in Google's official Android Architecture Samples repository to improve code readability and maintainability. This contribution streamlined the test suite by consolidating test cases, simplifying helper methods, and removing redundant code, making it easier for Android developers to understand and extend the test suite in the future.",
    "contribution_android_arch_pr_details": "PR #1040: refactor TasksTest.kt to be shorter and comments to improve readability",
    "contribution_android_arch_reviewed_by": "Reviewed by: Gemini Code Assist Bot",
    "contribution_android_arch_issue_desc_1": "The refactoring included several key improvements:",
    "contribution_android_arch_issue_li_1": "Test Case Consolidation: Combined multiple related test cases into more concise and reusable tests to reduce redundancy and improve clarity",
    "contribution_android_arch_issue_li_2": "Helper Method Simplification: Simplified helper methods and introduced new ones for better readability and code reuse",
    "contribution_android_arch_issue_li_3": "Boilerplate Reduction: Removed unnecessary setup and assertions to focus on core functionality",
    "contribution_android_arch_issue_li_4": "Code Formatting: Consolidated annotations and method declarations for more compact, readable code",
    "contribution_android_arch_issue_desc_2": "These changes make the test suite significantly easier to maintain and extend, while still ensuring comprehensive test coverage.",
    "contribution_android_arch_metrics_lines": "Lines changed: +24 −226",
    "contribution_android_arch_metrics_submitted": "Submitted: June 2025",
    "contribution_android_arch_metrics_status": "Status: Open (Pending Approval)",
    // ... (keys for other contributions)

    // Certifications Page
    "certifications_page_title": "My Certifications",
    "certifications_page_subtitle": "Professional certifications, courses, and educational achievements that showcase my continuous learning journey.",
    "certifications_stats_certs": "Certificates",
    "certifications_stats_platforms": "Platforms",
    "certifications_stats_hours": "Hours",
    "certifications_filter_all": "All",
    "certifications_filter_python": "Python",
    "certifications_filter_web": "Web Dev",
    "certifications_filter_game": "Game Dev",
    "certifications_filter_microsoft": "Microsoft",
    "certifications_filter_other": "Other",
    // --- Certification Card Specific --- (Example)
    "cert_100days_title": "100 Days of Code: Python Pro Bootcamp",
    "cert_100days_issuer": "Udemy",
    "cert_100days_tag1": "Python",
    "cert_100days_tag2": "Full Stack",
    "cert_100days_tag3": "100 Days",
    "cert_card_details_heading": "Course Details",
    "cert_card_skills_heading": "Skills Covered:",
    "cert_card_btn_view_cert": "View Certificate",
    "cert_100days_details_desc": "Comprehensive Python programming bootcamp covering fundamentals through advanced topics over 100 days of coding challenges and projects.",
    "cert_100days_skill1": "Python Fundamentals",
    "cert_100days_skill2": "Web Development with Flask",
    "cert_100days_skill3": "Data Science & Analysis",
    "cert_100days_skill4": "GUI Development",
    "cert_100days_skill5": "API Development",
    // ... (keys for other certifications)
    "cert_stats_journey_title": "Learning Journey Statistics",
    "cert_stats_total_certs": "Total Certificates",
    "cert_stats_learning_hours": "Learning Hours",
    "cert_stats_platforms_count": "Platforms", // Reusing "certifications_stats_platforms" might be better if same text
    "cert_stats_technologies": "Technologies"

  },
  zh: {
    // Header / Nav
    "nav_home": "首页",
    "nav_projects": "项目",
    "nav_contributions": "贡献",
    "nav_certifications": "证书",
    "title_passionate_developer": "来自英国的充满热情的15岁开发者",

    // Hero Section
    "hero_greeting": "你好，我是 Derek",
    "hero_subtitle": "以热情和精度打造数字体验",
    "hero_btn_about": "关于我",
    "hero_btn_view_projects": "查看项目",
    "hero_scroll_explore": "向下滚动探索",

    // About Section
    "about_title": "关于我",
    "about_intro_1": "欢迎来到我的数字空间！我是 Derek Yuan，一个充满热情的年轻开发者，热爱创造创新解决方案和探索尖端技术。",
    "about_intro_2": "年仅15岁，我已经沉浸在软件开发的世界中，不断学习并推动可能性的边界。",
    "contact_heading": "联系方式",
    "connect_heading": "社交链接",
    "stack_overflow_link": "Stack Overflow",
    "github_link": "GitHub",

    // Skills Section
    "skills_title": "技术技能",
    "skills_subtitle": "我使用的技术",

    // Stats Section
    "stats_title": "我的历程数据",
    "stats_years_old": "岁",
    "stats_projects": "项目",
    "stats_commits": "代码提交",
    "stats_certifications": "证书",

    // CTA Section
    "cta_title": "准备好合作了吗？",
    "cta_subtitle": "让我们一起创造一些惊人的东西。我总是乐于讨论新的机会和创新项目。",
    "cta_btn_view_work": "查看我的作品",
    "cta_btn_get_in_touch": "联系我",

    // Footer
    "footer_copyright": "Derek Yuan. 版权所有。",

    // General
    "toggle_language_btn": "EN" // Button text to switch to English
  }
};

// Function to set the language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  translatePage();
}

// Function to translate the page
function translatePage() {
  const lang = localStorage.getItem('language') || 'en'; // Default to English
  document.documentElement.lang = lang; // Set the lang attribute of the HTML element

  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (translations[lang] && translations[lang][key]) {
      // Handle elements that should have their text content replaced directly
      // This is good for titles, paragraphs, simple buttons, etc.
      // Check if the element is a button or a link that might contain an icon
      if ((element.tagName === 'BUTTON' || element.tagName === 'A') && element.querySelector('i')) {
        // If it's a button/link with an icon, find a child span to update, or update text node
        let textNode = null;
        let spanNode = element.querySelector('span[data-translate-key]'); // if span is tagged
        if (spanNode) {
            spanNode.textContent = translations[lang][key];
        } else { // Fallback to find the first text node that is not just whitespace
            for (let i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].nodeType === Node.TEXT_NODE && element.childNodes[i].textContent.trim().length > 0) {
                    textNode = element.childNodes[i];
                    break;
                }
            }
            if (textNode) {
                textNode.textContent = (element.querySelector('i') ? ' ' : '') + translations[lang][key];
            } else { // If no suitable text node, set the text content of the button/link itself (might overwrite icon if not handled carefully)
                 // Check if there's a span child we can update
                const childSpan = element.querySelector('span');
                if (childSpan && !childSpan.hasAttribute('data-translate-key')) { // don't re-translate already targeted span
                    childSpan.textContent = translations[lang][key];
                } else if (!childSpan) { // No span, set text content directly (less ideal for complex buttons)
                    // This case should be rare if HTML is structured with spans for text in buttons
                    let content = "";
                    let iconHTML = "";
                    const icon = element.querySelector('i');
                    if (icon) iconHTML = icon.outerHTML + " ";
                    element.innerHTML = iconHTML + translations[lang][key];
                }
            }
        }
      } else if (element.children.length > 0 && !element.classList.contains('social-link') && !element.classList.contains('project-tags')) {
        // If element has children and is not a special case, replace only the first significant text node
        let replaced = false;
        element.childNodes.forEach(child => {
          if (!replaced && child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== "") {
            child.textContent = translations[lang][key];
            replaced = true;
          }
        });
        // If no text node was found and replaced (e.g. text is inside a child span not specifically targeted)
        // This is a fallback, ideally specific spans should be targeted with data-translate-key
        if (!replaced) {
            // Check if the key is for a simple text element and not something complex
            // Avoid accidentally clearing out complex HTML structure
            if (element.innerHTML.includes(translations['en'][key])) { // A heuristic
                 element.innerHTML = element.innerHTML.replace(translations['en'][key], translations[lang][key]);
            } else {
                 // As a last resort, if no specific text node found, but it's not a complex structure, set textContent
                 // This is risky for elements with mixed content; prefer data-translate-key on specific text spans
                 if(element.querySelectorAll('*').length === 0 || /^(P|H[1-6]|SPAN|DIV|LI)$/.test(element.tagName)){
                    element.textContent = translations[lang][key];
                 }
            }
        }
      }
      else {
        // Default: directly set textContent for simple elements
        element.textContent = translations[lang][key];
      }
    }
  });

  // Handle placeholder translations
  document.querySelectorAll('[data-translate-key-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-key-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  // The language toggle button's text is handled by the main loop
  // through its child span having data-translate-key="toggle_language_btn".
}

// Function to toggle language
function toggleLanguage() {
  const currentLang = localStorage.getItem('language') || 'en';
  const newLang = currentLang === 'en' ? 'zh' : 'en';
  setLanguage(newLang);
}

// Add event listener for language toggle after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  translatePage(); // Translate page on load

  // Event listener for a toggle button (assuming one will be added with id 'language-toggle')
  const langToggleButton = document.getElementById('language-toggle');
  if (langToggleButton) {
    langToggleButton.addEventListener('click', toggleLanguage);
  }
});
