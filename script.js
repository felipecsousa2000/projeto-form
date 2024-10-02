
const handleSubmit= (event)=>{
    event.preventDefault();

    const name = document.querySelector(`input[name=name]`).value;
    const email=document.querySelector(`input[name=email]`).value;

  fetch('https://api.sheetmonkey.io/form/qQhERNqRoiL3Un9srfFTto', {
    method:'post',
    headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json', 
    },
   
    body: JSON.stringify({name:name, email:email})
     // body: JSON.stringify({name:'marcos', email:'marcos@email.com'})
  });
}

document.querySelector('form').addEventListener("submit",handleSubmit);
  
