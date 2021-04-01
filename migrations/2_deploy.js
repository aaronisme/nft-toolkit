// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const Box = artifacts.require("MyNFT");

module.exports = function(deployer) {
  deployer.deploy(Box);
};