import Dexie from 'dexie';
Dexie.delete('ExpenseDB');
const db = new Dexie('ExpenseDB');
db.version(2).stores({
    expenses: '++id,expenseamount,expensedate,expensedesc',
    income: '++id,incomeamount,incomedate,incomedesc,category',
    category: '++id,name,desc'

});
db.expenses.add({
    expenseamount: 100,
    expensedate: "13-09-2017",
    category: 2,
    expensedesc: "Food",
}).catch(function (err) {
    console.log("error", err);
});
db.income.add({
    incomeamount: 100,
    incomedate: "10-09-2017",
    category: 2,
    incomedesc: "Salary",
}).catch(function (err) {
    console.log("error", err);
});

// income: 'incomeamount,incomedate,incomedesc,category',
// category: 'name,desc'

export default db;