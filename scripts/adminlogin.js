const userUrl = "https://neural-innovator-5123.onrender.com/adminLogin";
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData(userUrl);
async function validateLogin() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const apiUrl = 'https://neural-innovator-5123.onrender.com/adminLogin';
    const adminData = await fetchData(apiUrl);
    console.log(adminData);
    const user = adminData.find(admin => admin.email === emailInput && admin.password === passwordInput);

    if (user) {
        window.location.href = "room-list-2.html";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.querySelector('.rbutton');
    signInButton.addEventListener('click', validateLogin);
});