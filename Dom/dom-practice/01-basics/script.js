// ============================================
//  DOM PRACTICE - EASY CHALLENGES (Beginners)
//  "// YAHAN CODE LIKHO" ke neeche apna code likho
//  Hint bhi diya hai agar zaroorat ho
// ============================================


// =====================
// Challenge 1: Text Change
// "change-me" element pakaro
// Uska text change karo "Main ne DOM seekh liya!"
// =====================

// YAHAN CODE LIKHO:
let chal1 = document.getElementById('change-me')
chal1.textContent  = "Main ne DOM seekh liya hai"



// Hint: document.getElementById('change-me').textContent = 'naya text';


// =====================
// Challenge 2: Style Change
// "style-me" ka background color "lightgreen" karo
// =====================

// YAHAN CODE LIKHO:

let chal2 = document.getElementById('style-me')
chal2.style.backgroundColor = 'lightgreen'

// Hint: document.getElementById('style-me').style.backgroundColor = 'lightgreen';


// =====================
// Challenge 3: Text Color Change
// "style-me-2" ka text color "white" karo
// =====================

// YAHAN CODE LIKHO:

let chal3 = document.getElementById ('style-me-2')
chal3.style.color = 'red'

// Hint: document.getElementById('style-me-2').style.color = 'white';


// =====================
// Challenge 4: Attribute Change
// "change-placeholder" ka placeholder change karo "Apna naam likho..."
// =====================

// YAHAN CODE LIKHO:

let chal4 = document.getElementById ('change-placeholder')
chal4.setAttribute('placeholder',  'Muhammad Saqib')

// Hint: document.getElementById('change-placeholder').setAttribute('placeholder', 'Apna naam likho...');


// =====================
// Challenge 5: Class Add
// "toggle-box" par "highlight" class add karo
// (page load hotay hi yellow ho jayega)
// =====================

// YAHAN CODE LIKHO:

let chal5 = document.getElementById('toggle-box')
chal5.classList.add('highlight')

// Hint: document.getElementById('toggle-box').classList.add('highlight');


// =====================
// Challenge 6: Class Remove
// "toggle-box-2" se "highlight" class remove karo
// (page load hotay hi yellow hata jayega)
// =====================

// YAHAN CODE LIKHO:

let chal6 = document.getElementById('toggle-box-2')
chal6.classList.remove('highlight')

// Hint: document.getElementById('toggle-box-2').classList.remove('highlight');


// =====================
// Challenge 7: Image ka src Change Karo
// "my-img" ki image change karo
// setAttribute se src change karo "https://picsum.photos/seed/cat/400/200"
// =====================

// YAHAN CODE LIKHO:

let chal7 = document.getElementById('my-img')
chal7.setAttribute('src', 'https://picsum.photos/seed/cat/400/200')
// Hint: document.getElementById('my-img').setAttribute('src', 'https://picsum.photos/seed/cat/400/200');


// =====================
// Challenge 8: Image ka alt Change Karo
// "my-img-2" ka alt attribute change karo "Beautiful Beach"
// =====================

// YAHAN CODE LIKHO:

let chal8 = document.getElementById('my-img-2')
chal8.setAttribute('alt', 'Beautiful Beach')

// Hint: document.getElementById('my-img-2').setAttribute('alt', 'Beautiful Beach');


// =====================
// Challenge 9: Link ka href Change Karo
// "my-link" ka href change karo "https://youtube.com"
// Aur textContent bhi change karo "YouTube"
// =====================

// YAHAN CODE LIKHO:

let chal9 = document.getElementById('my-link')
chal9.setAttribute('href', 'https://youtube.com')
chal9.innerHTML = 'YouTube'

// Hint: var link = document.getElementById('my-link');
//       link.setAttribute('href', 'https://youtube.com');
//       link.textContent = 'YouTube';


// =====================
// Challenge 10: Link mein target Add Karo
// "my-link-2" ka href change karo "https://github.com"
// Aur textContent change karo "GitHub"
// =====================

// YAHAN CODE LIKHO:

let chal10 = document.getElementById('my-link-2')
chal10.setAttribute('href', 'https://github.com')
chal10.innerHTML = 'GitHub'

// Hint: var link2 = document.getElementById('my-link-2');
//       link2.setAttribute('href', 'https://github.com');
//       link2.textContent = 'GitHub';
