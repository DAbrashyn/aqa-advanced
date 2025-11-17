"use strict";

const radius = 20;
const height = 30;
const cylinderVolume = Math.PI * (radius**2) * height;
const roundNumber = cylinderVolume.toFixed(2);

console.log(cylinderVolume);
console.log(roundNumber);