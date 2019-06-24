const watchFirstEpisode = function() {
  // Watch first episode
  console.log('Watch first episode');
};

const watchBreakingBad = function() {
  console.log('Watching Breaking bad');
  // watchBreakingBad
  watchFirstEpisode();
  console.log('No more for today');
};

const goForARun = function() {
  console.log('Im running! look at me!');
}

const helpStudentsWithHomework = function() {
  console.log('Help help help');
}

function finishMondayEvening(functionThatIsParameter) {
  functionThatIsParameter();
  //finishMondayEvening
  goForARun();
   //finishMondayEvening
  helpStudentsWithHomework();
   //finishMondayEvening
  console.log('done for today')
}

// draw call stack
finishMondayEvening(watchBreakingBad);
// draw call stack