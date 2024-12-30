const disabledKeys = ["c", "C", "x", "J", "u", "I"]; // keys that will be disabled
  const showAlert = e => {
    e.preventDefault(); // preventing its default behaviour
    return alert("Bağışlayın, Siz bu səhifəyə müraciət etmək hüququna malik deyilsiniz!"); // showing alert message
  }
  document.addEventListener("contextmenu", e => {
    showAlert(e); // calling showAlert() function on mouse right click
  });
  document.addEventListener("keydown", e => {
    // calling showAlert() function, if the pressed key matched to disabled keys
    if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
      showAlert(e);
    }});