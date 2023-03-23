function populateFruitModal(elem) {
	var id = elem.id;
	var modal = document.getElementById("modalContent").style.width = "498px";
	var dataFileTemplate = document.getElementById("dataFileTemplate")
	var enemyTemplate = document.getElementById("enemyTemplate");
	var fruitTemplate = document.getElementById("fruitTemplate");
	var dataFileTemplateNoImage = document.getElementById("dataFileTemplateNoImage");
	var infoCardTemplate = document.getElementById("infoCardTemplate");
	infoCardTemplate.style.display = "none"
	dataFileTemplate.style.display = "none";
	fruitTemplate.style.display = "block";
	enemyTemplate.style.display = "none";
	dataFileTemplateNoImage.style.display = "none";
	document.getElementById("fruitVideo").setAttribute("src", fruitIcons[id]["mp4"]);
	document.getElementById("juiceValue").textContent = fruitIcons[id]["juiceYield"];
	document.getElementById("carryWeight").textContent = fruitIcons[id]["carryWeight"];
	document.getElementById("iconTitle").textContent = fruitIcons[id]["title"];
	document.getElementById("fruitFlavorText").textContent = fruitIcons[id]["text"];
}

function populateEnemyModal(elem) {
	var id = elem.id
	var modal = document.getElementById("modalContent").style.width = "900px";
	var dataFileTemplate = document.getElementById("dataFileTemplate")
	var enemyTemplate = document.getElementById("enemyTemplate");
	var fruitTemplate = document.getElementById("fruitTemplate");
	var dataFileTemplateNoImage = document.getElementById("dataFileTemplateNoImage");
	var infoCardTemplate = document.getElementById("infoCardTemplate");
	infoCardTemplate.style.display = "none"
	dataFileTemplate.style.display = "none";
	fruitTemplate.style.display = "none";
	enemyTemplate.style.display = "flex";
	dataFileTemplateNoImage.style.display = "none";
	document.getElementById("enemyVideo").setAttribute("src", enemyIcons[id]["mp4"]);
	document.getElementById("enemyCarryWeight").textContent = enemyIcons[id]["carryWeight"];
	document.getElementById("seedYield").textContent = enemyIcons[id]["seedYield"];
	document.getElementById("iconTitle").textContent = enemyIcons[id]["title"];
	document.getElementById("enemyComment").textContent = enemyIcons[id]["olimarComment"];
	var olimarIcon = document.getElementById("olimarIcon");
	function captainClassRemover() {
		var arrImages = document.getElementsByClassName("captain");
		for (i = 0; i < arrImages.length; i++) {
			arrImages[i].classList.remove("activeCaptain");
		}
	}
	olimarIcon.onclick = function() {
		var captainImg = this.children[0];
		captainClassRemover();
		captainImg.classList.add("activeCaptain");
		document.getElementById("enemyComment").textContent = enemyIcons[id]["olimarComment"];
	}
	var louieIcon = document.getElementById("louieIcon");
	louieIcon.onclick = function() {
		var captainImg = this.children[0];
		captainClassRemover();
		captainImg.classList.add("activeCaptain")
		document.getElementById("enemyComment").textContent = enemyIcons[id]["louieComment"];
	}
	var alphIcon = document.getElementById("alphIcon");
	alphIcon.onclick = function() {
		var captainImg = this.children[0];
		captainClassRemover();
		captainImg.classList.add("activeCaptain")
		document.getElementById("enemyComment").textContent = enemyIcons[id]["alphComment"];
	}
	var brittanyIcon = document.getElementById("brittanyIcon");
	brittanyIcon.onclick = function() {
		var captainImg = this.children[0];
		captainClassRemover();
		captainImg.classList.add("activeCaptain")
		document.getElementById("enemyComment").textContent = enemyIcons[id]["brittanyComment"];
	}
	var charlieIcon = document.getElementById("charlieIcon");
	charlieIcon.onclick = function() {
		var captainImg = this.children[0];
		captainClassRemover();
		captainImg.classList.add("activeCaptain")
		document.getElementById("enemyComment").textContent = enemyIcons[id]["charlieComment"];
	}
}

function populateDataFiles(elem) {
	var id = elem.id
	var modal = document.getElementById("modalContent").style.width = "680px";
	var dataFileTemplate = document.getElementById("dataFileTemplate");
	var enemyTemplate = document.getElementById("enemyTemplate");
	var fruitTemplate = document.getElementById("fruitTemplate");
	var dataFileTemplateNoImage = document.getElementById("dataFileTemplateNoImage");
	var infoCardTemplate = document.getElementById("infoCardTemplate");
	infoCardTemplate.style.display = "none"
	dataFileTemplate.style.display = "block";
	dataFileTemplateNoImage.style.display = "none";
	fruitTemplate.style.display = "none";
	enemyTemplate.style.display = "none";
	document.getElementById("iconTitle").textContent = dataFiles[id]["title"];
	document.getElementById("dataFileImage").setAttribute("src", dataFiles[id]["displayedImage"]);
	document.getElementById("dataFileText").textContent = dataFiles[id]["text"];
}

function populateDataFilesNoImage(elem) {
	var id = elem.id
	var modal = document.getElementById("modalContent").style.width = "498px";
	var enemyTemplate = document.getElementById("enemyTemplate");
	var fruitTemplate = document.getElementById("fruitTemplate");
	var dataFileTemplate = document.getElementById("dataFileTemplate");
	var dataFileTemplateNoImage = document.getElementById("dataFileTemplateNoImage");
	var infoCardTemplate = document.getElementById("infoCardTemplate");
	infoCardTemplate.style.display = "none"
	dataFileTemplate.style.display = "none";
	dataFileTemplateNoImage.style.display = "block";
	fruitTemplate.style.display = "none";
	enemyTemplate.style.display = "none";
	document.getElementById("iconTitle").textContent = dataFiles[id]["title"];
	document.getElementById("dataFileTextNoImage").textContent = dataFiles[id]["text"];
}

function populateInfoCard(elem) {
	var id = elem.id
	var modal = document.getElementById("modalContent").style.width = "498px";
	var enemyTemplate = document.getElementById("enemyTemplate");
	var fruitTemplate = document.getElementById("fruitTemplate");
	var dataFileTemplate = document.getElementById("dataFileTemplate");
	var infoCardTemplate = document.getElementById("infoCardTemplate");
	dataFileTemplate.style.display = "none";
	fruitTemplate.style.display = "none";
	enemyTemplate.style.display = "none";
	infoCardTemplate.style.display = "block"
	document.getElementById("iconTitle").textContent = "Information:";
	document.getElementById("infoCardText").textContent = "This website is meant to be a map/guide for the Twilight River Map in the videogame Pikmin 3 Deluxe for the Nintendo Switch. This map features various interactable icons that give you information on the element in that spot of the map. For instance, clicking on a fruit or enemy icon will create a pop-up describing the fruit/enemy you clicked. Globes can be clicked to switch to different segments of the map. Go ahead and try clicking some icons!";
}

var dapperBlob = document.getElementById("dapperBlob");
dapperBlob.onclick = function() {
	populateFruitModal(this);
};

var acidShock = document.getElementById("acidShock");
acidShock.onclick = function() {
	populateFruitModal(this);
};

var tremendousSniffer = document.getElementById("tremendousSniffer");
tremendousSniffer.onclick = function() {
	populateFruitModal(this);
};

var blondeImpostor = document.getElementById("blondeImpostor");
blondeImpostor.onclick = function() {
	populateFruitModal(this);
};

var portableSunset = document.getElementById("portableSunset");
portableSunset.onclick = function() {
	populateFruitModal(this);
};

var seedHive = document.getElementById("seedHive");
seedHive.onclick = function() {
	populateFruitModal(this);
};

var astringentClump = document.getElementById("astringentClump");
astringentClump.onclick = function() {
	populateFruitModal(this);
};

var insectCondo = document.getElementById("insectCondo");
insectCondo.onclick = function() {
	populateFruitModal(this);
};

var juicyGaggle = document.getElementById("juicyGaggle");
juicyGaggle.onclick = function() {
	populateFruitModal(this);
};

var duskPustules = document.getElementById("duskPustules");
duskPustules.onclick = function() {
	populateFruitModal(this);
};

var citrusLump = document.getElementById("citrusLump");
citrusLump.onclick = function() {
	populateFruitModal(this);
};

var lesserMockBottom = document.getElementById("lesserMockBottom");
lesserMockBottom.onclick = function() {
	populateFruitModal(this);
};

var delectableBouquet = document.getElementById("delectableBouquet");
delectableBouquet.onclick = function() {
	populateFruitModal(this);
};

var scornetMaestro = document.getElementById("scornetMaestro");
scornetMaestro.onclick = function() {
	populateEnemyModal(this);
};

var toStartMapIcons = document.getElementsByClassName("toStartMap");
for (var a = 0; a < toStartMapIcons.length; a++) {
	toStartMapIcons[a].onclick = function() {
		var map1 = document.getElementById("map1Container")
		var map2 = document.getElementById("map2Container");
		var map3 = document.getElementById("map3Container");
		map1.style.display = "block";
		map2.style.display = "none";
		map3.style.display = "none";
	};
};

var toAltFromStartMapIcons = document.getElementsByClassName("toAltFromStartMap");
for (var a = 0; a < toStartMapIcons.length; a++) {
	toAltFromStartMapIcons[a].onclick = function() {
		var map1 = document.getElementById("map1Container")
		var map2 = document.getElementById("map2Container");
		var map3 = document.getElementById("map3Container");
		map1.style.display = "none";
		map2.style.display = "block";
		map3.style.display = "none";
	};
};

var toCaveFromStartMapIcons = document.getElementsByClassName("toCaveFromStartMap");
	toCaveFromStartMapIcons[0].onclick = function() {
		var map1 = document.getElementById("map1Container")
		var map2 = document.getElementById("map2Container");
		var map3 = document.getElementById("map3Container");
		map1.style.display = "none";
		map2.style.display = "none";
		map3.style.display = "block";
};

var toStartFromCaveMapIcons = document.getElementsByClassName("toStartFromCaveMap");
for (var a = 0; a < toStartMapIcons.length; a++) {
	toStartFromCaveMapIcons[0].onclick = function() {
		var map1 = document.getElementById("map1Container")
		var map2 = document.getElementById("map2Container");
		var map3 = document.getElementById("map3Container");
		map1.style.display = "block";
		map2.style.display = "none";
		map3.style.display = "none";
	};
};

var toadyBloyster = document.getElementById("toadyBloyster");
toadyBloyster.onclick = function() {
	populateDataFiles(this);
};

var arachnode = document.getElementById("arachnode");
arachnode.onclick = function() {
	populateDataFiles(this);
};

var scorchGuard = document.getElementById("scorchGuard");
scorchGuard.onclick = function() {
	populateDataFiles(this);
};

var wingedPikmin3 = document.getElementById("wingedPikmin3");
wingedPikmin3.onclick = function() {
	populateDataFiles(this);
};

var fromMyDaughter = document.getElementById("fromMyDaughter");
fromMyDaughter.onclick = function() {
	populateDataFilesNoImage(this);
};

var journalEntry6 = document.getElementById("journalEntry6");
journalEntry6.onclick = function() {
	populateDataFilesNoImage(this);
};

var scornetMaestroDataFile = document.getElementById("scornetMaestroDataFile");
scornetMaestroDataFile.onclick = function() {
	populateDataFiles(this);
};

var toFutureVisitors = document.getElementById("toFutureVisitors");
toFutureVisitors.onclick = function() {
	populateDataFilesNoImage(this);
};

var greatPartner = document.getElementById("greatPartner");
greatPartner.onclick = function() {
	populateDataFilesNoImage(this);
};

var iveFoundAMural = document.getElementById("iveFoundAMural");
iveFoundAMural.onclick = function() {
	populateDataFilesNoImage(this);
};

var aSorryMemory = document.getElementById("aSorryMemory");
aSorryMemory.onclick = function() {
	populateDataFilesNoImage(this);
};

var burrowingSnagret = document.getElementById("burrowingSnagret");
burrowingSnagret.onclick = function() {
	populateDataFiles(this);
};

var desiccatedSkitterLeaf = document.getElementById("desiccatedSkitterLeaf");
desiccatedSkitterLeaf.onclick = function() {
	populateDataFiles(this);
};

var dwarfBulborb = document.getElementById("dwarfBulborb");
dwarfBulborb.onclick = function() {
	populateDataFiles(this);
};

var scornet = document.getElementById("scornet");
scornet.onclick = function() {
	populateDataFiles(this);
};

var wingedPikmin2 = document.getElementById("wingedPikmin2");
wingedPikmin2.onclick = function() {
	populateDataFiles(this);
};

var puffyBlowhog = document.getElementById("puffyBlowhog");
puffyBlowhog.onclick = function() {
	populateEnemyModal(this);
};

var scornetEnemy = document.getElementById("scornetEnemy");
scornetEnemy.onclick = function() {
	populateEnemyModal(this);
};

var dwarfOrangeBulborb = document.getElementById("dwarfOrangeBulborb");
dwarfOrangeBulborb.onclick = function() {
	populateEnemyModal(this);
};

var flightyJoustmite = document.getElementById("flightyJoustmite");
flightyJoustmite.onclick = function() {
	populateEnemyModal(this);
};

var desiccatedSkitterLeafEnemy = document.getElementById("desiccatedSkitterLeafEnemy");
desiccatedSkitterLeafEnemy.onclick = function() {
	populateEnemyModal(this);
};

var waterDumple = document.getElementById("waterDumple");
waterDumple.onclick = function() {
	populateEnemyModal(this);
};

var arachnodeEnemy = document.getElementById("arachnodeEnemy");
arachnodeEnemy.onclick = function() {
	populateEnemyModal(this);
};

var burrowingSnagretEnemy = document.getElementById("burrowingSnagretEnemy");
burrowingSnagretEnemy.onclick = function() {
	populateEnemyModal(this);
};

var orangeBulborb = document.getElementById("orangeBulborb");
orangeBulborb.onclick = function() {
	populateEnemyModal(this);
};

var nectarousDandelfly = document.getElementById("nectarousDandelfly");
nectarousDandelfly.onclick = function() {
	populateEnemyModal(this);
};

var infoCard = document.getElementById("infoCard");
infoCard.onclick = function() {
	populateInfoCard(this);
};

var infoCard2 = document.getElementById("infoCard2");
infoCard2.onclick = function() {
	populateInfoCard(this);
};

var infoCard3 = document.getElementById("infoCard3");
infoCard3.onclick = function() {
	populateInfoCard(this);
};