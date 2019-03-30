const lexicon = ["saddlebred", "walker", "arabian", "thoroughbred", "clydesdale", "welsh", "friesian", "paint", "morgan", "percheron", "belgian", "quarter", "dales", "hackney", "fell", "anglo", "morab", "shire", "standardbred"];
        let p=Math.floor(Math.random()*lexicon.length);
        let y =lexicon[p];
        let correctAnswers = y.length;
        const hangman = ["noggin", "rtArm", "chest", "ltArm", "belly", "rtLeg", "ltLeg"];
        
        let computerWord=y.split("");
        console.log(computerWord);

        var currentDiv = document.getElementById("word"); 
        var letterContainers=[];

        for (var also=0; also<computerWord.length; also ++){
            console.log(also);
            thisLetter=computerWord[also];
            var outDiv=document.createElement("div");
            outDiv.classList.add("outer");
            var newDiv = document.createElement("div");  
            newDiv.classList.add("letter");
            var newContent = document.createTextNode(thisLetter); 
            newDiv.appendChild(newContent);  
            outDiv.appendChild(newDiv);
            letterContainers.push(newDiv);
            currentDiv.append(outDiv);
            }

        function check(x){
            if (correctAnswers===0){
                alert('Dude! You already won, ok? Hit "refresh" to play again!');
                return;
            }
            if (computerWord.indexOf(x) === -1){
                let piece=hangman.shift();console.log(piece);
                if (!piece){
                    alert("You're dead, bro! Game over!");
                    return;
                }
                document.getElementsByClassName(piece)[0].setAttribute("style", "opacity:1");
            }
            for (let i=0; i<computerWord.length; i++){
                if (x === computerWord[i]){
                    letterContainers[i].setAttribute("style", "opacity:1");
                    correctAnswers--;
                }
            }
            if (correctAnswers===0){
                setTimeout(function(){
                    alert('You live to guess another day!'); 
                },250);
                 
            }
        }
        
        
        document.addEventListener("keydown", function (e) {
            lettersGuessed.append(e.key);
            check(e.key);
        });