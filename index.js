
var player=prompt("What is your name???","you");
if(player===""||player===null)
{
    document.getElementsByClassName("container")[0].classList.toggle("invisible");
    document.getElementsByTagName("body")[0].innerHTML="<h1>Please eneter your name??? \n To enetr your name refresh the site.</h1>";
    
}
else{
document.getElementsByClassName("player2")[0].innerHTML=player;
function game(){
var randomNumber1=Math.floor(Math.random()*6)+1;

//for the first player
if(randomNumber1===1)
{
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice1.png");
}
else if(randomNumber1===2)
    {
        document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice2.png");
    }
    else if(randomNumber1===3)
        {
            document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice3.png");

        }
        else if(randomNumber1===4)
            {
                document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice4.png");
            }
            else if(randomNumber1===5)
                {
                    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice5.png");
                }
                else if(randomNumber1===6)
                    {
                        document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice6.png");
                    }

                    // for next player
                    var randomNumber2=Math.floor(Math.random()*6)+1;
                    if(randomNumber2===1)
                        {
                            document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice1.png");
                        }
                        else if(randomNumber2===2)
                            {
                                document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice2.png");
                            }
                            else if(randomNumber2===3)
                                {
                                    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice3.png");
                        
                                }
                                else if(randomNumber2===4)
                                    {
                                        document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice4.png");
                                    }
                                    else if(randomNumber2===5)
                                        {
                                            document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice5.png");
                                        }
                                        else if(randomNumber2===6)
                                            {
                                                document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice6.png");
                                            }

                                    
                                            if(randomNumber1>randomNumber2)
                                            {
                                                document.getElementsByTagName("h1")[0].innerHTML="i Win!";
                                            }
                                            else if(randomNumber1<randomNumber2)
                                                {
                                                    document.getElementsByTagName("h1")[0].innerHTML="You Win!";
                                                }
                                                else{
                                                    document.getElementsByTagName("h1")[0].innerHTML="Draw";
                                                }
                                            }
                                            game();
                                        }