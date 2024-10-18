const stages =[
    { title: "Dating", description: "You met and fell in love, creating beautiful memories together.", image: 'https://gifdb.com/images/file/animated-in-love-couple-cuddling-g8fcwyvb0iydpe6y.gif', },
    { title: "Engaged", description: "You got engaged, promising to share your lives forever.", image: 'https://www.bing.com/th/id/OGC.066c7d09637eee45ffa344d6626072c5?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1631915%2fscreenshots%2f6027912%2funtitled-1.gif&ehk=cse7oFczx0OYmaB9c0XwokpO5acSH0w2zBiGdb%2fVG4M%3d' },
    { title: "Married", description: "You tied the knot, celebrating your love with friends and family.", image: 'https://www.bing.com/th/id/OGC.162068e7f902798116dd4451e21aec4f?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1375264%2fscreenshots%2f4034587%2fwedding.gif&ehk=V3C3u2ZXS9XVPpXJQi2vkDhRVT2DhuUClfD%2fwmcNnyw%3d' },
    { title: "Moved In Together", description: "You moved in together, building a cozy home filled with love.", image: 'https://i.pinimg.com/originals/30/82/dd/3082dd40cdbe3ce2a85c3d8ad661ddc0.gif' },
    { title: "Kids and Pets", description: "You welcomed children and furry friends into your lives, creating a happy family.", image: 'https://i.pinimg.com/originals/8d/46/c4/8d46c4f45f099b645c4deb1ad25d2814.gif' },
    { title: "Growing Old Together", description: "You grew old together, cherishing every moment.", image: 'https://www.bing.com/th/id/OGC.b0b90323f855a7b72146dfec4009357f?pid=1.7&rurl=https%3a%2f%2fi.gifer.com%2fYYTD.gif&ehk=XO%2fEfB28J5apZRXsa1QqnHTJxxQYN24QUVTkKY606rI%3d' }
];

let currentStageIndex = 0;

const stageTitle = document.getElementById('stageTitle');
const stageDescription = document.getElementById('stageDescription');
const coupleImage = document.getElementById('coupleImage') ;
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    if (currentStageIndex < stages.length) {
        stageTitle.innerText = stages[currentStageIndex].title;
        stageDescription.innerText = stages[currentStageIndex].description;
        coupleImage.style.backgroundImage = `url('${stages[currentStageIndex].image}')`;
        
        stageDescription.style.opacity = '0';
        coupleImage.style.opacity = '0';
        
        setTimeout(() => {
            stageDescription.style.opacity = '1';
            coupleImage.style.opacity = '1';
            coupleImage.style.transform = 'translateY(0)';
        }, 100);
        
        currentStageIndex++;
        
        if (currentStageIndex === stages.length) {
            setTimeout(() => {
                alert("A glimpse of our future together! ❤️");
            }, 500);
        }
    } else {
        nextButton.disabled = true; 
        nextButton.innerText = "Thank you for sharing this journey!";
       
  
    }
});

// Initialize first stage
stageTitle.innerText = stages[currentStageIndex].title;
stageDescription.innerText = stages[currentStageIndex].description;
coupleImage.style.backgroundImage = `url('https://i.gifer.com/2w3k.gif')`;


