const os = require("os");

setInterval(() => {
  const { freemem, totalmem } = os; //desestreturação JS

  const total = parseInt(totalmem() / 1024 / 1024);
  const mem = parseInt(freemem() / 1024 / 1024);
  const percent = parseInt((mem / total) * 100);

  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percent}%`,
  };

  console.log("=== PC STATS ===");
  console.table(stats);
}, 1000);
