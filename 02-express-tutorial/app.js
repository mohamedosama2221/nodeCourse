//app.get //read data
//app.post //insert data
//app.delete //delete data
//app.put //update data
//app.all
//app.listen
//app.use
const express = require("express");
const { products } = require("./data");
const { logger } = require("./middleware/logger");
const { auth } = require("./middleware/auth");

const app = express();
// app.use(express.static("./public"));
app.use([logger, auth]); //use middleware if it was placed before another route then it wont get excuted thats why the app.use always start first
//can also use a path as first argument to specifily applay the middleware to certain routes
//in this example it will apply to any route that start with (/products) and anything after it will work
//using muliple middleware with an array  //the order of the middleware in the array will determine the order of excusions

app.get("/", (req, res) => {
  return res
    .status(200)
    .send(
      `<h1>welcome back ${req.user.name}</h1><a href="http://localhost:5000/products">products</a>`
    );
});

app.get("/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  return res.status(200).json({ newProducts });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params; //route paramter
  const singleProducts = products.filter(
    (product) => product.id === parseInt(id)
  );
  if (singleProducts.length === 0) {
    return res.status(404).send("<h1>this product not found </h1>");
  }
  return res.status(200).json({ singleProducts });
});

app.get("/v1/query", (req, res) => {
  const { search, limit } = req.query; //query params
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.includes(search)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (!sortedProducts.length) {
    return res.status(200).json({ sucess: true, data: [] });
  }
  return res.status(200).json({ sortedProducts });
});

app.all("*", (req, res) => {
  return res.status(404).send("<h1>Oops not found!</h1>");
});

app.listen(5000, () => {
  console.log("listening");
});
