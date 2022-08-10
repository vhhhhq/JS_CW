const winesContainer = document.getElementById('wine')
  const renderWines = (wines) => {
    let result = ''
    wines.forEach(element => {
      if(element.id > 10){
        return
      }
      
      result += `
      <div>
        <table class="table-wines">
          <tr class="tr">
            <td class="td-wines-1">${element.id}</td>
            <td class="td-wines-2">${element.winery}</td>
            <td class="td-wines-3">${element.wine}</td>
            <td class="td-wines-4">${element.location}</td>
            <td class="td-wines-5">${element.rating.average}</td>
            <td class="td-wines-5">"<img src="${element.image}" width="20" height="50"</td>
          </tr>
        </table>
      </div>
    `
    })
    
    winesContainer.innerHTML = result
    localStorage.setItem('API_Data', JSON.stringify(wines))
  }
  const fetchWine = () => {
    fetch("https://api.sampleapis.com/wines/reds")
      .then((response) => {
        return response.json();
      })
      .then((wines) => {
        renderWines(wines);
        console.log(wines)
      })
      .catch((error) => {
        alert('ERROR', error)
      });
  };
  fetchWine();

search = () => {
  let input, filter, table, tr, td, value;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  table = document.getElementById('wine');
  tr = table.getElementsByTagName("tr");
  for(let i = 0; i < tr.length; i++){
    td = tr[i].getElementsByTagName("td")[1];
    if(td){
      value = td.textContent || td.innerText;
      if(value.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none"
      }
    }
  }
};

filter = () => {
  let dropdown, table, tr, cell, winer, filter;
  dropdown = document.getElementById("winesDropdown");
  table = document.getElementById("wine");
  tr = table.getElementsByTagName("tr");
  filter = dropdown.value;
  for (let td of tr) {
    cell = td.getElementsByTagName("td");
    winer = cell[1] || null;
    if (filter === "Winery" || !winer || (filter === winer.textContent)) {
      td.style.display = "";
    }
    else {
      td.style.display = "none";
    }
  }
}


sortA = () => {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById('wine');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  document.getElementById("sortAz").style.display = "none";
  document.getElementById("sortZa").style.display = "block"
}
sortZ = () => {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById('wine');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  document.getElementById("sortZa").style.display = "none";
  document.getElementById("sortAz").style.display = "block"
}




  