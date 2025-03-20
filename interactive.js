document.addEventListener('DOMContentLoaded', function() {
    // 深色/浅色模式切换
    const modeToggle = document.getElementById('mode-toggle');

    //检测系统主题
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let currentTheme = localStorage.getItem("theme");

    if (currentTheme == "dark") {
        document.body.classList.toggle("dark-mode");
    } else if (currentTheme == null) {
        //如果没设置过，则使用系统主题
        if(prefersDarkScheme.matches){
            document.body.classList.add("dark-mode");
        }
    }

    modeToggle.addEventListener('click', function() {

        document.body.classList.toggle('dark-mode');
        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
          theme = "dark";
        }
        localStorage.setItem("theme", theme);
    });

    // 卡片淡入动画
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`; // 逐个延迟
    });
});