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
    expensedate: "2017-10-01",
    category: 2,
    expensedesc: "Food",
}).catch(function (err) {
    console.log("error", err);
});
db.expenses.add({
    expenseamount: 500,
    expensedate: "2017-10-30",
    category: 2,
    expensedesc: "Food",
}).catch(function (err) {
    console.log("error", err);
});
db.income.add({
    incomeamount: 1500,
    incomedate: "2017-10-01",
    category: 2,
    incomedesc: "Salary",
}).catch(function (err) {
    console.log("error", err);
});
db.income.add({
    incomeamount: 5000,
    incomedate: "2017-10-05",
    category: 2,
    incomedesc: "Salary",
}).catch(function (err) {
    console.log("error", err);
});



export default db;