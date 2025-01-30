function fetchUsers()
{
let x = fetch("https://jsonplaceholder.typicode.com/users");
console.log(x);
 x
.then((response)=>{
console.log(response)
console.log(response.json());
return response.json().then(data=>{
console.log(data);
let store = document.getElementById("store");
console.log(store);
data.map((user)=>{
console.log(user);
store.innerHTML += 
<tr>
<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.company}</td>
<td>${user.salary}</td>
<td>${username.address}</td>
</tr>   
           })
       })
    })
    .catch(err=>console.log(err))
}
 fetchUsers();