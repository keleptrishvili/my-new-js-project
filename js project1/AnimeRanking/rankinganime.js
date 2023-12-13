const tableCells = document.querySelectorAll("td");

tableCells.forEach(cell => {
  cell.addEventListener("mouseover", function() {
    this.classList.add("hovered");
  });
  cell.addEventListener("mouseout", function() {
    this.classList.remove("hovered");
  });
});
