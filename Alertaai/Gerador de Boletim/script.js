// script.js - Lógica para o formulário de imagem

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imageForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const userText = document.getElementById('userText').value;
        const canvas = document.getElementById('imageCanvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.src = 'static/backbanner.png';

        img.onload = function () {
            // Desenha imagem de fundo
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Texto por cima da imagem
            ctx.fillStyle = '#000000';
            ctx.font = '40px Arial';
            ctx.fillText(userText, 100, 200);

            // Habilita botão de download
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.style.display = 'inline-block';
            downloadLink.innerText = 'Baixar Imagem';
        };
    });
});
