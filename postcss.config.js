import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

/**
 * Base de piadas (>= 10), cada uma com categoria.
 * Você pode editar/expandir à vontade.
 */
const PIADAS = [
  { texto: "Por que o programador confunde Halloween com Natal? Porque OCT 31 == DEC 25.", categoria: "TI" },
  { texto: "Qual é o cúmulo da velocidade? Fechar a geladeira e estar na sala vendo a luz apagar.", categoria: "Geral" },
  { texto: "O que o zero disse para o oito? Belo cinto!", categoria: "Geral" },
  { texto: "Por que o livro foi ao médico? Porque tinha muitas páginas amareladas.", categoria: "Geral" },
  { texto: "Como o JavaScript consola um amigo? console.log('vai ficar tudo bem')", categoria: "TI" },
  { texto: "Qual é o peixe que cai do céu? A chuva de piranhas (mas é só piada, relaxa!).", categoria: "Animais" },
  { texto: "Por que o tomate ficou vermelho? Porque viu o molho!", categoria: "Geral" },
  { texto: "O que o pato falou pra pata? ‘Vem quá!’", categoria: "Animais" },
  { texto: "Servidor é tipo café: quando cai, todo mundo sente.", categoria: "TI" },
  { texto: "Qual é o rei dos queijos? O reiqueijão.", categoria: "Geral" },
  { texto: "Como o cachorro paga as compras? Com cartão LATIDO.", categoria: "Animais" }
];

/** util: pega um item aleatório de uma lista */
function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/** raiz: só pra dizer que está online */
app.get("/", (_req, res) => {
  res.json({ status: "ok", endpoints: ["/piada", "/piadas/:categoria", "/categorias"] });
});

/**
 * Requisito principal:
 * GET /piada -> retorna UMA piada aleatória (qualquer categoria)
 */
app.get("/piada", (_req, res) => {
  const item = randomFrom(PIADAS);
  res.json({ piada: item.texto, categoria: item.categoria });
});

/**
 * Desafio bônus:
 * GET /piadas/:categoria -> retorna piada aleatória da categoria
 * Ex.: /piadas/TI  ou  /piadas/animais
 */
app.get("/piadas/:categoria", (req, res) => {
  const cat = req.params.categoria.toLowerCase();
  const pool = PIADAS.filter(p => p.categoria.toLowerCase() === cat);

  if (pool.length === 0) {
    return res.status(404).json({
      erro: "Categoria não encontrada",
      categorias_disponiveis: [...new Set(PIADAS.map(p => p.categoria))].sort()
    });
  }

  const item = randomFrom(pool);
  res.json({ piada: item.texto, categoria: item.categoria });
});

/** util extra (facilita testar no Postman): lista categorias */
app.get("/categorias", (_req, res) => {
  const categorias = [...new Set(PIADAS.map(p => p.categoria))].sort();
  res.json({ categorias });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API de piadas rodando em http://localhost:${PORT}`);
});
