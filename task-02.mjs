//Получить массив объектов пользователей по цвету глаз (поле eyeColor).

import users from './users.mjs';

const getUsersWithEyeColor = (users, color) => {
    // твой код
    return users.filter(users=> users.eyeColor===color);
        
  };
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]