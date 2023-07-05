// Selecione o formulário
const form = document.getElementById('form-contato');

// Adicione um evento de envio ao formulário
form.addEventListener('submit', function(event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Obtenha os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('oemail').value;
  const telefone = document.getElementById('phone').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;

  // Verifique se os campos estão preenchidos
  if (nome && email && telefone && assunto && mensagem) {
    // Construa o corpo do email
    const body = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;

    // Envie o email
    window.location.href = `mailto:vinnyciussouza@outlook.com?subject=${assunto}&body=${encodeURIComponent(body)}`;

    // Limpe os campos do formulário
    form.reset();

    // Exiba uma mensagem de sucesso
    alert('Mensagem enviada com sucesso!');
  } else {
    // Exiba uma mensagem de erro se algum campo estiver vazio
    alert('Por favor, preencha todos os campos do formulário.');
  }
});
