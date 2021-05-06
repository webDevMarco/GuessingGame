const submitButton = document.getElementById('submit-pick')
const pick = document.querySelectorAll('.pick');
const playerContent = document.getElementById('player-content')

let topicPicks = document.getElementById('topic-picks');
let topicName = document.querySelectorAll('.topic')
let allTopics = ['Foods','Movies','Video Games','Sports'];


let randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
topicName.forEach(topic =>{
    topic.innerText = randomTopic;
})
randomTopic = randomTopic.toLocaleLowerCase();

topicPicks.innerText = randomTopic;


let chosenValues = [];

submitButton.addEventListener('click', ()=>{

pick.forEach(picks =>{
    // Get information on inputs
        let pickValue = picks.value;
        let pickDescValue = picks.nextElementSibling.value;
        chosenValues.push(pickValue,pickDescValue);
        });

    // once submit button is clicked, hide topic page and create a new one
    
    hidePlayerContent()

    // Put input values on HTML
    /*
        let useValues = document.getElementById('useValues');
        chosenValues = chosenValues.join(' ')
       useValues.innerHTML = chosenValues;
         console.log(chosenValues)
                 */
       
        })


function hidePlayerContent(){
    let guessingContent = document.getElementById('guessing-content');
    guessingContent.classList.remove('hide')
    playerContent.classList.add('hide');

    const firstTopic = document.getElementById('first-topic');
    firstTopic.innerText = chosenValues;
}
