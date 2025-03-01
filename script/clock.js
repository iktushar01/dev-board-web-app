function updateDate() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const currentDate = new Date();
    const day = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = monthsOfYear[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    document.getElementById("day").textContent = `${day},`;
    document.getElementById("date").textContent = `${month} ${date} ${year}`;
  }
  updateDate();