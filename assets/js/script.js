window.onscroll = function() {
    const topoButton = document.getElementById('topo');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topoButton.style.display = 'block';
    } else {
        topoButton.style.display = 'none';
    }
};

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
