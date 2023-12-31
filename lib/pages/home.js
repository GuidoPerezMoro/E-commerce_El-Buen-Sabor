//IMPORTACIONES
import { getAllTasks } from "../service/tasks.js"

//INSTANCIAS DE ELEMENTOS
const contenedor_por_hacer = document.getElementById("contenedor-por-hacer")
const contenedor_en_produccion = document.getElementById("contenedor-en-produccion")
const contenedor_por_testear = document.getElementById("contenedor-por-testear")
const contenedor_terminada = document.getElementById("contenedor-terminada")

const fillTasks = async () => {
  const tasks = await getAllTasks()

  tasks.forEach(task => {
    const category = task.category
    let container;
    if (category === "men's clothing") {
      container = contenedor_por_hacer
    } else if (category === "jewelery") {
      container = contenedor_en_produccion
    } else if (category === "electronics") {
      container = contenedor_por_testear
    } else if (category === "women's clothing") {
      container = contenedor_terminada
    }

    //Crear elemento en la tarea
    container.innerHTML += `
      <div class="col">
        <div class="card h-100">
          <img
            style="min-height: 250px; max-height: 350px;"
            class="card-img-top"
            src="${task.image}"
            alt="Tarea">
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">${task.title}</h5>
              <h6>Tiempo: <span>${task.price} h</span></h6>
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center d-flex gap-1">
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

fillTasks()