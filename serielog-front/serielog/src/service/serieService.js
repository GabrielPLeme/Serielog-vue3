async function criarSerie(serie) {
  const res = await fetch("http://localhost:3000/series", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(serie),
  });

  if (!res.ok) throw new Error("Erro ao criar a series");
  return await res.json();
}

async function mostrarSeries() {
  const res = await fetch("http://localhost:3000/series", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Erro ao mostrar as series");
  return await res.json();
}

async function deletetarSerie(id) {
  const res = await fetch(`http://localhost:3000/series/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Erro ao remover");
}

async function editarSerie(id, serie) {
  const res = await fetch(`http://localhost:3000/series/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serie),
  });

  if (!res.ok) throw new Error("Erro ao editar série");

  return await res.json();
}

async function buscarSerie(id) {
  const res = await fetch(`http://localhost:3000/series/${id}`);

  if (!res.ok) throw new Error("Erro ao buscar série");

  return await res.json();
}

export { criarSerie, mostrarSeries, deletetarSerie, editarSerie, buscarSerie };
