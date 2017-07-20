let audioTypes =[
  { name: "midi", mine: "audio/midi", extension: "midi", match: (buffer)=>{
    return ((buffer.length) > 3 &&
                buffer[0] == 0x4D &&
                buffer[1] == 0x54 &&
                buffer[2] == 0x68 &&
                buffer[3] == 0x64)
  }},
  { name: "mp3", mine: "audio/mpeg", extension: "mp3", match: (buffer)=>{
    return (buffer.length > 2 &&
                ((buffer[0] == 0x49 &&
                    buffer[1] == 0x44 &&
                    buffer[2] == 0x33) ||
                (buffer[0] == 0xFF &&
                    buffer[1] == 0xfb)))
  }},
  { name: "m4a", mine: "audio/m4a", extension: "m4a", match: (buffer)=>{
    return (buffer.length > 10 &&
                ((buffer[4] == 0x66 &&
                    buffer[5] == 0x74 &&
                    buffer[6] == 0x79 &&
                    buffer[7] == 0x70 &&
                    buffer[8] == 0x4D &&
                    buffer[9] == 0x34 &&
                    buffer[10] == 0x41) ||
                (buffer[0] == 0x4D &&
                    buffer[1] == 0x34 &&
                    buffer[2] == 0x41 &&
                    buffer[3] == 0x20)))
  }},
  { name: "ogg", mine: "audio/ogg", extension: "ogg", match: (buffer)=>{
    return (buffer.length > 3 &&
                buffer[0] == 0x4F &&
                buffer[1] == 0x67 &&
                buffer[2] == 0x67 &&
                buffer[3] == 0x53)
  }},
  { name: "wav", mine: "audio/x-wav", extension: "wav", match: (buffer)=>{
    return (buffer.length > 11 &&
                buffer[0] == 0x52 &&
                buffer[1] == 0x49 &&
                buffer[2] == 0x46 &&
                buffer[3] == 0x46 &&
                buffer[8] == 0x57 &&
                buffer[9] == 0x41 &&
                buffer[10] == 0x56 &&
                buffer[11] == 0x45)
  }},
  { name: "amr", mine: "audio/amr", extension: "amr", match: (buffer)=>{
    return (buffer.length > 11 &&
                buffer[0] == 0x23 &&
                buffer[1] == 0x21 &&
                buffer[2] == 0x41 &&
                buffer[3] == 0x4D &&
                buffer[4] == 0x52 &&
                buffer[5] == 0x0A)
  }}
]
module.exports = audioTypes;
