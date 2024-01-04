const { expect } = require("chai");

describe("SimpleTokenコントラクト", function () {
    it("デプロイはオーナーに全トークンの供給量を割り当てるべき", async function () {
        const [owner] = await ethers.getSigners();
        const SimpleToken = await ethers.getContractFactory("SimpleToken");
        const simpleToken = await SimpleToken.deploy();

        const ownerBalance = await simpleToken.balanceOf(owner.address);
        expect(await simpleToken.totalSupply()).to.equal(ownerBalance);
    });
});
