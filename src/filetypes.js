const fs = require('fs');
const audiosMatcher = require('./types/audio');
const archivesMatcher = require('./types/archive');
const fontsMatcher = require('./types/font');
const imagesMatcher = require('./types/image');
const videosMatcher = require('./types/video');
const readFile = (file) =>{
  if(file === null)
    return null;
  try {
    return fs.readFileSync(file);
  } catch (err) {
    throw err
  }

}

const findExtension = (mineType) =>{
  //Todo Posibly use reduce;
  const matchers = [archivesMatcher, audiosMatcher, fontsMatcher, imagesMatcher, videosMatcher]
  let types = matchers
    .find((matcher) => matcher.find((mine)=> mine.extension === mineType));
  return types?types.find((mine)=> mine.extension === mineType):null;
}

const FileTypes = {
  version: "1.0.2",
  guessMineType: (file = null, checkBuffer= false)=>{
    if(!file)
      return null;
    let ext = file.split('.').pop();
    if(!ext)
      return null;
    let extMatcher = findExtension(ext);
    if(!checkBuffer)
      return extMatcher;
    return extMatcher && extMatcher.match(readFile(file))? extMatcher: null;
  },

  isAudio:(file= null)=>{
    let buffer = readFile(file);
    return !!audiosMatcher.find((mine)=> mine.match(buffer))
  },

  isArchive:(file= null)=>{
    let buffer = readFile(file);
    return !!archivesMatcher.find((mine)=> mine.match(buffer))
  },

  isFont:(file= null)=>{
    let buffer = readFile(file);
    return !!fontsMatcher.find((mine)=> mine.match(buffer))
  },

  isImage:(file= null)=>{
    let buffer = readFile(file);
    return !!imagesMatcher.find((mine)=> mine.match(buffer))
  },

  isVideo:(file= null)=>{
    let buffer = readFile(file);
    return !!videosMatcher.find((mine)=> mine.match(buffer))
  },

  isMineSupported:(mineType)=>{
    !!findExtension(mineType);
  }
}

module.exports = FileTypes;
