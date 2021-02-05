import hardhat from 'hardhat';

async function main() {
    console.log("deploy start")

    const AssetToken = await hardhat.ethers.getContractFactory("AssetToken")
    const assetToken = await AssetToken.deploy(
        10000,
        "FirstAssetToken",
        "FAT",
        0
    )
    console.log(`AssetToken address:${assetToken.address}`)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });



  
