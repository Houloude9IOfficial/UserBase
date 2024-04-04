const searchInput = document.getElementById('searchInput');
const userListDiv = document.getElementById('userList');
const resultCountSpan = document.getElementById('resultCount');


// Add More Names!
let userList = [
    "Nicolas",
    "John",
    "Peter",
    "Mary",
    "Joseph",
    "Lisa",
    "Maria"
];

function displayUsers(users) {
    userListDiv.innerHTML = '';
    users.forEach(user => {
        const p = document.createElement('p');
        p.textContent = user;
        p.classList.add('user-name');
        userListDiv.appendChild(p);
    });
}

function filterUsers(searchText) {
    const filteredUsers = userList.filter(user => user.toLowerCase().includes(searchText.toLowerCase()));
    displayUsers(filteredUsers);
    updateResultCount(filteredUsers.length);
}

function updateResultCount(count) {
    resultCountSpan.textContent = `Results: ${count}`;
}

displayUsers(userList);
updateResultCount(userList.length);

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.trim();
    filterUsers(searchText);
});