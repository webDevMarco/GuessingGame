const submitButton = document.getElementById('submit-pick')


const pick = document.querySelectorAll('.pick');



submitButton.addEventListener('click', ()=>{

    pick.forEach(picks =>{
            let pickValue = picks.value;
            let pickDescValue = picks.nextElementSibling.value;
            let chosenValues = [pickValue,pickDescValue];
    
            let useValues = document.getElementById('useValues');
            chosenValues = chosenValues.join(' ')
            useValues.innerHTML = [chosenValues];
            console.log(chosenValues)
        });

        })


