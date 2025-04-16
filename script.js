async function loadHeaderFooter() {
    try {
        const headerResponse = await fetch('header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('mi-header').innerHTML = headerHtml;

        const footerResponse = await fetch('footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('mi-footer').innerHTML = footerHtml;
    } catch (error) {
        console.error('Error al cargar el header o footer:', error);
    }
}

loadHeaderFooter();