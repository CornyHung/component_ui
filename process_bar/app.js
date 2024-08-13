const form  =  document.getElementById('form');

const process_bar = document.getElementById('progress-bar');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData()
    const file = document.getElementById('file');
    const img = file.files[0];

    form.append('image', img)

    const config = {
        onUploadProgress : (progressEvent) => {
            const percendComplete = Math.round((progressEvent.loaded / progressEvent.total)*100)
            
            process_bar.setAttribute('value', percendComplete)
            process_bar.previousElementSibling.textContent = `${percendComplete}%`

            if (percendComplete == 100) {
                process_bar.previousElementSibling.textContent = `Successfully uploaded`    
            }
        } 
    }
    
    axios.post('https://httpbin.org/post', formData, config)
      .then(res => console.log(res))
      .catch(err => console.log(err))
})
