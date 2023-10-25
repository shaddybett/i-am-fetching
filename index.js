fetch('db.json')
.then(response => response.json())
.then((data)=>{
data.data.forEach(element =>{
    const names = document.createElement('p');
    names.textContent = element.common_name;
    let body = document.body;
    body.appendChild(names);

    const images = document.createElement('img');
    images.src = element.image_url;
    body.appendChild(images)

    const name = document.createElement('p')
    name.textContent = element.scientific_name;
    body.appendChild(name)
    
}),
console.log(data)})