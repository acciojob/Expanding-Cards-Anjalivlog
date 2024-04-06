//your JS code here. If required.
function expandCard(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    const panel = document.getElementById(panelId);
    panel.classList.add('active');
}