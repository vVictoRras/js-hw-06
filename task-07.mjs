import users from './users.mjs';
//Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {

return users.reduce((total, users) =>  total + users.balance, 0);
 
};
console.log(calculateTotalBalance(users)); // 20916