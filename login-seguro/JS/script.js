/* function Teste () {
    return "Está funcionando!"
}
alert(Teste());*/
/*FUNÇÃO PARA VALIDAR E-MAIL */

function validarEmail(email) {
    return email.includes('@') && email.indexOf('.') > email.indexOf('@') + 1 /*ou mesmo 2,3 ex.:(gmail) */ && email.length > 13;
}

/*FUNÇÃO PARA VALIDAR SENHA */
function validarSenha(texto) {

    if (senha.length < 12) return false;/*verifica se tem mais de 12 caracteres */
    if (!/[A-Z]/.test(texto)) return false; /*verifica se tem alguma letra maiuscula */
    if (!/[a-z]/.test(texto)) return false; /*verifica se tem alguma letra minuscula */
    if (!/[\w_]/.test(texto)) return false; /*verifica se tem algum sinal ou simbolo*/

    return true; /* se todo condição acima for vardade, retorna true*/
}

function entrar() {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const inforSenha = document.getElementById('erro-senha');
    const inforEmail = document.getElementById('erro-email');
    let validar = false;


    if (validarEmail(email)) {
        inforEmail.textContent = '';
    } else {
        inforEmail.textContent = 'e-mail invalido!';
    }

    if (validarSenha(senha)) {
        inforSenha.textContent = '';
    } else {
        inforSenha.textContent = 'Senha precisa ter 8+ caracteres, maiusculas, minusculas, números e simbolos.';
    }
}