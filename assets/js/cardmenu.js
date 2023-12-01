function toggleMenu(elementId) {
    var content = document.getElementById(elementId + 'Menu');
    
    // Hide opened menus
    var menus = document.getElementsByClassName('food-menu');

    for (var menu of menus) {
        if (menu !== content) {
            menu.style.display = 'none';
        }
    }

    // Toggle selected card menu
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex';
    } else {
        content.style.display = 'none';
    }
}