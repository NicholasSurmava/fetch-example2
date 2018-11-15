// event Listener
document.getElementById('getRaw').addEventListener('click', getRaw);
document.getElementById('getSites').addEventListener('click', getSites);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

function getRaw() {
    // fetch('sample.json')
    // .then(function(res){
    //     return res.json();
    // })
    // .then(function(data){
    //     console.log(data);
    // });

    fetch('sample.json')
    .then((res => res.json()))
    .then((data) => {
        console.log(data);
        document.getElementById('output').innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.log(err));
}

function getSites() {
    fetch('sample.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(function(site){
            console.log(data);
            output += 
            `
            <ul>
                <li>ID: ${site.site_id}</li>
                <li>Site Name: ${site.site_name}</li>
                <li>Address: ${site.address}</li>
                <li>CSR IP: ${site.CSR_ip}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            console.log(data);
            output += 
            `
            <h1>Title: ${post.title}</h1>
            <p>Post Body: ${post.body}</p>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}