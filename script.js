document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const parsed_day = parseInt(day);
  const parsed_month = parseInt(month);
  const parsed_year = parseInt(year);

  const birthDate = new Date(parsed_year, parsed_month, parsed_day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > parsed_month ||
    (today.getMonth() === parsed_month && today.getDate() >= parsed_day);

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  const result = document.getElementById("result");

  if (age >= 0) {
    result.textContent = `You are ${age} years old.`;
  } else {
    result.textContent = "Please enter a valid date.";
  }
});
