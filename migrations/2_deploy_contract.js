const Migrations = artifacts.require("CarSharing");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
