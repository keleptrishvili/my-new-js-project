const tableCells = document.querySelectorAll("td");

tableCells.forEach(cell => {
  cell.addEventListener("mouseover", function() {
    this.classList.add("hovered");
  });
  cell.addEventListener("mouseout", function() {
    this.classList.remove("hovered");
  });
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            const characters = data.characters;

            const tableBody = document.querySelector('tbody');
            characters.forEach(character => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${character.rank}</td>
                    <td><img src="${character.image}">${character.name}</td>
                    <td>${character.anime}</td>
                    <td>${character.favorites}</td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
