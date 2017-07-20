let fontTypes =[
  { name: "woff", mine: "application/font-woff", extension: "woff", match: (buffer)=>{
    return (buffer.length > 7 &&
                buffer[0] == 0x77 &&
                buffer[1] == 0x4F &&
                buffer[2] == 0x46 &&
                buffer[3] == 0x46 &&
                buffer[4] == 0x00 &&
                buffer[5] == 0x01 &&
                buffer[6] == 0x00 &&
                buffer[7] == 0x00)
  }},
  { name: "woff2", mine: "application/font-woff", extension: "woff2", match: (buffer)=>{
    return (buffer.length > 7 &&
                buffer[0] == 0x77 &&
                buffer[1] == 0x4F &&
                buffer[2] == 0x46 &&
                buffer[3] == 0x32 &&
                buffer[4] == 0x00 &&
                buffer[5] == 0x01 &&
                buffer[6] == 0x00 &&
                buffer[7] == 0x00)
  }},
  { name: "ttf", mine: "application/font-sfnt", extension: "ttf", match: (buffer)=>{
    return (buffer.length > 4 &&
                buffer[0] == 0x00 &&
                buffer[1] == 0x01 &&
                buffer[2] == 0x00 &&
                buffer[3] == 0x00 &&
                buffer[4] == 0x00)
  }},
  { name: "otf", mine: "application/font-sfnt", extension: "otf", match: (buffer)=>{
    return (buffer.length > 4 &&
                buffer[0] == 0x4F &&
                buffer[1] == 0x54 &&
                buffer[2] == 0x54 &&
                buffer[3] == 0x4F &&
                buffer[4] == 0x00)
  }}
]
module.exports = fontTypes;
