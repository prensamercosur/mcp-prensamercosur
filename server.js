import express from "express";

const app = express();
app.use(express.json());

app.post("/mcp", async (req, res) => {
  res.json({
    jsonrpc: "2.0",
    id: req.body.id,
    result: {
      content: [
        {
          type: "text",
          text: "Servidor MCP de PrensaMercosur funcionando correctamente"
        }
      ]
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});