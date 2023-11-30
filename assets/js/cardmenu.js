function toggleMenu(elementId) {
    console.log(elementId);
    var content = document.getElementById(elementId + 'Menu');
    var menuContainer = document.getElementById('menu-container');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex';
        menuContainer.style.display = 'block';
    } else {
        content.style.display = 'none';
        menuContainer.style.display = 'none';
    }
}
