fetch('https://discordapp.com/api/servers/1152862163208249414/widget.json')
    .then(response => response.json())
    .then(data => {
        const usuariosConectados = data.presence_count;
        const titulo = document.getElementById('discordNumero');
        titulo.innerText += usuariosConectados;
    })
    .catch(error => {
        console.error('Error:', error);
    });