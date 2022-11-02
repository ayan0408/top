

const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


class Quiz
{
    constructor(type, questions, results)
    {

        this.type = type;


        this.questions = questions;


        this.results = results;

        
        this.score = 0;


        this.result = 0;


        this.current = 0;
    }

    Click(index)
    {

        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;


        if(value >= 1)
        {
            correct = index;
        }
        else
        {

            for(let i = 0; i < this.questions[this.current].answers.length; i++)
            {
                if(this.questions[this.current].answers[i].value >= 1)
                {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }


    Next()
    {
        this.current++;
        
        if(this.current >= this.questions.length) 
        {
            this.End();
        }
    }


    End()
    {
        for(let i = 0; i < this.results.length; i++)
        {
            if(this.results[i].Check(this.score))
            {
                this.result = i;
            }
        }
    }
} 


class Question 
{
    constructor(text, answers)
    {
        this.text = text; 
        this.answers = answers; 
    }

    Click(index) 
    {
        return this.answers[index].value; 
    }
}


class Answer 
{
    constructor(text, value) 
    {
        this.text = text; 
        this.value = value; 
    }
}


class Result 
{
    constructor(text, value)
    {
        this.text = text;
        this.value = value;
    }


    Check(value)
    {
        if(this.value <= value)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
}


const results = 
[
    new Result("You are a good person and quite a successful person, but apparently you feel that there is some kind of cold attitude in your relationship with your spouse lately. And this makes you noticeably anxious, and you don't know if you can become a worthy parent for your unborn child. The answer lies precisely in this experience. Start working on expressing your love for your significant other. Now you need to break the ice between each other and learn how to love properly, without selfishness.",
     22),
    new Result("Unfortunately, you are not ready to become a parent yet. You need to gain more experience before taking on this responsibility. But that doesn't mean all is lost. You just need to learn more about parenting issues, their psychology, and parenting methods. Read more relevant literature, chat with those who have already become parents, watch videos and you will be able to learn everything you need.",
     33),
    new Result("You seem to have a split approach to becoming a parent. On the one hand, you are completely ready, but on the other hand, you are very much worried about something. How can this situation be corrected? Start working on your relationship with your spouse. Socialize more, relax, and spend time together. Let warmth and heart-to-heart conversations enter your relationship. By starting to work on your relationship, you will become the happiest parents and the happiest couple.",
     44),
    new Result("You are not a bad parent, but there is still something to strive for before having a child. Perhaps you have not yet decided on the organization of household life with your spouse. You don't really understand how to manage your finances properly, and what you need to pay attention to. You will be ready for parenthood when your life becomes more organized. When you understand what you want. And you should move in this direction TOGETHER.",
     55),
    new Result("We can congratulate you, because you are fully prepared to become parents. You have enough knowledge for this, upbringing and a fairly strong relationship with each other. Such warmth can be a good example for your unborn child. All you have to do is maintain such relationships and work on warmth and comfort, and then your child will not need anything. After all, quality time and attention are the most important things.",
     66)
];


const questions = 
[
    new Question("1. How do you allocate finances?", 
    [
        new Answer("We have a family budget and all expenses are discussed with each other", 5),
        new Answer("Only father works", 4),
        new Answer("The husband earns for the house and household, the wife for herself", 3),
        new Answer("Finances are the root of our quarrels", 2),
        new Answer("Constantly saving up for something", 1)
    ]),

    new Question("2. Are you able to provide the other person with finances?", 
    [
        new Answer("Yes, quite", 5),
        new Answer("I'm not sure", 4),
        new Answer("Me no, spouse yes", 3),
        new Answer("No, I'm not ready", 2),
        new Answer("I can probably do it", 1)

    ]),

    new Question("3. Who is the head of your family?", 
    [
        new Answer("Both of us", 5),
        new Answer("Husband", 4),
        new Answer("When and how. It depends on the situation. Somewhere the husband decides, somewhere the wife decides", 3),
        new Answer("Everyone wants to be the head of the family", 2),
        new Answer("Don't even know", 1)
    ]),

    new Question("4. Do you think you should give your child pocket money?", 
    [
        new Answer("Yes, let him learn how to manage money", 5),
        new Answer("Only sometimes", 4),
        new Answer("Unless he needs something", 3),
        new Answer("No, you don't have to", 2),
        new Answer("Only for necessary purchases, but not for your own expenses", 1)
    ]),

    new Question("5. Have you ever looked at pictures of happy couples on the Internet?", 
    [
        new Answer("There is no need to look at it, but I am always touched by such pairs", 5),
        new Answer("Yes, and recently more and more often", 4),
        new Answer("Just once", 3),
        new Answer("No, there was no such thing", 2),
        new Answer("Yes, and I like the way my parents look", 1)
    ]),

    new Question("6. Do you have your family as a role model?", 
    [
        new Answer("Yes, my family", 0),
        new Answer("I don't know any friends, but I know some bloggers", 0),
        new Answer("Only in my head", 1),
        new Answer("No, there is no such thing", 1),
        new Answer("Among the relatives there are", 0)
    ]),
    new Question("7. If you have a child, will someone from the older generation help you?", 
    [
        new Answer("Yes, I have many assistants among my staff", 5),
        new Answer("There are assistants on the part of the husband/wife", 4),
        new Answer("Friends will give you tips", 3),
        new Answer("No, we don't have them", 2),
        new Answer("Mom's blogs and books to help", 1)
    ]),
    new Question("8. Have you ever been a babysitter?", 
    [
        new Answer("Yes, I have nieces and nephews", 5),
        new Answer("Yes, I have younger brothers or a sister", 4),
        new Answer("Just once", 3),
        new Answer("No, never", 2),
        new Answer("No, I just watched how others do it", 1)
    ]),
    new Question("9. Have you read a book on parenting?", 
    [
        new Answer("Yes, and quite a lot", 5),
        new Answer("Just one", 4),
        new Answer("No, but I watched my mom's vlogs and other bloggers", 3),
        new Answer("No, I haven't read it", 2),
        new Answer("No, but I've seen enough of it", 1)
    ]),
    new Question("10. What emotions do cartoons from your childhood evoke in you?", 
    [
        new Answer("I'm flooded with moments from my childhood", 5),
        new Answer("I feel nostalgic", 4),
        new Answer("A rush of tenderness", 3),
        new Answer("Sadness and longing", 2),
        new Answer("Rather, I want to review them all", 1)
    ]),
    new Question("11. Do you have any nieces or nephews?", 
    [
        new Answer("Yes, and not alone", 5),
        new Answer("Yes, one/one", 4),
        new Answer("No, but I would like to", 3),
        new Answer("No, I don't have any", 2),
        new Answer("Ever will be", 1)
    ]),
    new Question("12. Have you ever watched mothers/fathers bloggers?", 
    [
        new Answer("Yes, and I still do", 5),
        new Answer("Sometimes", 4),
        new Answer("It happened a couple of times", 3),
        new Answer("No, never", 2),
        new Answer("Yes, but I didn't find the point", 1)
    ]),
    new Question("13. Are you already thinking up a name for your child?", 
    [
        new Answer("There are a couple of options, but I may change my mind", 5),
        new Answer("Oh, I came up with it a long time ago", 4),
        new Answer("I still doubt it", 3),
        new Answer("I didn't think about it / eh", 2),
        new Answer("No, but I will choose the name according to its meaning, so that the child has a good fate", 1)
    ]),
    new Question("14. How do you feel when you see a mother scolding her child on the street?", 
    [
        new Answer("Anger at her", 5),
        new Answer("Neglect", 4),
        new Answer("When and how", 3),
        new Answer("No", 2),
        new Answer("Neutral, it's none of my business", 1)
    ]),
    new Question("15. How do you feel when you see a couple of grandparents walking hand in hand down the street?", 
    [
        new Answer("It's very nice, and I want us to have the same experience.", 5),
        new Answer("I just love it", 4),
        new Answer("Neutrality", 3),
        new Answer("I don't feel anything", 2),
        new Answer("I envy them", 1)
    ]),
    new Question("16. What scares you about parenthood?", 
    [
        new Answer("Can I become a good parent?", 5),
        new Answer("Can I provide him with everything he needs", 4),
        new Answer("I'm not sure that I'm ready", 3),
        new Answer("Isn't it too early for me now?", 2),
        new Answer("Can I give him enough time and love?", 1)
    ]),
    new Question("17. How often do you fight with your significant other?", 
    [
        new Answer("We have harmony in our family", 5),
        new Answer("Rare and frivolous", 4),
        new Answer("Very rarely", 3),
        new Answer("Recently, more and more often", 2),
        new Answer("It happens, but we try not to swear", 1)
    ]),
    new Question("18. How often do you go on vacation together?", 
    [
        new Answer("Almost every weekend", 5),
        new Answer("We try as often as possible", 4),
        new Answer("Once a month", 3),
        new Answer("Recently, this practically does not happen", 2),
        new Answer("By mood", 1)
    ]),
    new Question("20. How much time are you willing to devote to your child?", 
    [
        new Answer("I will always be with him, mentally and spiritually", 5),
        new Answer("When will you have free time?", 4),
        new Answer("When he needs it", 3),
        new Answer("I doubt that much", 2),
        new Answer("Not much, but I will try to make this time high-quality", 1)
    ]),
    new Question("21. What principles do you want to use to raise your child?", 
    [
        new Answer("He must be a decent person", 5),
        new Answer("I want him to succeed", 4),
        new Answer("I'll decide as I go along", 3),
        new Answer("The main thing is that it should be independent", 2),
        new Answer("By the same principles that brought me up", 1)
    ]),
    new Question("22. The main thing in raising a child is...?", 
    [
        new Answer("Give him a choice", 5),
        new Answer("Raise a good person", 4),
        new Answer("Provide it with the very best", 3),
        new Answer("Raise an assistant for yourself", 2),
        new Answer("Give him some time", 1)
    ])

];


const quiz = new Quiz(1, questions, results);

Update();


function Update()
{

    if(quiz.current < quiz.questions.length) 
    {

        headElem.innerHTML = quiz.questions[quiz.current].text;


        buttonsElem.innerHTML = "";


        for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
        {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }
        

        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

        Init();
    }
    else
    {
        
        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
    }
}

function Init()
{
    let btns = document.getElementsByClassName("button");

    for(let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) 
{
    let correct = quiz.Click(index);
    let btns = document.getElementsByClassName("button");
    btns[index].className = "button button_correct";
    
    setTimeout(Update, 300);
}