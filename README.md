Small and dependency free [Javascript](https://js.org/) library to infer file type and MIME type checking the [magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files) signature of a file or buffer.

This is a Javascript port from [filetype](https://github.com/h2non/filetype) Go package.


Features
--------

- Simple and friendly API
- Supports a [wide range](#supported-types) of file types
- Provides file extension and MIME type inference
- File discovery by extension or MIME type
- File discovery by kind (image, video, audio...)
- Only first 261 bytes representing the max file header is required, so you can just [pass a list of bytes]
- Dependency free
- Cross-platform file recognition


Installation
------------

    npm install filetypes


API
---
TODO


Examples
--------

#### Simple file type checking

```javascript
const FileTypes = require('filetypes');
//Just Check extension
let extension = FileTypes.guessMineType('Nicki Minaj - Anaconda.mp4');
/**
{ name: 'mp4',
  mine: 'video/mp4',
  extension: 'mp4',
  match: [Function: match] }
*/
//Check extension and Magic_numbers in file;
let extension = FileTypes.guessMineType('../path/to/Nicki Minaj - Anaconda.mp4', true);

//Check if extension is Supported
FileTypes.isMineSupported("mp4")
//true
FileTypes.isMineSupported("xxs")
//false


```
#### collective type checking

```javascript
let { isAudio, isImage, isArchive, isFont, isVideo } = require('filetypes');
isAudio('../path/to/Nicki Minaj - Anaconda.mp4')
//false
isVideo('../path/to/Nicki Minaj - Anaconda.mp4')
//true

```

Supported types
---------------

#### Image

- **jpg** - `image/jpeg`
- **png** - `image/png`
- **gif** - `image/gif`
- **webp** - `image/webp`
- **cr2** - `image/x-canon-cr2`
- **tif** - `image/tiff`
- **bmp** - `image/bmp`
- **jxr** - `image/vnd.ms-photo`
- **psd** - `image/vnd.adobe.photoshop`
- **ico** - `image/x-icon`

#### Video

- **mp4** - `video/mp4`
- **m4v** - `video/x-m4v`
- **mkv** - `video/x-matroska`
- **webm** - `video/webm`
- **mov** - `video/quicktime`
- **avi** - `video/x-msvideo`
- **wmv** - `video/x-ms-wmv`
- **mpg** - `video/mpeg`
- **flv** - `video/x-flv`

#### Audio

- **mid** - `audio/midi`
- **mp3** - `audio/mpeg`
- **m4a** - `audio/m4a`
- **ogg** - `audio/ogg`
- **flac** - `audio/x-flac`
- **wav** - `audio/x-wav`
- **amr** - `audio/amr`

#### Archive

- **epub** - `application/epub+zip`
- **zip** - `application/zip`
- **tar** - `application/x-tar`
- **rar** - `application/x-rar-compressed`
- **gz** - `application/gzip`
- **bz2** - `application/x-bzip2`
- **7z** - `application/x-7z-compressed`
- **xz** - `application/x-xz`
- **pdf** - `application/pdf`
- **exe** - `application/x-msdownload`
- **swf** - `application/x-shockwave-flash`
- **rtf** - `application/rtf`
- **eot** - `application/octet-stream`
- **ps** - `application/postscript`
- **sqlite** - `application/x-sqlite3`
- **nes** - `application/x-nintendo-nes-rom`
- **crx** - `application/x-google-chrome-extension`
- **cab** - `application/vnd.ms-cab-compressed`
- **deb** - `application/x-deb`
- **ar** - `application/x-unix-archive`
- **Z** - `application/x-compress`
- **lz** - `application/x-lzip`

#### Font

- **woff** - `application/font-woff`
- **woff2** - `application/font-woff`
- **ttf** - `application/font-sfnt`
- **otf** - `application/font-sfnt`



License
-------

MIT - Geoff Mureithi
Lots of ideas borrowed Tomas Aparicio
