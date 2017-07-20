let imageTypes =[
  { name: "jpg", mine: "image/jpeg", extension: "jpg", match: (buffer)=>{
    return (buffer.length > 2 &&
                buffer[0] == 0xFF &&
                buffer[1] == 0xD8 &&
                buffer[2] == 0xFF)
  }},
  { name: "png", mine: "image/png", extension: "png", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x89 &&
                buffer[1] == 0x50 &&
                buffer[2] == 0x4E &&
                buffer[3] == 0x47)
  }},
  { name: "gif", mine: "image/gif", extension: "gif", match: (buffer)=>{
    return (buffer.length > 2 &&
                buffer[0] == 0x47 &&
                buffer[1] == 0x49 &&
                buffer[2] == 0x46)
  }},
  { name: "webp", mine: "image/webp", extension: "webp", match: (buffer)=>{
    return (buffer.length > 11 &&
                buffer[8] == 0x57 &&
                buffer[9] == 0x45 &&
                buffer[10] == 0x42 &&
                buffer[11] == 0x50)
  }},
  { name: "cr2", mine: "image/x-canon-cr2", extension: "cr2", match: (buffer)=>{
    return (buffer.length > 9 &&
                ((buffer[0] == 0x49 && buffer[1] == 0x49 &&
                    buffer[2] == 0x2A && buffer[3] == 0x0) ||
                (buffer[0] == 0x4D && buffer[1] == 0x4D &&
                    buffer[2] == 0x0 && buffer[3] == 0x2A)) &&
                buffer[8] == 0x43 && buffer[9] == 0x52)
  }},
  { name: "tif", mine: "image/tiff", extension: "tif", match: (buffer)=>{
    return (buffer.length > 3 &&
                ((buffer[0] == 0x49 && buffer[1] == 0x49 &&
                    buffer[2] == 0x2A && buffer[3] == 0x0) ||
                (buffer[0] == 0x4D && buffer[1] == 0x4D &&
                    buffer[2] == 0x0 && buffer[3] == 0x2A)))
  }},
  { name: "bmp", mine: "image/bmp", extension: "bmp", match: (buffer)=>{
    return (buffer.length > 1 &&
                buffer[0] == 0x42 &&
                buffer[1] == 0x4D)
  }},
  { name: "jxr", mine: "image/vnd.ms-photo", extension: "jxr", match: (buffer)=>{
    return (buffer.length > 2 &&
                buffer[0] == 0x49 &&
                buffer[1] == 0x49 &&
                buffer[2] == 0xBC)
  }},
  { name: "psd", mine: "image/vnd.adobe.photoshop", extension: "psd", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x38 &&
                buffer[1] == 0x42 &&
                buffer[2] == 0x50 &&
                buffer[3] == 0x53)
  }},
  { name: "ico", mine: "image/x-icon", extension: "ico", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x00 &&
                buffer[1] == 0x00 &&
                buffer[2] == 0x01 &&
                buffer[3] == 0x00)
  }}
]
module.exports = imageTypes;
