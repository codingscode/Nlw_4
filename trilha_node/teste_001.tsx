interface DadosDeEnvioEmail {
    para: string
    id: string
    assunto: string
    texto: string
}
 
function enviarEmail(dados: DadosDeEnvioEmail) {
    console.log(dados.para, dados.id, dados.assunto, dados.texto)
}
 
class EnviarEmailParaUsuario {
    send() {
       enviarEmail({para: 'Aladin@gmail.com',id: '9899',assunto: 'Olá!',texto: 'Tudo bem?'})
    }
}
 







