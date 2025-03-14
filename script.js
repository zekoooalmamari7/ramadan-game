let randomNumber;  
let attempts = 0;  

function submitName() {  
    const userName = document.getElementById('name-input').value;  
    document.getElementById('user-name').innerText = `مرحبًا، ${userName}!`;  
    document.getElementById('user-name').style.display = 'block';  
    document.getElementById('game-area').style.display = 'block';  
    randomNumber = Math.floor(Math.random() * 100) + 1; // توليد رقم عشوائي عند إدخال الاسم  
    attempts = 0; // إعادة تعيين عدد المحاولات  
    document.getElementById('name-input').style.display = 'none'; // إخفاء حقل الإدخال بعد الإدخال  
}  

function checkGuess() {  
    const userGuess = parseInt(document.getElementById('guess').value);  
    attempts++;  
    let message = '';  

    if (userGuess === randomNumber) {  
        message = `مبروك! لقد خمنت الرقم الصحيح ${randomNumber} في ${attempts} محاولة.`;  
    } else if (userGuess < randomNumber) {  
        message = 'حاول رقم أكبر.';  
    } else {  
        message = 'حاول رقم أصغر.';  
    }  

    document.getElementById('message').innerText = message;  
}  