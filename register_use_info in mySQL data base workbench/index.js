async function register(){
    const NAME = document.getElementById('name').value;
    const EMAIL = document.getElementById('email').value;

    try{
        const response = await fetch('http://localhost:3000/add-user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({NAME, EMAIL})
        });
        const data = await response.json();
        alert(data.message);
    }catch(error){
        console.error('error to fetch data', error);
    }
}