export const getTasks = (req, res) => {
  res.send("Obteniendo Tareas");
};

export const getTask = (req, res) => {
  res.send("Obteniendo Tarea");
};

export const createTask = (req, res) => {
  res.send("Creando Tarea");
};

export const updateTask = (req, res) => {
  res.send("Actualizando Tarea");
};

export const deleteTask = (req, res) => {
  res.send("Eliminando Tarea");
};
