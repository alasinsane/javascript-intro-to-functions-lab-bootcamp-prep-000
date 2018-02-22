function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string){
  if (logShout(string).toUpperCase() === shout(string)); {
  console.log(string.toUpperCase());
  }
}

logShout()



