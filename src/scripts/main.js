document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
      let numeromaximo = document.getElementById('numero-maximo').value;
      numeromaximo = parseInt(numeromaximo);

      let numeroaleatorio = Math.random() * numeromaximo;
      alert(numeroaleatorio);
      numeroaleatorio = Math.floor(numeroaleatorio) + 1;

      document.getElementById('resultado-valor').innerText = numeroaleatorio;
    document.querySelector('.resultado').style.display = 'block';
    })
})