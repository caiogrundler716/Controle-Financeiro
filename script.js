const transactionsUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')



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

    transactionsUl.prepend(li)
}

const updateBalanceValues = () =>{
 const transactionAmounts = dummyTransactions
    .map(transaction => transaction.amount)
const total = transactionAmounts
    .reduce((accumulator,transaction) => accumulator + transaction, 0)
    .toFixed(2)
const income = transactionAmounts
    .filter(value => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2)
const expense = transactionAmounts
    .filter(value => value < 0)
    .reduce((accumulator,value) => accumulator + value, 0)
    .toFixed(2)

    balanceDisplay.textContent = `R$ ${total}` 
    incomeDisplay.textContent = `R$ ${income}` 
    expenseDisplay.textContent = `R$ ${expense}` 


}

const init = () =>{

    dummyTransactions.forEach(addTransactionIntoDom)
    updateBalanceValues()
}

init()