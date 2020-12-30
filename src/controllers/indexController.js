module.exports = {

  get: (req, res) => {
    res.status(200).sendFile("E:/Projeto_TCC/src/views/index.html");
  }
}