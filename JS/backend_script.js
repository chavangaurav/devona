$(document).ready(function () {
    function toggle_visibility(id) {
        var e = document.getElementById(id);
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
    }

    $('#open_category').click(function () {
        toggle_visibility('category').fadeIn(2000);
    });
    $('#close_category').click(function () {
        toggle_visibility('category');
    });

    $('#close_user').click(function () {
        toggle_visibility('user');
    });

    $('#open_user').click(function () {
        toggle_visibility('user');
    });
});
