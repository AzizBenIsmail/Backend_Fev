const carModel = require("../models/carSchema");

module.exports.getAllCars = async (req, res) => {
  try {
    const carList = await carModel.find();

    if (!carList || carList.length === 0) {
      throw new Error("Aucun voiture trouvé");
    }

    res.status(200).json(carList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getCarById = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await carModel.findById(id);

    if (!car || car.length === 0) {
      throw new Error("voiture introuvable");
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteCarById = async (req, res) => {
  try {
    const id = req.params.id;

    const carById = await carModel.findById(id);

    if (!carById || carById.length === 0) {
      throw new Error("voiture introuvable");
    }

    await carModel.findByIdAndDelete(id);

    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.addCar = async (req, res) => {
  try {

    const { model , prix , matricule} = req.body;

    if (!model & !prix & !matricule) {
        throw new Error("errue data");
      }

    const car = await carModel.create({
        model,prix ,matricule
    })

    res.status(200).json({car});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.updateCar = async (req, res) => {
    try {
      const id = req.params.id;
      const { model , prix , matricule} = req.body;
  
      const carById = await carModel.findById(id);
  
      if (!carById ) {
        throw new Error("voiture introuvable");
      }

      if (!model & !prix & !matricule) {
          throw new Error("errue data");
      }

      await carModel.findByIdAndUpdate(id,{
          $set: {model,prix ,matricule},
      })
  
      const updated = await carModel.findById(id);


      res.status(200).json({updated});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };