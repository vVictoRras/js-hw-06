//Получить массив имен пользователей по полу (поле gender).
import users from './users.mjs';

const getUsersWithGender = (users, gender) => {

    return users.filter(users=> users.gender===gender).map(users => users.name);
    // твой код
  };
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]