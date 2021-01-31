// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть
// отсортированы в алфавитном порядке.
import users from "./users.mjs";
const getSortedUniqueSkills = users => {
    
    let skills =  users.reduce((acc, users) => acc.concat(users.skills), []);
    let newSkills = skills.filter((item, index, arr) => index === arr.indexOf(item)).sort();
    return newSkills;
};

console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]