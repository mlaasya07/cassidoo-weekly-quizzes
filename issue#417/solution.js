function groupAudioFiles(files, maxDuration) {
  // Sort in descending order (largest durations first)
  const sorted = [...files].sort((a, b) => b - a);

  const playlists = [];

  for (let file of sorted) {
    let placed = false;

    // Try to fit the file into an existing playlist
    for (let playlist of playlists) {
      const sum = playlist.reduce((acc, dur) => acc + dur, 0);
      if (sum + file <= maxDuration) {
        playlist.push(file);
        placed = true;
        break;
      }
    }

    // If it didn't fit anywhere, make a new playlist
    if (!placed) {
      playlists.push([file]);
    }
  }

  return playlists;
}

// Example
console.log(groupAudioFiles([120, 90, 60, 150, 80], 200));
// => [ [150], [120, 80], [90, 60] ]

console.log(groupAudioFiles([120, 90, 60, 150, 80], 160));
// => [ [150], [120], [90, 60], [80] ]
