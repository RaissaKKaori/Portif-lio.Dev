const copia_email = document.getElementById('copia_email');
const copia_zap = document.getElementById('copia_zap');

copia_email.addEventListener('click', () => {    
      navigator.clipboard.writeText(copia_email.textContent).then(() => {
        alert('Texto copiado para a área de transferência!');
      }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });

      window.getSelection().removeAllRanges();
    });

copia_zap.addEventListener('click', () => {
      navigator.clipboard.writeText(copia_zap.textContent).then(() => {
        alert('Texto copiado para a área de transferência!');
      }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });

      window.getSelection().removeAllRanges();
    });
    