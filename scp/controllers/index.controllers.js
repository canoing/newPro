 const indexctl= {}


 indexctl.rendenindex = (req, res) => {
    res.render('index');
}
indexctl.rendepublicar = (req, res) => {
    res.render('publicar');
}

module.exports = indexctl