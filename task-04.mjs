import users from './users.mjs';
//Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
    return users.filter(users=> users.isActive===false);

    // или так --> return users.filter(users=> !users.isActive);

};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]