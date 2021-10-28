//app.get //read data
//app.post //insert data
//app.delete //delete data
//app.put //update data
//app.all
//app.listen
//app.use
const express = require("express");
const app = express();
const { people } = require("./data");

app.get("/api/people", (req, res) => {
  return res.status(200).json({ success: true, data: people });
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
