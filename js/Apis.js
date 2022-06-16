
// utilice una Api para subir datos

function obtenerTitulo(){
	const URLGET="https://jsonplaceholder.typicode.com/posts";
	fetch(URLGET)
	.then(resp => resp.json())
	.then(data =>{
		let posts=data;
		console.log(data);
		posts.forEach(post =>{
			document.querySelector("#fotos").innerHTML+=`
			<tr>
			   <td>${post.title}</td>
			   <td>${post.body}</td>
			   
			</tr>   `		
		});
	})
}

obtenerTitulo();
