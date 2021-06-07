import { promises as fs } from 'fs';
import { resolve } from 'path';

const warnVideoFormats = ['mp4', 'avi', 'mpeg'];
const videoFormats = ['webm', 'vp8', 'ogv'];
const audioFormats = ['ogg', 'mp3', 'wav', 'opus'];
const imageFormats = ['png', 'jpg', 'jpeg'];

export enum WarningCode {
  NonCrossPlatformVideoFormat
}

export async function parseStructure (files: string | string[]) {
  let fileStructure: string[] = [];

  if (typeof files === 'string') { 
    const fileStrut = await fs.readdir(resolve(files), { withFileTypes: true });
    fileStructure = fileStrut.filter((f) => f.isFile()).map((f) => f.name);
  } else {
    fileStructure = files;
  }

  fileStructure = fileStructure.map((f) => f.toLowerCase());

  const output = {
    midiFound: false,
    chartFound: false,
    metadataFound: false,
    videoFound: false,
    albumImage: false,
    backgroundImage: false,
    stems: { guitar: false, bass: false, rhythm: false, vocals: false, vocals_1: false, vocals_2: false, drums: false, drums_1: false, drums_2: false, drums_3: false, drums_4: false, keys: false, song: false, crowd: false },
    warnings: [] as { message: string, code: WarningCode }[],
    strayFiles: [] as string[]
  };

  fileStructure.forEach((file) => {
    const [fileName, fileExtension] = file.split('.');

    // chart
    if (fileName === 'notes') {
      if (fileExtension === 'mid') { return output.midiFound = true; }
      if (fileExtension === 'chart') { return output.chartFound = true; }
    }

    // metadata
    if (file === 'song.ini') { return output.metadataFound = true; }

    // video
    if (fileName === 'video') {
      if (videoFormats.includes(fileExtension)) { return output.videoFound = true; }
      if (warnVideoFormats.includes(fileExtension)) {
        output.warnings.push({ code: WarningCode.NonCrossPlatformVideoFormat, message: `${fileExtension} is not cross platform` });
        return output.videoFound = true;
      }
    }

    // images
    if (imageFormats.includes(fileExtension)) {
      if (fileName === 'album') { return output.albumImage = true; }
      if (fileName === 'background') { return output.albumImage = true; }
    }

    // audio
    if (audioFormats.includes(fileExtension)) {
      if (fileName === 'guitar') { return output.stems.guitar = true; }
      if (fileName === 'bass') { return output.stems.bass = true; }
      if (fileName === 'rhythm') { return output.stems.rhythm = true; }
      if (fileName === 'vocals') { return output.stems.vocals = true; }
      if (fileName === 'vocals_1') { return output.stems.vocals_1 = true; }
      if (fileName === 'vocals_2') { return output.stems.vocals_2 = true; }
      if (fileName === 'drums') { return output.stems.drums = true; }
      if (fileName === 'drums_1') { return output.stems.drums_1 = true; }
      if (fileName === 'drums_2') { return output.stems.drums_2 = true; }
      if (fileName === 'drums_3') { return output.stems.drums_3 = true; }
      if (fileName === 'drums_4') { return output.stems.drums_4 = true; }
      if (fileName === 'keys') { return output.stems.keys = true; }
      if (fileName === 'song') { return output.stems.song = true; }
      if (fileName === 'crowd') { return output.stems.crowd = true; }
    }

    output.strayFiles.push(file);
  });

  return output;
}
