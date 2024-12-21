// // // prompt, alert, confirm, if, else if, else

// // // // PROMPT
// // // let a = prompt('your name');
// // // let b = prompt(you surname);
// // // console.log(a);
// // // console.log(b);


// // // ALERT
// // // alert('you account will be blocked');


// // // // CONFIRM
// // // let a = confirm('Can you enter your age');
// // // if (a) {
// // //     let b = prompt('How old are you?');
// // //     console.log(b);
// // // }
// // // else {
// // //     alert('You cannot enter')
// // // }


// // // const age = +prompt('How old are you');

// // // if (age > 18) {
// // //     const name = prompt('What is your name?').toLowerCase();

// // //     if (name[0] === 'a') {
// // //         const peopleCount = +prompt('How many people are there');

// // //         if (peopleCount < 6) {
// // //             alert('welcom');
// // //         } else {
// // //             alert('You cannot enter.');
// // //         }
// // //     } else {
// // //         alert('You cannot enter.');
// // //     }
// // // }

// // const number_1 = +prompt('first number');
// // if (number_1 === 1) {
// //         alert ('1')
// //     }

// // const number_2 = +prompt('second number');
// // if (number_2 === 2) {
// //     alert ('2')
// // }
// // const operator = prompt('operator(+, -, *, /)');
// // alert('3')

// let a = 2;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let str = 'Alex';


// // index
// console.log(arr[3]);
// console.log(arr.at(5));

// // indexOf
// console.log(arr.indexOf(5));

// // includes
// console.log(arr.includes(1234));

// // slice
// console.log(arr.slice(2, 5));

// // =====Array mathods=====
// // splice
// console.log(arr.splice(2, 3));

// // Push, unshift, shift, pop
// arr.push(123);
// arr.unshift(124);
// arr.shift();
// arr.pop();

// console.log(arr);


// let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, deserunt";
// console.log(text.replace('.'));
// console.log(text);

// let arr1 = [0, 123, -3, 43, 22, -16, 12, 99, 100];
// console.log(arr1[0]);
// console.log(arr1.at(100));

//14.12.24
// const even = [];
// const odd = [];
//map, forEach, filter, find, sort

// const arr = [
//     [115, 50, 25],
//     [75, 12, 99],
//     [34, 36, 55],
// ]
// // console.log(
// //     arr.map((item)) => {
// //         return item * 2;
// //     }
// // );

// const





// Отфильтровать задачи в переменные а и b
    // Сохранить количество в ключе count
    // Сохранить сами задачи в массиве-ключе arr
    
    
    
    let arr = [
        {
            userId: 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": 
true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count: 0,
        arr: []
    }
   
    let b = {
        count: 0,
        arr: []
    }


    arr.forEach(task => {
        if (task.completed) {
            b.arr.push(task);
            b.count++;
        } else {
            a.arr.push(task);
            a.count++;
        }
    });
    
    console.log(a);
    console.log(b); 