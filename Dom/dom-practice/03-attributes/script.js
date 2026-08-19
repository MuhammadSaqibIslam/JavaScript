// ============================================
//  DOM ATTRIBUTES CHALLENGES
//  "// YAHAN CODE LIKHO" ke neeche apna code likho
// ============================================


// =====================
// Challenge 1: src Change
// "img-1" ka src change karo "https://picsum.photos/seed/beach/400/200"
// setAttribute use karo
// =====================

// YAHAN CODE LIKHO:
let chal1 = document.getElementById('img-1')
chal1.setAttribute('src', 'https://picsum.photos/seed/beach/400/200');

// Hint: document.getElementById('img-1').setAttribute('src', 'https://picsum.photos/seed/beach/400/200');


// =====================
// Challenge 2: alt Change
// "img-2" ka alt change karo "Beautiful Sunset"
// setAttribute use karo
// =====================

// YAHAN CODE LIKHO:
let chal2 = document.getElementById('img-2')
chal2.setAttribute('alt', 'Beautiful Sunset');

// Hint: document.getElementById('img-2').setAttribute('alt', 'Beautiful Sunset');


// =====================
// Challenge 3: href Change
// "link-1" ka href change karo "https://youtube.com"
// Aur text bhi change karo "YouTube"
// =====================

// YAHAN CODE LIKHO:
let chal3 = document.getElementById('link-1')
chal3.setAttribute('href', 'https://youtube.com');
chal3.textContent = 'YouTube'

// Hint: let link = document.getElementById('link-1');
//       link.setAttribute('href', 'https://youtube.com');
//       link.textContent = 'YouTube';


// =====================
// Challenge 4: placeholder Change
// "input-1" ka placeholder change karo "Apna naam likho..."
// =====================

// YAHAN CODE LIKHO:
let chal4 = document.getElementById('input-1')
chal4.setAttribute('placeholder', 'Muhammad Saqib')

// Hint: document.getElementById('input-1').setAttribute('placeholder', 'Apna naam likho...');


// =====================
// Challenge 5: disabled Attribute
// "btn-1" ko disabled karo
// setAttribute se disabled="true" lagao
// =====================

// YAHAN CODE LIKHO:
let chal5 = document.getElementById('btn-1')
chal5.setAttribute('disabled', 'true')

// Hint: document.getElementById('btn-1').setAttribute('disabled', 'true');


// =====================
// Challenge 6: type Change
// "input-2" ka type "text" se "password" mein change karo
// (value chup jayega)
// =====================

// YAHAN CODE LIKHO:
let chal6 = document.getElementById('input-2')
chal6.setAttribute('type', 'password')

// Hint: document.getElementById('input-2').setAttribute('type', 'password');


// =====================
// Challenge 7: classList - class Add
// "box-1" par "active" class add karo
// classList.add use karo
// =====================

// YAHAN CODE LIKHO:
let chal7 = document.getElementById('box-1')
chal7.classList.add('active')

// Hint: document.getElementById('box-1').classList.add('active');


// =====================
// Challenge 8: id Change
// "old-id" element ka id change karo "new-id"
// =====================

// YAHAN CODE LIKHO:


// Hint: document.getElementById('old-id').id = 'new-id';


// =====================
// Challenge 9: Custom data Attribute
// "data-box" par data-color="blue" set karo
// setAttribute use karo
// =====================

// YAHAN CODE LIKHO:


// Hint: document.getElementById('data-box').setAttribute('data-color', 'blue');


// =====================
// Challenge 10: getAttribute
// "link-2" ka href getAttribute se lo
// Aur "link-info" ke text mein dikhao
// =====================

// YAHAN CODE LIKHO:


// Hint: let href = document.getElementById('link-2').getAttribute('href');
//       document.getElementById('link-info').textContent = 'Link: ' + href;
