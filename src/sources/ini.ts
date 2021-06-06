import Iconv from 'iconv-lite';

export default function parseIni (ini: Buffer) {
  let source = Iconv.decode(ini, 'utf8');
  if (source.indexOf('�') > -1) { source = Iconv.decode(ini, 'latin-1'); }
  if (source.indexOf('\u0000') > -1) { source = Iconv.decode(ini, 'utf16'); }

  const output = {
    name: null as null | string,
    artist: null as null | string,
    album: null as null | string,
    genre: null as null | string,
    icon: null as null | string,
    charter: null as null | string,
    modchart: null as null | string,

    pro_drums: null as null | boolean,

    year: null as null | number,
    diff_band: null as null | number,
    diff_guitar: null as null | number,
    diff_rhythm: null as null | number,
    diff_bass: null as null | number,
    diff_drums: null as null | number,
    diff_drums_real: null as null | number,
    diff_keys: null as null | number,
    diff_guitarghl: null as null | number,
    diff_bassghl: null as null | number,
    preview_start_time: null as null | number,
    album_track: null as null | number,
    playlist_track: null as null | number,
    song_length: null as null | number
  };

  const lineArray = source.split('\n');

  for (let i = 0; i < lineArray.length; i++) {
    let [_raw, param, value] = lineArray[i].match(/([^=]+)=(.+)/) || [];
    if (!value || !value.trim()) { continue; }

    param = param.trim().toLocaleLowerCase();
    value = value.trim();

    if (!(param in output)) { continue; }

    let outputValue: null | string | boolean | number = value;

    // bools
    const bools = ['pro_drums'];
    if (bools.includes(param)) { outputValue = value.toLocaleLowerCase() === 'true'; }

    // numbers
    const nums = ['year', 'diff_band', 'diff_guitar', 'diff_rhythm', 'diff_bass', 'diff_drums', 'diff_drums_real', 'diff_keys', 'diff_guitarghl', 'diff_bassghl', 'preview_start_time', 'album_track', 'playlist_track', 'song_length'];
    if (nums.includes(param)) { outputValue = parseInt(value, 10) || null; }

    (output as any)[param] = outputValue;
  }

  return output;
}
