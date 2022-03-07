const Cart = require("../models/Cart");

exports.creerPanier = (req, res) => {
    const panier = new Cart(req.body);
    panier.save().then(
        panier => res.status(200).json(panier)
    ).catch(err => res.status(500).json(err))
}

exports.majPanier = (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, {$set: req.body,}, {new: true}
    ).then(panier => res.status(200).json(panier)
    ).catch(err => res.status(500).json(err))
}

exports.suppPanier = (req, res) => {
    Cart.findByIdAndDelete(req.params.id).then(
        () => res.status(200).json("Cart has been deleted...")
    ).catch(
        err => res.status(500).json(err)
    )
}

exports.seulPanier = (req, res) => {
    Cart.findOne({userId: req.params.userId}).then(
        panier => res.status(200).json(panier)
    ).catch(
        err => res.status(500).json(err)
    )
}


exports.tousPaniers = (req, res) => {
    Cart.find().then(
        paniers => res.status(200).json(paniers)
    ).catch(
        err => res.status(500).json(err)
    )
}