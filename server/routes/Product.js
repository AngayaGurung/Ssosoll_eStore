const express = require("express");
const Product = require("../controller/productController");
const upload = require("../middleware/multer");

const router = express();

router.post("/add-product", upload.single("image"), Product.AddProduct);

module.exports = router;
