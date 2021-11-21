if(window.SimpleAnime){
new SimpleAnime();
}

if(window.SimpleForm) {
new  SimpleForm ({
  form :  " .formphp " , // seleciona o formulário 
  button :  " #enviar " , // seleciona o botão 
  erro :  " <div id = 'form-erro'> <h2>Erro no envio!</h2> <p> Um erro ocorreu, tente para o e-mail contato@frontback.com.br. </p> </div> " , // mensagem de erro de 
  sucesso :  " <div id = 'form-sucesso'> <h2> Formulário enviado com sucesso </h2> <p> Em breve eu entro em contato com você. </p> </div> " , // mensagem de sucesso 
});
}