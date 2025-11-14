console.log("Library Script Loaded");

// Constructor for Book
function Book(user, bookName, type) {
  this.user = user;
  this.bookName = bookName;
  this.type = type;
}

// Display constructor
function Display() {}

Display.prototype.add = function (book) {
  let tableBody = document.getElementById("table-body");

  let currentDate = new Date().toLocaleDateString();

  let count = tableBody.rows.length + 1;

  let uiString = `
    <tr>
      <td>${count}</td>
      <td>${currentDate}</td>
      <td>${book.user}</td>
      <td>${book.bookName}</td>
      <td>${book.type}</td>
      <td><button class="delete-btn">Delete</button></td>
    </tr>
  `;

  tableBody.innerHTML += uiString;

  // Add delete event
  enableDeleteButtons();
};

Display.prototype.clear = function () {
  document.getElementById("mylibraryform").reset();
};

Display.prototype.validate = function (book) {
  if (book.user.length < 2 || book.bookName.length < 2) {
    return false;
  }
  return true;
};

Display.prototype.show = function (type, message) {
  let alertBox = document.getElementById("alertuser");
  alertBox.innerHTML = `
    <div class="alert ${type}">${message}</div>
  `;

  setTimeout(() => {
    alertBox.innerHTML = "";
  }, 2000);
};

// Form Submit
let form = document.getElementById("mylibraryform");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = document.getElementById("User-Name").value.trim();
  let bookName = document.getElementById("Book-Name").value.trim();

  let genre = document.querySelector('input[name="check-box"]:checked');
  let type = genre ? genre.value : "";

  let book = new Book(user, bookName, type);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book added successfully!");
  } else {
    display.show("danger", "Please fill all fields correctly!");
  }
});

// Enable delete buttons
function enableDeleteButtons() {
  let deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.onclick = function () {
      this.parentElement.parentElement.remove();
    };
  });
}
