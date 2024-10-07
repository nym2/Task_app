const MODAL = document.querySelector("#modal");
const CANCEL_BUTTON = document.querySelector("#cancel_button");
const ADD_BUTTON = document.querySelector("#add_button");
const COMPLETE_CONTAINER = document.querySelector("#complete_container");

function hideModal() {
  MODAL.classList.add("hidden");
}

function showModal() {
  MODAL.classList.remove("hidden");
}

ADD_BUTTON.addEventListener("click", showModal);
CANCEL_BUTTON.addEventListener("click", hideModal);

// FETCHING => GET requests;

function fetchData() {
  fetch("file://wsl.localhost/Ubuntu/home/pamba/Nympha/phase-1/Task_app/index.html")
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
    });
}

function renderItems(data) {
  // complete and incomplete tasks
  const incompleteTasks = data.filter((task) => task.isComplete === false);

  incompleteTasks.forEach((task) => {
    const div = document.createElement("div");
    div.classList =
      "flex items-center justify-between p-4 hover:bg-neutral-100";

    // Add content inside the div;

    COMPLETE_CONTAINER.appendChild(div);
  });
}


fetchData();