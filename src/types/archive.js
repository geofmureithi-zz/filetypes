let archiveTypes =[
  { name: "epub", mine: "application/epub+zip", extension: "epub", match: (buffer)=>{
    return (buffer.length > 57 &&
                buffer[0] == 0x50 && buffer[1] == 0x4B &&
                buffer[2] == 0x3 && buffer[3] == 0x4 &&
                buffer[30] == 0x6D && buffer[31] == 0x69 &&
                buffer[32] == 0x6D && buffer[33] == 0x65 &&
                buffer[34] == 0x74 && buffer[35] == 0x79 &&
                buffer[36] == 0x70 && buffer[37] == 0x65 &&
                buffer[38] == 0x61 && buffer[39] == 0x70 &&
                buffer[40] == 0x70 && buffer[41] == 0x6C &&
                buffer[42] == 0x69 && buffer[43] == 0x63 &&
                buffer[44] == 0x61 && buffer[45] == 0x74 &&
                buffer[46] == 0x69 && buffer[47] == 0x6F &&
                buffer[48] == 0x6E && buffer[49] == 0x2F &&
                buffer[50] == 0x65 && buffer[51] == 0x70 &&
                buffer[52] == 0x75 && buffer[53] == 0x62 &&
                buffer[54] == 0x2B && buffer[55] == 0x7A &&
                buffer[56] == 0x69 && buffer[57] == 0x70)
  }},
  { name: "zip", mine: "application/zip", extension: "zip", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x50 && buffer[1] == 0x4B &&
                (buffer[2] == 0x3 || buffer[2] == 0x5 ||
                    buffer[2] == 0x7) &&
                (buffer[3] == 0x4 || buffer[3] == 0x6 ||
                    buffer[3] == 0x8))
  }},
  { name: "tar", mine: "application/x-tar", extension: "tar", match: (buffer)=>{
    return (buffer.length > 261 &&
                buffer[257] == 0x75 &&
                buffer[258] == 0x73 &&
                buffer[259] == 0x74 &&
                buffer[260] == 0x61 &&
                buffer[261] == 0x72)
  }},
  { name: "rar", mine: "application/x-rar-compressed", extension: "rar", match: (buffer)=>{
    return (buffer.length > 6 &&
                buffer[0] == 0x52 &&
                buffer[1] == 0x61 &&
                buffer[2] == 0x72 &&
                buffer[3] == 0x21 &&
                buffer[4] == 0x1A &&
                buffer[5] == 0x7 &&
                (buffer[6] == 0x0 ||
                    buffer[6] == 0x1))
  }},
  { name: "gz", mine: "application/gzip", extension: "gz", match: (buffer)=>{
    return (buffer.length > 2 &&
                buffer[0] == 0x1F &&
                buffer[1] == 0x8B &&
                buffer[2] == 0x8)
  }},
  { name: "bz2", mine: "application/x-bzip2", extension: "bz2", match: (buffer)=>{
    return (buffer.length > 5 &&
                buffer[0] == 0x37 &&
                buffer[1] == 0x7A &&
                buffer[2] == 0xBC &&
                buffer[3] == 0xAF &&
                buffer[4] == 0x27 &&
                buffer[5] == 0x1C)
  }},
  { name: "7z", mine: "application/x-7z-compressed", extension: "7z", match: (buffer)=>{
    return (buffer.length > 2 &&
                buffer[0] == 0x42 &&
                buffer[1] == 0x5A &&
                buffer[2] == 0x68)
  }},
  { name: "pdf", mine: "application/pdf", extension: "pdf", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x25 &&
                buffer[1] == 0x50 &&
                buffer[2] == 0x44 &&
                buffer[3] == 0x46)
  }},
  { name: "exe", mine: "application/x-msdownload", extension: "exe", match: (buffer)=>{
    return (buffer.length > 1 &&
                buffer[0] == 0x4D &&
                buffer[1] == 0x5A)
  }},
  { name: "swf", mine: "application/x-shockwave-flash", extension: "swf", match: (buffer)=>{
    return (buffer.length > 2 &&
                (buffer[0] == 0x43 ||
                    buffer[0] == 0x46) &&
                buffer[1] == 0x57 &&
                buffer[2] == 0x53)
  }},
  { name: "rtf", mine: "application/rtf", extension: "rtf", match: (buffer)=>{
    return (buffer.length > 4 &&
                buffer[0] == 0x7B &&
                buffer[1] == 0x5C &&
                buffer[2] == 0x72 &&
                buffer[3] == 0x74 &&
                buffer[4] == 0x66)
  }},
  { name: "nes", mine: "application/x-nintendo-nes-rom", extension: "nes", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x4E &&
                buffer[1] == 0x45 &&
                buffer[2] == 0x53 &&
                buffer[3] == 0x1A)
  }},
  { name: "crx", mine: "application/x-google-chrome-extension", extension: "crx", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x43 &&
                buffer[1] == 0x72 &&
                buffer[2] == 0x32 &&
                buffer[3] == 0x34)
  }},
  { name: "cab", mine: "application/vnd.ms-cab-compressed", extension: "cab", match: (buffer)=>{
    return (buffer.length > 3 &&
                ((buffer[0] == 0x4D &&
                    buffer[1] == 0x53 &&
                    buffer[2] == 0x43 &&
                    buffer[3] == 0x46) ||
                    (buffer[0] == 0x49 &&
                        buffer[1] == 0x53 &&
                        buffer[2] == 0x63 &&
                        buffer[3] == 0x28)))
  }},
  { name: "oet", mine: "application/octet-stream", extension: "oet", match: (buffer)=>{
    return (buffer.length > 35 &&
                buffer[34] == 0x4C &&
                buffer[35] == 0x50 &&
                ((buffer[8] == 0x02 &&
                    buffer[9] == 0x00 &&
                    buffer[10] == 0x01) ||
                (buffer[8] == 0x01 &&
                    buffer[9] == 0x00 &&
                    buffer[10] == 0x00) ||
                    (buffer[8] == 0x02 &&
                        buffer[9] == 0x00 &&
                        buffer[10] == 0x02)))
  }},
  { name: "ps", mine: "application/postscript", extension: "ps", match: (buffer)=>{
    return (buffer.length > 1 &&
                buffer[0] == 0x25 &&
                buffer[1] == 0x21)
  }},
  { name: "xz", mine: "application/x-xz", extension: "xz", match: (buffer)=>{
    return (buffer.length > 5 &&
                buffer[0] == 0xFD &&
                buffer[1] == 0x37 &&
                buffer[2] == 0x7A &&
                buffer[3] == 0x58 &&
                buffer[4] == 0x5A &&
                buffer[5] == 0x00)
  }},
  { name: "sqlite", mine: "application/x-sqlite3", extension: "sqlite", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x53 &&
                buffer[1] == 0x51 &&
                buffer[2] == 0x4C &&
                buffer[3] == 0x69)
  }},
  { name: "deb", mine: "application/x-deb", extension: "deb", match: (buffer)=>{
    return (buffer.length > 20 &&
                buffer[0] == 0x21 &&
                buffer[1] == 0x3C &&
                buffer[2] == 0x61 &&
                buffer[3] == 0x72 &&
                buffer[4] == 0x63 &&
                buffer[5] == 0x68 &&
                buffer[6] == 0x3E &&
                buffer[7] == 0x0A &&
                buffer[8] == 0x64 &&
                buffer[9] == 0x65 &&
                buffer[10] == 0x62 &&
                buffer[11] == 0x69 &&
                buffer[12] == 0x61 &&
                buffer[13] == 0x6E &&
                buffer[14] == 0x2D &&
                buffer[15] == 0x62 &&
                buffer[16] == 0x69 &&
                buffer[17] == 0x6E &&
                buffer[18] == 0x61 &&
                buffer[19] == 0x72 &&
                buffer[20] == 0x79)
  }},
  { name: "ar", mine: "application/x-unix-archive", extension: "ar", match: (buffer)=>{
    return (buffer.length > 6 &&
                buffer[0] == 0x21 &&
                buffer[1] == 0x3C &&
                buffer[2] == 0x61 &&
                buffer[3] == 0x72 &&
                buffer[4] == 0x63 &&
                buffer[5] == 0x68 &&
                buffer[6] == 0x3E)
  }},
  { name: "z", mine: "application/x-compress", extension: "z", match: (buffer)=>{
    return (buffer.length > 1 &&
                ((buffer[0] == 0x1F &&
                    buffer[1] == 0xA0) ||
                (buffer[0] == 0x1F &&
                    buffer[1] == 0x9D)))
  }},
  { name: "lz", mine: "application/x-lzip", extension: "lz", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x4C &&
                buffer[1] == 0x5A &&
                buffer[2] == 0x49 &&
                buffer[3] == 0x50)
  }}
]
module.exports = archiveTypes;
