module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Aanand@444",
    DB: "userDB",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  