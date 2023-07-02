// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CarSharing {
    address public owner;
    uint public last_completed_migration;

    mapping(address => bool) public funders;

    event FundsDeposited(address indexed funder, uint amount);

    constructor() {
        owner = msg.sender;
    }

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    function withdraw(uint amount) public restricted {
        payable(owner).transfer(amount);
    }

    function getFunds() public payable {
        require(funders[msg.sender], "You are not an approved funder");
        emit FundsDeposited(msg.sender, msg.value);
    }

    function addFunder(address funder) public restricted {
        funders[funder] = true;
    }

    function removeFunder(address funder) public restricted {
        funders[funder] = false;
    }

    function rental() public payable {
        require(msg.value > 0, "Please send some ether");
        (bool sent, ) = address(this).call{value: msg.value}("");
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}