const router = require('express').Router();
let Identity = require('../models/identity.model');

router.route('/:id').get((req,res)=>{
    Identity.findById(req.params.id)
        .then(identities => res.json(identities))
        .catch(err => res.status(404).json("Error: " + err));   
});

router.route('/:id').delete((req,res)=>{
    Identity.findByIdAndDelete(req.params.id)
        .then(() => res.json("deleted"))
        .catch(err => res.status(400).status("Error: "+err));
});


router.route('/update/:id').post((req,res)=>{
    Identity.findById(req.params.id)
    .then(identities => {

    identities.identity = req.body.identity;
    identities.username = req.body.username;
    identities.newIdentity = new Identity({username, identity});

    identities.save()
        .then(() => res.json(identities))
        .catch(err => res.status(400).json('Error: ' + err));
    });
});
module.exports = router;