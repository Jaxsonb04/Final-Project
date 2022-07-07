// Toggle mode on click of the button id "darkmode-toggle"
document.getElementById('darkmode-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
}
)

// Set the toggle to checked if the theme is dark
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById('darkmode-toggle').checked = true
}