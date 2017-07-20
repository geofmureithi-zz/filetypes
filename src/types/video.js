let videoTypes =[
  { name: "mp4", mine: "video/mp4", extension: "mp4", match: (buffer)=>{
    return (buffer.length > 27 &&
                (buffer[0] == 0x0 && buffer[1] == 0x0 &&
                buffer[2] == 0x0 &&
                ((buffer[3] == 0x18 ||
                    buffer[3] == 0x20) &&
                    buffer[4] == 0x66 &&
                    buffer[5] == 0x74 && buffer[6] == 0x79 &&
                    buffer[7] == 0x70) ||
                (buffer[0] == 0x33 && buffer[1] == 0x67 &&
                    buffer[2] == 0x70 && buffer[3] == 0x35) ||
                (buffer[0] == 0x0 && buffer[1] == 0x0 &&
                    buffer[2] == 0x0 && buffer[3] == 0x1C &&
                    buffer[4] == 0x66 && buffer[5] == 0x74 &&
                    buffer[6] == 0x79 && buffer[7] == 0x70 &&
                    buffer[8] == 0x6D && buffer[9] == 0x70 &&
                    buffer[10] == 0x34 && buffer[11] == 0x32 &&
                    buffer[16] == 0x6D && buffer[17] == 0x70 &&
                    buffer[18] == 0x34 && buffer[19] == 0x31 &&
                    buffer[20] == 0x6D && buffer[21] == 0x70 &&
                    buffer[22] == 0x34 && buffer[23] == 0x32 &&
                    buffer[24] == 0x69 && buffer[25] == 0x73 &&
                    buffer[26] == 0x6F && buffer[27] == 0x6D)))
  }},
  { name: "m4v", mine: "video/x-m4v", extension: "m4v", match: (buffer)=>{
    return (buffer.length > 10 &&
                buffer[0] == 0x0 && buffer[1] == 0x0 &&
                buffer[2] == 0x0 && buffer[3] == 0x1C &&
                buffer[4] == 0x66 && buffer[5] == 0x74 &&
                buffer[6] == 0x79 && buffer[7] == 0x70 &&
                buffer[8] == 0x4D && buffer[9] == 0x34 &&
                buffer[10] == 0x56)
  }},
  { name: "mkv", mine: "video/x-matroska", extension: "mkv", match: (buffer)=>{
    return ((buffer.length > 15 &&
                buffer[0] == 0x1A && buffer[1] == 0x45 &&
                buffer[2] == 0xDF && buffer[3] == 0xA3 &&
                buffer[4] == 0x93 && buffer[5] == 0x42 &&
                buffer[6] == 0x82 && buffer[7] == 0x88 &&
                buffer[8] == 0x6D && buffer[9] == 0x61 &&
                buffer[10] == 0x74 && buffer[11] == 0x72 &&
                buffer[12] == 0x6F && buffer[13] == 0x73 &&
                buffer[14] == 0x6B && buffer[15] == 0x61) ||
                (buffer.length > 38 &&
                    buffer[31] == 0x6D && buffer[32] == 0x61 &&
                    buffer[33] == 0x74 && buffer[34] == 0x72 &&
                    buffer[35] == 0x6f && buffer[36] == 0x73 &&
                    buffer[37] == 0x6B && buffer[38] == 0x61))
  }},
  { name: "webm", mine: "video/webm", extension: "webm", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x1A &&
                buffer[1] == 0x45 &&
                buffer[2] == 0xDF &&
                buffer[3] == 0xA3)
  }},
  { name: "mov", mine: "video/quicktime", extension: "mov", match: (buffer)=>{
    return (buffer.length > 7 &&
                buffer[0] == 0x0 &&
                buffer[1] == 0x0 &&
                buffer[2] == 0x0 &&
                buffer[3] == 0x14 &&
                buffer[4] == 0x66 &&
                buffer[5] == 0x74 &&
                buffer[6] == 0x79 &&
                buffer[7] == 0x70)
  }},
  { name: "avi", mine: "video/x-msvideo", extension: "avi", match: (buffer)=>{
    return (buffer.length > 10 &&
                buffer[0] == 0x52 &&
                buffer[1] == 0x49 &&
                buffer[2] == 0x46 &&
                buffer[3] == 0x46 &&
                buffer[8] == 0x41 &&
                buffer[9] == 0x56 &&
                buffer[10] == 0x49)
  }},
  { name: "wmv", mine: "video/x-ms-wmv", extension: "wmv", match: (buffer)=>{
    return (buffer.length > 9 &&
                buffer[0] == 0x30 &&
                buffer[1] == 0x26 &&
                buffer[2] == 0xB2 &&
                buffer[3] == 0x75 &&
                buffer[4] == 0x8E &&
                buffer[5] == 0x66 &&
                buffer[6] == 0xCF &&
                buffer[7] == 0x11 &&
                buffer[8] == 0xA6 &&
                buffer[9] == 0xD9)
  }},
  { name: "flv", mine: "video/x-flv", extension: "flv", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x46 &&
                buffer[1] == 0x4C &&
                buffer[2] == 0x56 &&
                buffer[3] == 0x01)
  }},
  { name: "mpg", mine: "video/mpeg", extension: "mpg", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x0 &&
                buffer[1] == 0x0 &&
                buffer[2] == 0x1 &&
                buffer[3] >= 0xb0 &&
                buffer[3] <= 0xbf)
  }}
]
module.exports = videoTypes;
