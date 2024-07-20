function calculateAge() {
  let day = document.getElementById("inputday").value;
  let month = document.getElementById("inputmonth").value;
  let year = document.getElementById("inputyear").value;

  // Check if any input field is empty
  if (day === "" || month === "" || year === "") {
    let displayElement = document.getElementById("display");
    displayElement.textContent = "Please fill in all the input fields.";
  } else {
    let birthDate = new Date(year, month - 1, day);
    let age = calculateAgeFromBirthdate(birthDate);

    let displayElement = document.getElementById("display");
    displayElement.textContent = "Your age is " +
      age.years +
      " years, " +
      age.months +
      " months, and " +
      age.days +
      " days.";
  }
}

/**
 * Calculates the age based on the birth date.
 *
 * @param {Date} birthDate - The birth date of the person.
 * @returns {Object} The age in years, months, and days.
 */
function calculateAgeFromBirthdate(birthDate) {
  let currentDate = new Date();

  let yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - birthDate.getMonth();
  let daysDiff = currentDate.getDate() - birthDate.getDate();

  // Adjust for cases where the birth day has not occurred this year
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    monthsDiff += 12;
  }

  // Adjust for cases where the birth day has not occurred this month
  if (daysDiff < 0) {
    let prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    daysDiff += prevMonthLastDay;
    monthsDiff--;
  }

  return {
    years: yearsDiff,
    months: monthsDiff,
    days: daysDiff
  };
}