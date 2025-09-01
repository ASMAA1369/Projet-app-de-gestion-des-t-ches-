const mongoose = require("mongoose");
const connectDB = require("./config/db"); // connexion centralisée
const User = require("./models/User");
const Task = require("./models/Task");

const seedData = async () => {
  try {
    // Connexion à la DB
    await connectDB();

    // Supprimer les anciennes données
    await User.deleteMany();
    await Task.deleteMany();

    // Créer des utilisateurs
    const user1 = await User.create({
      username: "Karla Smith",
      email: "karla@example.com",
      password: "123456",
    });
    const user2 = await User.create({
      username: "Eduardo Goodman",
      email: "eduardo@example.com",
      password: "123456",
    });

    // Créer des tâches pour chaque utilisateur
    await Task.create([
      {
        user: user1._id,
        title: "Suivi des livraisons",
        description: "Contacter les transporteurs et leur informer sur le deadline",
        completed: false,
      },
      {
        user: user1._id,
        title: "Paiement des agents",
        description: "Préparer le paiement pour les transferts internationaux",
        completed: true,
      },
      {
        user: user2._id,
        title: "Cours React",
        description: "Terminer le projet MERN",
        completed: false,
      },
    ]);

    console.log("✅ Données seedées avec succès");
    process.exit();
  } catch (error) {
    console.error("❌ Erreur lors du seeding :", error.message);
    process.exit(1);
  }
};

seedData();
