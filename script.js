// Fetch data from the backend API
fetch("http://localhost:5000/login.html/api/intern")
  .then(response => response.json())
  .then(internData => {
    document.getElementById("internName").textContent = `Welcome, ${internData.name}`;
    document.getElementById("referralCode").textContent = internData.referralCode;
    document.getElementById("donationsRaised").textContent = internData.totalDonations;
  })
  .catch(error => {
    console.error("Error fetching intern data:", error);
  });
const loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
  alert("Please login first.");
  window.location.href = "login.html";
} else {
  document.getElementById("internName").textContent = `Welcome, ${loggedInUser}`;
}
