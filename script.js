document.addEventListener('DOMContentLoaded', () => {

    const style = document.createElement('style');
    style.textContent = `
        body.dark-mode {
            background-color: #1a1a1a;
            color: #e0e0e0;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        body.dark-mode header {
            background-color: #2a2a2a;
            color: #ffffff;
        }

        body.dark-mode footer {
            background-color: #2a2a2a;
            color: #ffffff;
        }

        body.dark-mode section {
            background-color: #3a3a3a;
            color: #e0e0e0;
        }

        body.dark-mode h1,
        body.dark-mode h2,
        body.dark-mode h3 {
            color: #f1c40f;
        }

        body.dark-mode .name-letter:hover {
            color: #e67e22;
        }

        body.dark-mode a {
            color: #3498db;
        }

        body.dark-mode a:hover {
            color: #2980b9; /
        }

        body.dark-mode .tagline {
            color: #bbbbbb;
        }

        body.dark-mode ul li {
            color: #d0d0d0;
        }

        /* Dark mode specific for the theme toggle */
        body.dark-mode .theme-toggle {
            background: rgba(255, 255, 255, 0.2);
        }

        body.dark-mode .theme-toggle i {
            color: #f1c40f;
        }


        /* Additional transition effects */
        body {
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Hide icons */
        .theme-toggle i.hidden {
            display: none;
        }

        /* Add animations for the theme toggle */
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px;
            cursor: pointer;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
        }

        .theme-toggle:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }

        .theme-toggle i {
            font-size: 1.5rem;
            color: #f39c12; /* Yellow color for icons */
        }
    `;
    document.head.appendChild(style);

    // Create the theme toggle icon
    const themeToggle = document.createElement('div');
    themeToggle.classList.add('theme-toggle');
    themeToggle.innerHTML = `
        <i class="fas fa-sun"></i> <i class="fas fa-moon hidden"></i> `;
    document.body.appendChild(themeToggle);

    // Function to set the theme based on preference
    const setTheme = (isDarkMode) => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeToggle.querySelector('.fa-sun').classList.add('hidden');
            themeToggle.querySelector('.fa-moon').classList.remove('hidden');
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.querySelector('.fa-sun').classList.remove('hidden');
            themeToggle.querySelector('.fa-moon').classList.add('hidden');
        }
    };

    // Check for user's preferred color scheme on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Add event listener to toggle dark mode
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Toggle the icon animation between sun and moon
        themeToggle.querySelector('.fa-sun').classList.toggle('hidden');
        themeToggle.querySelector('.fa-moon').classList.toggle('hidden');
    });

    // Listen for changes in the user's preferred color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setTheme(event.matches);
    });
});
