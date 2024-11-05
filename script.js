// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":
for (let i = 1; i <= 15; i++) {
    if (i > 5) {
        console.log("დიდია 5-ზე");
    } else {
        console.log(i);
    }
}

// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:
const arr1 = [3, 6, 9, 12, 15];
arr1.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});

// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:
let str1 = 'hello';
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
    if (str1[i] === 'a') {
        console.log("პოვნა!");
    }
}

// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:
const colors = ["red", "green", "blue", "yellow"];
colors.forEach(color => {
    if (color.length > 5) {
        console.log(color);
    }
});

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i + " - გაყოფადია 7-ზე");
    }
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:
const arr2 = [4, 8, 12, 16, 20];
arr2.forEach(num => {
    console.log(num * 2);
});

// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა:
let word = 'javascript';
for (let i = 0; i < word.length; i++) {
    if (word[i] === 'j') {
        break; // Stop the loop when 'j' is encountered
    }
    console.log(word[i]);
}

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:
const arr3 = [5, 10, 15, 20, 25];
arr3.forEach(num => {
    if (num % 5 === 0) {
        console.log(num);
    }
});

// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':
let str2 = 'hello world';
for (let i = 0; i < str2.length; i++) {
    if (str2[i] === 'o') {
        continue; // Skip 'o'
    }
    console.log(str2[i]);
}

// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:
const arr4 = [1, 2, 3, 4, 5, 6];
let sum = 0;
arr4.forEach(num => {
    if (num % 2 === 0) {
        sum += num;
    }
});
console.log(sum);

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა:
for (let i = 1; i <= 10; i++) {
    console.log(`10 x ${i} = ${10 * i}`);
}

// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:
const arr5 = [2, 7, 4, 9, 5];
arr5.forEach(num => {
    if (num > 4) {
        console.log(num * 3);
    } else {
        console.log(num);
    }
});

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი ტექსტის დაბეჭდვა:
for (let i = 1; i <= 30; i++) {
    console.log(i);
    if (i > 10) {
        console.log("ეს რიცხვი დიდიაო 10-ზე");
    }
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:
let str3 = 'frontend';
for (let i = 0; i < str3.length; i++) {
    if (str3[i] === 'e') {
        console.log("ნაპოვნია e");
        break;
    }
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:
const arr6 = [100, 200, 300, 400, 500];
arr6.forEach(num => {
    if (num < 250) {
        console.log(num);
    }
});
