const { Client } = require("pg");
const connectionString =
  "postgres://nuipmbylppijpk:520f3880c85a9d10441bf696a7d27ea8c9be20b08a17ef2fe04e02371b7700f9@ec2-54-75-224-168.eu-west-1.compute.amazonaws.com:5432/dfipm98lo6ic7q?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

const client = new Client({
  connectionString: connectionString
});

client.connect();

module.exports = client;
