
  function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("database");
    tr = table.getElementsByTagName("tr");
    var visibleRows = Array.from(tr).filter(row => {
        return row.style.display !== "none";
      });
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < visibleRows.length; i++) {
      td = visibleRows[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          visibleRows[i].style.display = "";
        } else {
          visibleRows[i].style.display = "none";
        }

      }
    }
  }

function filterAll() {
  const table = document.getElementById("database");
  const platform = document.getElementById("platformFilter").value;
  const tissue = document.getElementById("tissueFilter").value;

  const rows = table.getElementsByTagName("tr");
  

  for (let i = 1; i < rows.length; i++) {


    const row = rows[i];
    const platformCell = row.cells[1]?.textContent.trim().toLowerCase();
    const tissueCell = row.cells[2]?.textContent.trim().toLowerCase();
    
    const matchPlatform = (platform === "All" || platformCell === platform.toLowerCase());
    const matchTissue = (tissue === "All" || tissueCell === tissue.toLowerCase()); 

    row.style.display = (matchPlatform && matchTissue) ? "" : "none";

  }
  
}




function resetFilters() {
  document.getElementById("platformFilter").value = "All";
  document.getElementById("tissueFilter").value = "All";
  document.getElementById("myInput").value = "";


  const table = document.getElementById("database");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    rows[i].style.display = "";
  }
}

