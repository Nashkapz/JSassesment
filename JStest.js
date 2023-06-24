/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let PokeNFTs=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_type,_attack1,_attack2,_megaEvol) {
let PokeBallNFT={
    name:_name,
    type:_type,
    attack1:_attack1,
    attack2:_attack2,
    megaEvol:_megaEvol
}
PokeNFTs.push(PokeBallNFT);
console.log("Minted: "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0;i<PokeNFTs.length;i++){
    console.log("\nID: \t\t\t"+ (i+1));
    console.log("Name: \t\t\t"+ PokeNFTs[i].name);
    console.log("Type: \t\t\t"+ PokeNFTs[i].type);
    console.log("Attack 1: \t\t"+ PokeNFTs[i].attack1);
    console.log("Attack 2: \t\t"+ PokeNFTs[i].attack2);
    console.log("Mega Evolution: "+ PokeNFTs[i].megaEvol);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\n\nPokeNFTs Minted: "+PokeNFTs.length);
}

// call your functions below this line
mintNFT("Pikachu","Electric","Thunder Bolt","Electro Ball","NA");
mintNFT("Charizard","Fire and Flying","Seismic Toss","Fire Blast","X & Y");
mintNFT("Greninja","Water and Dark","Aerial Ace","Water Shuriken","Ash's Greninja");
mintNFT("Mewtwo","Psychic","Confusion","Psybeam","X & Y");
listNFTs();
getTotalSupply();
