import { fastify } from "fastify";
import { hotCoffeesList, icedCoffeesList } from "./coffeesList";

const app = fastify()

const hotCoffees = hotCoffeesList
const icedCoffees = icedCoffeesList


// Rota principal
app.get("/", async () => {
    return { message: "☕ Bem-vindo à API de Café com Fastify!" }
})

// Listar todos os cafés quentes
app.get("/coffees/hot", async () => {
    return hotCoffees
})

// Listar todos os cafés gelados
app.get("/coffees/iced", async () => {
  return icedCoffees
})

// Buscar café por Id
app.get("//coffees/hot/:id", async (request, reply) => {
    const { id } = request.params as { id: string }
    const coffee = hotCoffees.find(item => item.id === parseInt(id))

    if (coffee) {
        return coffee
    } else {
        reply.code(404)
        return { message: "Café não encontrado" }
    }
})

app.get("/coffees/iced/:id", async (request, reply) => {
  const { id } = request.params as  { id: string }
  const coffee = icedCoffees.find(item => item.id === parseInt(id))

  if (coffee) {
    return coffee
  } else {
    reply.code(404)
    return { message: "Café não encontrado" }
  }
})

// Iniciar o servidor
const start = async () => {
  try {
    await app.listen({ port: 3333 });
    console.log("🚀 Servidor rodando em http://localhost:3333");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();