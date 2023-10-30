import { getOneTask, getTaskInCategory } from "../service/tasks.js"

const id = new URLSearchParams(window.location.search).get('id')

//Inicializar elementos
const task_image = document.getElementById("task-image")
const task_title = document.getElementById("task-title")
const task_time = document.getElementById("task-time")
const task_description = document.getElementById("task-description")

const task_related_container = document.getElementById("task-related")

const fillRelatedTasks = async (category) => {
    const tasks = await getTaskInCategory(category)
    tasks.forEach(task => {
        //Crear elemento en la tarea
        task_related_container.innerHTML += `
        <div class="col py-4">
          <div class="card h-100">
            <img
              style="min-height: 250px; max-height: 350px;"
              class="card-img-top"
              src="${task.image}"
              alt="Tarea">
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${task.title}</h5>
                <h6>Tiempo: <span>${task.time} h</span></h6>
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center d-flex gap-1 justify-content-center">
                <a href="/detalle.html?id=${task.id}" class="btn btn-outline-success mt-auto">
                  Ver más
                </a>
                <a href="#" class="btn btn-outline-success mt-auto">
                  Siguente etapa
                </a>
              </div>
            </div>
          </div>
        </div>`
    });
}

//Rellenamos los detalles de la tarea
const fillDetailTask = async () => {
    const task = await getOneTask(id)
    if (task) {
        task_image.src = task.image
        task_title.innerText = task.title
        task_time.innerText = `${task.price} h`
        task_description.innerText = task.description
        //Tareas relacionadas
        fillRelatedTasks(task.category)
    }
}

fillDetailTask()
