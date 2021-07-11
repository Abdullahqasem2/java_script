const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar);
console.log(otherRandomCar);
/////////////////////////////////////////////////////////////////////////
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(employee.name);
console.log(otherName);
///////////////////////////////////////////////////////////////////////////
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password : 12345
}
// const password = '12345';
const { password: hashedPassword } = person;  
console.log(person.password);
console.log(hashedPassword);
////////////////////////////////////////////////////////////////////////////
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
////////////////////////////////////////////////////////////////////////////
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);