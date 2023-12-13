function resposta(acao) {
    if (acao === 'nao') {
      let randomLeft = Math.floor(Math.random() * 80);
      document.getElementById('nao-btn').style.left = `${randomLeft}%`;
    } else {
      alert('Que bom! Vamos namorar!');
    }
  }
  