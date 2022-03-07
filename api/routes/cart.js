const Cart = require("../models/Cart");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const {creerPanier, suppPanier, majPanier, seulPanier, tousPaniers} = require("../controllers/cart");

const router = require("express").Router();


router.post("/", verifyToken, creerPanier);
router.put("/:id", verifyTokenAndAuthorization, majPanier);
router.delete("/:id", verifyTokenAndAuthorization, suppPanier);
router.get("/find/:userId", verifyTokenAndAuthorization, seulPanier);
router.get("/", verifyTokenAndAdmin, tousPaniers);

module.exports = router;
