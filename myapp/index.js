const app = require('express')();
const fs = require('fs');
const PORT = 3000;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)


app.get('/employees', (req, res) => {
  console.log(res)
  res.sendFile('employees.json', { root: __dirname });
});

let employees = JSON.parse(fs.readFileSync('./employees.json', 'UTF-8'));

app.get('/employees/:id', (req, res) => {
    let id = +req.params.id; 
    if (id <= 0 || id > 10) {
      res.status(404).send("404 Error: Employee Not Found");
    } else {
    let employee = employees.find(e => e.id === id);
    res.send(employee);
  };
});

































  // app.get('/employees', (req, res) => {
//     res.status(200).send({
//         tshirt: 'T',
//         size: 'large'
//     })
// });


// app.get('/tshirt/:id', (req, res) => {
//     const { id } = req.params;
//     const { logo } = req.body;
//     if (!logo) {
//         res.status(418).send({ message: 'We need a logo!'})
//     }

//     res.send({
//         tshirt: `T with your ${logo}`,
//     });
// });
