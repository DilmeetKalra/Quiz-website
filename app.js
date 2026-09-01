let question=document.querySelector('#question');
let opt1=document.querySelector('#option1');
let opt2=document.querySelector('#option2');
let opt3=document.querySelector('#option3');
let opt4=document.querySelector('#option4');   
let opt=document.querySelectorAll('.optionBtn');
let prevBtn=document.querySelector('#prevBtn');
let nextBtn=document.querySelector('#nextBtn');
let q1='If \(3x - 7 = 2x + 5\), what is the value of \(x\)?';
let q2='A number is increased by 20% and then decreased by 20%. What is the overall percentage change?';
let q3='What are the roots of \(x^2 - 7x + 12 = 0\)?';
let q4='A bag contains 5 red, 3 blue, and 2 green balls. If one ball is chosen at random, what is the probability of getting a blue ball?';
let q5='The sides of a right-angled triangle are 6 cm and 8 cm. What is the length of the hypotenuse?';
let q6='The average of five numbers is 24. If four of the numbers are 18, 21, 25, and 29, what is the fifth number?';
let q7='A car travels 240 km at a speed of 60 km/h. How long does the journey take?';
let q8='The ratio of boys to girls in a class is 3:2. If there are 40 students in total, how many boys are there?';
let questionBank=[q1,q2,q3,q4,q5,q6,q7,q8];
let options=[
    ['10','12','14','16'],
    ['No change','4% decrease','4% increase','2% decrease'],
    ['3 and 4','1 and 12','2 and 6','-3 and -4'],
    ['1/3','1/5','3/10','2/5'],
    ['10','12','14','9'],
    ['25','27','28','30'],
    ['3 hours','5 hours','6 hours','4 hours'],
    ['20','24','25','30'],
]
let i=0;
question.innerText=questionBank[i];
opt1.innerText=options[i][0];
opt2.innerText=options[i][1];
opt3.innerText=options[i][2];
opt4.innerText=options[i][3];

nextBtn.addEventListener('click',()=>{
    question.innerText=questionBank[i+1];
    opt1.innerText=options[i+1][0];
    opt2.innerText=options[i+1][1];
    opt3.innerText=options[i+1][2];
    opt4.innerText=options[i+1][3];
    i++;
    opt.forEach((option)=>{
        option.disabled=false;
        option.style.backgroundColor='lightgrey';
    })
})

prevBtn.addEventListener('click',()=>{
    question.innerText=questionBank[i-1];
    opt1.innerText=options[i-1][0];
    opt2.innerText=options[i-1][1];
    opt3.innerText=options[i-1][2];
    opt4.innerText=options[i-1][3];
    i--;
    opt.forEach((option)=>{
        option.disabled=false;
        option.style.backgroundColor='lightgrey';
    })
})

let correctAns=[
    '12','4% decrease','3 and 4','3/10','10','28','4 hours','24'
]

opt.forEach((option)=>{
    option.addEventListener('click',()=>{
        opt.forEach((o)=>{
            o.disabled=true;
        });
        if(option.innerText==correctAns[i]){
            option.style.backgroundColor='green';
        } else {
            option.style.backgroundColor='red';
        }
    })
})
