// ============================================
//  DOM CONTENT CHALLENGES
//  "// YAHAN CODE LIKHO" ke neeche apna code likho
// ============================================


// =====================
// Challenge 1: textContent
// "text-1" ka text change karo "Main naya text hoon!"
// =====================

// YAHAN CODE LIKHO:
let chal1 = document.getElementById('text-1')
chal1.textContent = 'Main naya text hoon!'

// Hint: document.getElementById('text-1').textContent = 'Main naya text hoon!';


// =====================
// Challenge 2: innerHTML
// "html-1" ke andar innerHTML se bold text daalo
// "<b>Ye bold text hai!</b>"
// =====================

// YAHAN CODE LIKHO:
let chal2 = document.getElementById('html-1')
chal2.innerHTML = '<b>Ye bold text hai!</b>'

// Hint: document.getElementById('html-1').innerHTML = '<b>Ye bold text hai!</b>';


// =====================
// Challenge 3: innerText
// "text-2" ka innerText change karo "Ab spacing theek hai."
// =====================

// YAHAN CODE LIKHO:
let chal3 = document.getElementById('text-2')
chal3.innerText = 'Ab spacing theek hai.'

// Hint: document.getElementById('text-2').innerText = 'Ab spacing theek hai.';


// =====================
// Challenge 4: Multiple Elements Change
// Saari "fruit" class wali items ka text change karo
// Pehli ko "Strawberry", doosri ko "Grapes", teesri ko "Watermelon"
// querySelectorAll use karo
// =====================

// YAHAN CODE LIKHO:
let chal4 = document.querySelectorAll('.fruit')
chal4[0].textContent = 'Strawberry'
chal4[1].textContent = 'Grapes'
chal4[2].textContent = 'Watermelon'

// Hint: let fruits = document.querySelectorAll('.fruit');
//       fruits[0].textContent = 'Strawberry';
//       fruits[1].textContent = 'Grapes';
//       fruits[2].textContent = 'Watermelon';


// =====================
// Challenge 5: Heading Change
// "heading-1" ka text change karo "Naya Heading Aa Gaya!"
// =====================

// YAHAN CODE LIKHO:

let chal5 = document.getElementById('heading-1')
chal5.textContent = 'Naya Headign Aa Gya!'

// Hint: document.getElementById('heading-1').textContent = 'Naya Heading Aa Gaya!';


// =====================
// Challenge 6: innerHTML se List Banao
// "list-container" ke andar innerHTML se ek ul list banao
// 3 items: "HTML", "CSS", "JavaScript"
// =====================

// YAHAN CODE LIKHO:

let chal6 = document.getElementById('list-container')
chal6.innerHTML = '<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>'

// Hint: document.getElementById('list-container').innerHTML = '<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>';


// =====================
// Challenge 7: Empty karo
// "clear-me" ka saara content hata do (khali karo)
// =====================

// YAHAN CODE LIKHO:

let chal7 = document.getElementById('clear-me')
chal7.textContent = ''
// Hint: document.getElementById('clear-me').textContent = '';


// =====================
// Challenge 8: textContent vs innerHTML
// "safe-box" mein textContent se ye daalo: "<b>bold</b> tag as text"
// (HTML render nahi hona chahiye, text dikhna chahiye)
// =====================

// YAHAN CODE LIKHO:

let chal8 = document.getElementById('safe-box')
chal8.textContent = '<b>bold</b> tag as text'

// Hint: document.getElementById('safe-box').textContent = '<b>bold</b> tag as text';


// =====================
// Challenge 9: Nested HTML
// "card-box" mein innerHTML se ek card banao:
// <h3>My Card</h3><p>Ye mera pehla card hai!</p>
// =====================

// YAHAN CODE LIKHO:

let chal9 = document.getElementById('card-box')
chal9.innerHTML = '<h3>My Card</h3><p>Ye mera pehla card hai!</p>'
// Hint: document.getElementById('card-box').innerHTML = '<h3>My Card</h3><p>Ye mera pehla card hai!</p>';


// =====================
// Challenge 10: Title Change
// Page ka title change karo "Content Challenges Done!"
// document.title use karo
// =====================

// YAHAN CODE LIKHO:

document.getElementById('title-info')
document.title = 'Content Challenges Done!'

// Hint: document.title = 'Content Challenges Done!';
