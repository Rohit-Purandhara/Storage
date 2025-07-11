
  function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("database");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
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

  const table = document.getElementById("database");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    rows[i].style.display = "";
  }
}






/* const myTable = document.getElementById("database");
const rows = myTable.querySelectorAll("tr");
const platform = document.getElementById("platformFilter").value;
const tissue = document.getElementById("tissueFilter").value;

rows.forEach(function(row) {
  const cells = row.querySelectorAll("td"); // Select both data and header cells - JUST DATA
  cells.forEach(function(cell) {
      // Perform actions on each cell element
      const matches =
      (platform === "" || item.dataset.platform === platform) &&
      (tissue === "" || item.dataset.tissue === tissue) 
      item.style.display = matches ? "" : "none";

  });
}); */
/*   
function filterAll() {
    const platform = document.getElementById("platformFilter").value;
    const tissue = document.getElementById("tissueFilter").value;
    //const category = document.getElementById("categoryFilter").value;
    //const priority = document.getElementById("priorityFilter").value;
  
    const li = document.querySelectorAll("#database td");

    li.forEach(item => {
      const matches =
        (platform === "" || item.dataset.platform === platform) &&
        (tissue === "" || item.dataset.tissue === tissue) 
        //(category === "" || item.dataset.category === category) &&
        //(priority === "" || item.dataset.priority === priority);
  
      item.style.display = matches ? "" : "none";
    });
  } */


  /* function myFunction() {
    // Declare variables
    var input, filter, ul, li, i, txtValue;
  
    // What the user inputs
    input = document.getElementById("myInput");
  
    // Convert input to uppercase for case-insensitive match
    filter = input.value.toUpperCase();
  
    // Reference the unordered list and its list items
    ul = document.getElementById("dataframe");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items
    for (i = 0; i < li.length; i++) {
      // Get text from the list item
      txtValue = li[i].textContent || li[i].innerText;
  
      // Check if user input exists in the item text
      li[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
  } */

  /* var originalHTML = table.innerHTML
function displayCoordinates(e){
  table.innerHTML = "MouseX: " + e.offsetX + "<br>" + "MouseY: " + e.offsetY;
}
function resetTable(){
  table.innerHTML = originalHTML
} */

/* function filterAll(){
  const table = document.querySelector('.filter-table'),
  filterState = {};

const dataFromRow = (row, headers) =>
  Object.fromEntries([...row.querySelectorAll('td')]
    .map((td, index) => [headers[index], td.textContent]));

const matchesCriteria = (rowData, filters) =>
  filters.every(([key, value]) => rowData[key] === value);

const refresh = () => {
  const
    headers = [...table.querySelectorAll('thead th')].map(th => th.textContent),
    filters = Object.entries(filterState),
    showAll = filters.length === 0;
  table.querySelectorAll('tbody tr').forEach(row => {
    const show = showAll || matchesCriteria(dataFromRow(row, headers), filters);
    row.classList.toggle('hidden-row', !show);
  });
};

const handleFilterChange = (e) => {
  const
    field = e.target.dataset.field,
    value = e.target.value;
  if (value) { filterState[field] = value; }
  else { delete filterState[field]; }
  refresh();
};

document.querySelectorAll('.filter').forEach(filter =>
  filter.addEventListener('change', handleFilterChange));

}
 */

/* function filterAll(){
const myTable = document.getElementById("database");
const rows = myTable.querySelectorAll("tr");

// Get selected filter values
const platform = document.getElementById("platformFilter").value;
const tissue = document.getElementById("tissueFilter").value;

// Loop through rows (skip the header if needed)
rows.forEach(function(row, index) {
  // Optional: skip the header row if it's the first one
  if (index === 0) return;

  const rowPlatform = row.dataset.platform;
  const rowTissue = row.dataset.tissue;

  const matches =
    (platform === "" || rowPlatform === platform) &&
    (tissue === "" || rowTissue === tissue);

  row.style.display = matches ? "" : "none";
});
}
 */


/* const table = document.getElementById("database");
const platform = document.getElementById("platformFilter").value;
const tissue = document.getElementById("tissueFilter").value;


function filterAll(){
for (var i = 0, row; row = table.rows[i]; i++) {

   for (var j = 0, col; col = row.cells[j]; j++) {
    var cellValue = row.cells[j]
    if (cellValue != platform && cellValue != tissue){
      row.style.display = 'none';

    }
   }  
}
} */