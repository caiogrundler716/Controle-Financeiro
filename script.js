const dummyTransactions = [
    { id: 1, name: 'Bolo de Chocolate', amount: -20},
    { id: 2, name: 'Salário', amount: 350},
    { id: 3, name: 'Torta De Carne', amount: -15},
    { id: 4, name: 'Guitarra', amount: 150}
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'

   
}