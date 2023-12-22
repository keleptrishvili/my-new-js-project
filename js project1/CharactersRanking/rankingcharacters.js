$(document).ready(function() {
  $.getJSON('otherAnimeData.json', function(data) {
      let tableRows = '';

      $.each(data, function(index, anime) {
          tableRows += `
              <tr>
                  <td>${anime.rank}</td>
                  <td><img src="${anime.image}">${anime.title}</td>
                  <td>${anime.type}</td>
                  <td>${anime.score}</td>
                  <td>N/A</td>
              </tr>
          `;
      });

      $('#animeTableBody').html(tableRows);

      $('td').hover(
          function() {
              $(this).addClass('hovered');
          },
          function() {
              $(this).removeClass('hovered');
          }
      );
  });
});
