'use strict';
let input_name = document.querySelector('.input_name');
let input_lastname = document.querySelector('.input_lastname');
let input_account = document.querySelector('.input_account');
let input_agency = document.querySelector('.input_agency');
let input_value = document.querySelector('.input_value');
const bank_account = [
    {
        name: "alexandre",
        lastname: "amorim de jesus",
        account_number: "0095379-0",
        agency: "7841-3",
        account_type: "salario",
        value: 10538.35,
        bank_code: "237"
    },
    {
        name: "debora",
        lastname: "camargo de souza",
        account_number: "1045773-0",
        agency: "6127-9",
        account_type: "corrente",
        value: 10000.10,
        bank_code: "260"
    },
    {
        name: "Roberto",
        lastname: "alves",
        account_number: "0059276-0",
        agency: "0492-2",
        account_type: "poupanca",
        value: 7538.60,
        bank_code: "104"
    },
    {
        name: "juliana",
        lastname: "queiroz gomes",
        agency: "3874-4",
        account_number: "0039348-0",
        account_type: "conta de pagamento",
        value: 1750,
        bank_code: "341"
    },
    {
        name: "a",
        lastname: "a",
        agency: "1",
        account_number: "1",
        account_type: "conta de pagamento",
        value: 2000,
        bank_code: "001"
    },
];
let verify = document.querySelector('.deposit_button');
verify.addEventListener('click', function AccountVerify() {
    let nameVerify = input_name.value.toLowerCase();
    let lastNameVerify = input_lastname.value.toLowerCase();
    let depositValue = parseFloat(input_value.value.replace(/\D/g, "")) / 100; //.replace remove tudo que não seja número / Divide por 100 para ajustar os centavos. Isso funciona para valores monetários formatados no padrão brasileiro. Se estiver usando outro formato, pode ser necessário ajustar o código. 
    let index = bank_account.findIndex(function (item) {
        return (item.name === nameVerify && item.lastname === lastNameVerify && item.agency === input_agency.value && item.account_number === input_account.value) ? true : false;
    });
    function Deposit() {
        const transaction = Math.floor(Math.random() * (9999999 - 999999) + 999999);
        let log = document.querySelector('.log');
        if (index > -1 && depositValue > 0) {
            bank_account[index].value += depositValue;
            let newValue = bank_account[index].value;
            log.innerHTML = `
            <h2>Deposito no valor de <b>${depositValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).toString()}</b> efetuado com sucesso!</h2>
            <br>Beneficiario: <b>${nameVerify.toUpperCase()} ${lastNameVerify.toUpperCase()}</b></br>
            <br>Transacao: <b>${transaction}</b></br>
            <br>Tipo de conta: <b>${bank_account[index].account_type}</b></br>
            <br>Agencia: <b>${bank_account[index].agency}</b></br>
            <br>Numero da conta: <b>${bank_account[index].account_number}</b></br>
            <br>Banco: <b>${bank_account[index].bank_code}</b></br>
            <br>Valor do deposito: <b>${depositValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).toString()}</b></br>
            <br>Saldo atual: <b>${newValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).toString()}</b></br>`;
            return true;
        } else
            (index === -1);
        log.innerHTML = "Operação invalida, tente novamente.";
        return false;
    }
    Deposit();
});

$(function(){
    $('#account').mask('0000000-0');
    $('#agency').mask('0000-0');
    $('#value').maskMoney({ decimal: '.', thousands: '', precision: 2,  });
});