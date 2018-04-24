// TODO: require whatever
const express = require('express');
const router = express.Router();
const energyData = require('../energydataset.js');
const valenceData = require('../valencedataset.js');
const request = require('request');
const brain = require('brain.js');
let globalEnergyNet;
let globalValenceNet;

const getAccuracy = function(net, testData) {
	let hits = 0;
	testData.forEach((datapoint) => {
		const output = net.run(datapoint.input);
		const outputArray = [Math.round(output[0]), Math.round(output[1]), Math.round(output[2])];
		if (outputArray[0] === datapoint.output[0] && outputArray[1] === datapoint.output[1] && outputArray[2] === datapoint.output[2]) {
			hits += 1;
		}
	});
	return hits / testData.length;  
}

router.get('/train', function(req, res) {
	const energySPLIT = .8 * energyData.length;
	const energyTrainData = energyData.slice(0, energySPLIT);
	const energyTestData = energyData.slice(energySPLIT + 1);

	const valenceSPLIT = .8 * valenceData.length;
	const valenceTrainData = valenceData.slice(0, valenceSPLIT);
	const valenceTestData = valenceData.slice(valenceSPLIT + 1);

	const energyNet = new brain.NeuralNetwork({
		activation: 'sigmoid', // activation function
		iterations: 20000,
		learningRate: 0.3 // global learning rate, useful when training using streams
	});

	const valenceNet = new brain.NeuralNetwork({
		activation: 'sigmoid', // activation function
		iterations: 20000,
		learningRate: 0.3 // global learning rate, useful when training using streams
	});

	energyNet.train(energyTrainData);
	valenceNet.train(valenceTrainData);

	const energyAccuracy = getAccuracy(energyNet, energyTestData);
	const valenceAccuracy = getAccuracy(valenceNet, valenceTestData);

	console.log('energy accuracy: ', energyAccuracy);
	console.log('valence accuracy: ', valenceAccuracy);

	globalEnergyNet = energyNet;
	globalValenceNet = valenceNet;

	res.status(200).send("done");
});

router.get('/data', function(req, res) {
	// let net = JSON.parse(decodeURIComponent(req.query.net));
	const analysis = JSON.parse(decodeURIComponent(req.query.song)).analysis;
	// console.log(analysis);

	const input = {
		danceability: analysis.danceability, 
		energy: analysis.energy, 
		key: analysis.key, 
		loudness: analysis.loudness, 
		mode: analysis.mode, 
		valence: analysis.valence, 
		tempo: analysis.tempo
	};

	// TODO: potentially save songs to song db
	outputEnergy = globalEnergyNet.run(input).energy_level;
	outputValence = globalValenceNet.run(input).valence_level;

	const output = {energy_level: outputEnergy.energy_level, valence_level: outputValence.valence_level};

	console.log(output);
	res.send({output: output});//net.run(/* here */)});
});

module.exports = router;