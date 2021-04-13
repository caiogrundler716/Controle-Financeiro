const transactionsUl = document.querySelector('#transactions')

const dummyTransactions = [
    { id: 1, name: 'Chocolate', amount: -20},
    { id: 2, name: 'Salário', amount: 350},
    { id: 3, name: 'Carne', amount: -15},
    { id: 4, name: 'Piano', amount: 150}
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus' 
    const amountWithoutOperator = Math.abs(transaction.amount)    
    const li = document.createElement('li')
   
    li.classList.add(CSSClass)
    li.innerHTML = ` ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    console.log(li)

    transactionsUl.prepend(li)
}

const updateBalanceValues = () =>{
 const transactionAmounts = dummyTransactions
    .map(transaction => transaction.amount)
const total = transactionAmounts
    .reduce((accumalator,transaction) => accumalator + transaction, 0)
    .toFixed(2)
const income = transactionAmounts
    .filter(value => value > 0)
    .reduce((accumalator, value) => accumalator + value, 0)
    .toFixed(2)
    const expense = transactionAmounts.filter(value => value < 0)
    console.log(expense)
}

const init = () =>{

    dummyTransactions.forEach(addTransactionIntoDom)
}

init()