
import {subscribeToHelfireClub} from './firebase/helfire-clube.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,

    }

    // Salvar no banco de dados
    
    const subscriptionId = await subscribeToHelfireClub(subscription)
    console.log('Inscrito com sucesso: ${subscriptionId}')
})

