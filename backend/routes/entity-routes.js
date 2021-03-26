const router = require("express").Router();
const Entity = require("../models/Entity");

// Of all the entites, returns an array of entites that belongs to the current user
async function findEntities(entities, id) {
  let entityList = [];
  for (let entity of entities)
    try {
      console.log(entity);
      if (entity.host._id == id) entityList.push(entity);
      console.log(entityList);
    } catch (e) {
      console.log(e);
    }
  return entityList;
}

// Of all the entites, returns an array of entites that belongs to the current user
async function getAllEntities(entities) {
  let entityList = [];
  for (let entity of entities)
    try {
      console.log(entity);
      const tempEntity = {
        username: entity.username,
        _id: entity._id,
      };
      entityList.push(tempEntity);
    } catch (e) {
      console.log(e);
    }
  return entityList;
}

//Example cURL request
/*
    curl --location --request GET 'http://localhost:3000/entity/604a1ec3d7f2b33c341847bf'
    */

//Get all entities of current user

router.get("/:id", async (req, res) => {
  /*
          - Find all entities
          - If the entity host is current user, add it to the list
          - Return the list
           */

  //let entityList = [];

  const entities = await Entity.find().populate("host");

  //console.log(entities);

  findEntities(entities, req.params.id)
    .then((foundList) => {
      res.status(200).json(foundList);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: err.message });
    });
});

//Example CURL Request
/*
    curl --location --request POST 'http://localhost:3000/entity' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "username": "John",
    "userType": "CUSTOMER",
    "hostId": "604a1ec3d7f2b33c341847bf"
    }'
    */

//Post an entity for the current user
router.post("/", async (req, res) => {
  //Form the entity object from the request
  const entity = req.body;

  console.log(entity);

  const newEntity = new Entity({
    username: entity.username,
    userType: entity.userType,
    host: entity.hostId,
    address: entity.address,
    mobile: entity.mobile,
  });

  try {
    await newEntity.save();
    console.log(newEntity);
    res.status(201).json(newEntity);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  /*
            - Find all entities
            - If the entity host is current user, add it to the list
            - Return the list
            */

  //let entityList = [];

  const entities = await Entity.find().populate("host");

  //console.log(entities);

  getAllEntities(entities)
    .then((foundList) => {
      res.status(200).json(foundList);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: err.message });
    });
});

router.patch("/:id", async (req, res) => {
  const entityId = req.params.id;

  if (entityId.match(/^[0-9a-fA-F]{24}$/)) {
    const entity = await Entity.findOne({ _id: entityId }).populate("host");

    if (entity) {
      if (req.body.username) {
        entity.username = req.body.username;
      }

      if (req.body.userType) {
        entity.userType = req.body.userType;
      }

      if (req.body.address) {
        entity.address = req.body.address;
      }

      if (req.body.mobile) {
        entity.mobile = req.body.mobile;
      }

      if (req.body.hostId) {
        entity.host = req.body.hostId;
      }

      try {
        await entity.save();
        res.status(201).json({ id: entity._id });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    } else {
      res.status(400).json({ InvalidID: "entity with the ID doesn't exist" });
    }
  } else {
    res.status(404).json({
      invalid_id: "entity with ID not found, please provide a valid ID",
    });
  }
});

module.exports = router;
