(function () {
    document.querySelectorAll('.topnav').forEach(function (el) {
        console.log(1)
        if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
            el.classList.add('active');
        }
    });
})()