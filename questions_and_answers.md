<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The answer is B: `ReferenceError: greetign is not defined`.

<i>Here, we have declared 'greeting', but trying to assign 'greetign' to a empty object without even declaring it. Therefore, after console logging, it will show the aforementioned error.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The answer is C: `"12"`

<i>Here, in the sum function we are passing an integer as the first argument and a string as the second argument. Javascript will try to concatenate the integer with the string because of the '+' operator resulting in the string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The answer is A: `['🍕', '🍫', '🥑', '🍔']`

<i>Modifying info.favoriteFood will not affect the food array because the array and object here are different variables with separate reference values.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The answer is B: `Hi there, undefined`

<i>The function sayHi() expects a parameter but we are calling it without any arguments. So the 'name' parameter inside the function will be undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The answer is C: 3

<i>Here we are running a forEach loop on the nums array setting a condition where it will iterate over each element in the array and increment the count variable by 1 if the element is truthy, For num=0, the condition is false so count remains 0. For num=1, its truthy so count is incremented to 1. For num=2, its truthy so count is incremented to 2. For num=3, its truthy so count is incremented to 3. The loop stops and count is 3.</i>

</p>
</details>
