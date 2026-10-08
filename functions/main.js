
const Intrebari = [
    "De câte tipuri sunt țesuturile vegetale?",
    "Ce caracterisitică au țesuturile meristematice?",
    "De câte tipuri sunt țesuturile meristematice?",
    "Unde se găsesc țesuturile meristematice primordiale apicale?",//
    "Care secvență reprezintă țesuturi definitive de apărare?",
    "Care secvență reprezintă țesuturi definitive conducătoare?",
    "Pe ce organ se pot găsi țesuturi vegetale definitive?",
    "Cum se formează țesuturile meristematice?",
    "Cum se mai numesc țesuturile meristematice?",
    "Unde se întâlnesc țesuturile meristematice secundare?",
];
const Raspunsuri = [
    //1
    [
        "meristematice și definitive",
        "meristematice și définitive",
        "definitive si hialine",
        "toate de mai sus",
    ],
    //2
    [
        "rotunjit€",
        "mici",
        "diviziune mititică",
        "diviziune meiotică",
    ],
    //2
    [
        "3 tipuri(primordiale, secundare, terțiare)",
        "3 tipuri(primordiale, primare, secundare)",
        "2 tipuri(primare, secundare)",
        "2 tipuri(primare, terțiare)",
    ],
    //3
    [
        "Sub radăcină",
        "În vârful frunzelor",
        "În vârful rădăcinilor si a tulpinilor",
        "În interiorul plantei",
    ],
    //4
    [
        "xilem, colenchim, felodermă, floem",
        "ectodermă, xilem, felodermă, colenchin",
        "rizodermă, ectodermă, xilem, felodermă",
        "rizodermă, ectodermă, endodermă, felodermă",
    ],
    //2
    [
        "xilem, colenchin",
        "xilem, floem",
        "floem, suber",
        "suber, epidermă",
    ],
    //1
    [
        "frunză",
        "tulupină",
        "floare",
        "nu există!",
    ],
    //2
    [
        "prin încretirea scoarței sale",
        "prin diviziune mitotică a celulei ou",
        "prin diviziune meiotică a celulei ou",
        "prin diviziune accidentală a celulei ou",
    ],
    //2
    [
        "țesuturi meristematice",
        "țesuturi embrionare",
        "țesuturi ou",
        "țesuturi embririonare",
    ],
    //3
    [
        "se intâlnesc la plantele care nu trăiesc mult",
        "se intâlnesc la plantele care trăiesc puțin",
        "se intâlnesc la plantele care trăiesc mult",
        "se intâlnesc la plantele care adoră soarele",
    ]
];
const RaspunsuriCorecte = [
    "1",
    "2",
    "2",
    "3",
    "4",
    "2",
    "1",
    "2",
    "2",
    "3",
];
let index = -1;
let CurrentTime = 600;//10 min
let Score = 0;
let QuestionCorrectCounter = 0;
let IntrebareCurenta = 0;
let SetEnd = false;

function CheckAnswer(input)
{
    switch(index)
    {
        case 0:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 1:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 2:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 3:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 4:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 5:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 6:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 7:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 8:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
        case 9:
        {
            if(RaspunsuriCorecte[index] == input)
            {
                QuestionCorrectCounter++;
                return true;
            }
            else
            {
                return false;
            }
            break;
        }
    }
}

//DOM Elements
const AnswerA = document.querySelector(".AnswerA");
const AnswerB = document.querySelector(".AnswerB");
const AnswerC = document.querySelector(".AnswerC");
const AnswerD = document.querySelector(".AnswerD");

const Question = document.getElementById("Intrebare");

AnswerA.addEventListener("mouseover", function(){
    AnswerA.style.transform = "scale(110%)";
    AnswerA.style.transition = "0.15s";
});
AnswerA.addEventListener("mouseout", function(){
    AnswerA.style.transform = "scale(100%)";
    AnswerA.style.transition = "0.15s";
});
AnswerA.addEventListener("click", () => {
    if(CheckAnswer("1"))
    {
        Score += 10;
    }
    index++;
    IntrebareCurenta++;
    if(IntrebareCurenta > 10)
    {
        IntrebareCurenta = 1;
        SetEnd = true;
    }
    Question.textContent = Intrebari[index];
    AnswerA.textContent = Raspunsuri[index][0];
    AnswerB.textContent = Raspunsuri[index][1];
    AnswerC.textContent = Raspunsuri[index][2];
    AnswerD.textContent = Raspunsuri[index][3];
});

AnswerB.addEventListener("mouseover", function(){
    AnswerB.style.transform = "scale(110%)";
    AnswerB.style.transition = "0.15s";
});
AnswerB.addEventListener("mouseout", function(){
    AnswerB.style.transform = "scale(100%)";
    AnswerB.style.transition = "0.15s";
});
AnswerB.addEventListener("click", () => {
    if(CheckAnswer("2"))
    {
        Score += 10;
    }
    index++;
    IntrebareCurenta++;
    if(IntrebareCurenta > 10)
    {
        IntrebareCurenta = 1;
        SetEnd = true;
    }
    Question.textContent = Intrebari[index];
    AnswerA.textContent = Raspunsuri[index][0];
    AnswerB.textContent = Raspunsuri[index][1];
    AnswerC.textContent = Raspunsuri[index][2];
    AnswerD.textContent = Raspunsuri[index][3];
});

AnswerC.addEventListener("mouseover", function(){
    AnswerC.style.transform = "scale(110%)";
    AnswerC.style.transition = "0.15s";
});
AnswerC.addEventListener("mouseout", function(){
    AnswerC.style.transform = "scale(100%)";
    AnsAnswerCwerB.style.transition = "0.15s";
});
AnswerC.addEventListener("click", () => {
    if(CheckAnswer("3"))
    {
        Score += 10;
    }
    index++;
    IntrebareCurenta++;
    if(IntrebareCurenta > 10)
    {
        IntrebareCurenta = 1;
        SetEnd = true;
    }
    Question.textContent = Intrebari[index];
    AnswerA.textContent = Raspunsuri[index][0];
    AnswerB.textContent = Raspunsuri[index][1];
    AnswerC.textContent = Raspunsuri[index][2];
    AnswerD.textContent = Raspunsuri[index][3];
});

AnswerD.addEventListener("mouseover", function(){
    AnswerD.style.transform = "scale(110%)";
    AnswerD.style.transition = "0.15s";
});
AnswerD.addEventListener("mouseout", function(){
    AnswerD.style.transform = "scale(100%)";
    AnswerD.style.transition = "0.15s";
});
AnswerD.addEventListener("click", () => {
    if(CheckAnswer("4"))
    {
        Score += 10;
    }
    index++;
    IntrebareCurenta++;
    if(IntrebareCurenta > 10)
    {
        IntrebareCurenta = 1;
        SetEnd = true;
    }
    Question.textContent = Intrebari[index];
    AnswerA.textContent = Raspunsuri[index][0];
    AnswerB.textContent = Raspunsuri[index][1];
    AnswerC.textContent = Raspunsuri[index][2];
    AnswerD.textContent = Raspunsuri[index][3];
});

const LeftSwipeButton  = document.getElementById("Left");
const RightSwapButton  = document.getElementById("Right");
const QuestionCounter  = document.getElementById("Counter");
QuestionCounter.textContent = "Timp: " + CurrentTime + "| Scor: " + Score + "| Intrebare: " + IntrebareCurenta;

LeftSwipeButton.addEventListener("mouseover", function(){
    LeftSwipeButton.style.backgroundColor = "silver";
    LeftSwipeButton.style.transform = "scale(110%)";
    LeftSwipeButton.style.transition = "0.15s";
    LeftSwipeButton.style.color = "white";
});
LeftSwipeButton.addEventListener("mouseout", function(){
    LeftSwipeButton.style.backgroundColor = "white";
    LeftSwipeButton.style.transform = "scale(100%)";
    LeftSwipeButton.style.transition = "0.15s";
    LeftSwipeButton.style.color = "black";
});
LeftSwipeButton.addEventListener("click", function(){
    index--;
    QuestionCounter.textContent = "Timp: " + CurrentTime + "| Scor: " + Score + "| Intrebare: " + IntrebareCurenta;
    if(index < 0)
        index = Intrebari.length - 1;
    IntrebareCurenta--;
    if(IntrebareCurenta <= 0)
        IntrebareCurenta = 10;
    Question.textContent = Intrebari[index];
    AnswerA.textContent = Raspunsuri[index][0];
    AnswerB.textContent = Raspunsuri[index][1];
    AnswerC.textContent = Raspunsuri[index][2];
    AnswerD.textContent = Raspunsuri[index][3];
});

RightSwapButton.addEventListener("mouseover", function(){
    RightSwapButton.style.backgroundColor = "silver";
    RightSwapButton.style.transform = "scale(110%)";
    RightSwapButton.style.transition = "0.15s";
    RightSwapButton.style.color = "white";
});
RightSwapButton.addEventListener("mouseout", function(){
    RightSwapButton.style.backgroundColor = "white";
    RightSwapButton.style.transform = "scale(100%)";
    RightSwapButton.style.transition = "0.15s";
    RightSwapButton.style.color = "black";
});
RightSwapButton.addEventListener("click", function(){
    index++;
    QuestionCounter.textContent = "Timp: " + CurrentTime + "| Scor: " + Score + "| Intrebare: " + IntrebareCurenta;
    if(index > Intrebari.length - 1)
        index = 0;
    IntrebareCurenta++;
    if(IntrebareCurenta > 10)
    {
        IntrebareCurenta = 1;
        SetEnd = true;
    }
    Question.textContent = Intrebari[index];
    AnswerA.textContent = Raspunsuri[index][0];
    AnswerB.textContent = Raspunsuri[index][1];
    AnswerC.textContent = Raspunsuri[index][2];
    AnswerD.textContent = Raspunsuri[index][3];
});

const FBO = document.getElementById("FBO");
const Flag = document.getElementById("Flag");
const EndScreenHeart = document.getElementById("BH");
let ContinueExecution = true;

Flag.addEventListener("click", function(){
    FBO.style.display = "none";
    setInterval(function(){
        if(ContinueExecution)
        {
            if(CurrentTime != 0)
            {
                CurrentTime--;
                QuestionCounter.textContent = "Timp: " + CurrentTime + "| Scor: " + Score + "| Intrebare: " + IntrebareCurenta;
            }
            else
            {
                ContinueExecution = false;
                EndScreenHeart.style.display = "flex";
                FBO.style.display = "flex";
                FBO.removeChild(Flag);
                FBO.appendChild(EndScreenHeart);
            }
            if(Score === 100 || SetEnd)
            {
                ContinueExecution = false;
                EndScreenHeart.style.display = "flex";
                FBO.style.display = "flex";
                FBO.removeChild(Flag);
                FBO.appendChild(EndScreenHeart);
            }
        }
    }, 1000);
});
