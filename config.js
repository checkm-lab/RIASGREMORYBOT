//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "263719495067";
global.sudo = process.env.SUDO || "263719495067";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VGMGJsaFFzbndYT1NXQW9BZCtkYnk5TDc0K2N3Z290RVh1QjU4dDVtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFd2SG9hZHZaNWhLbUlKVitmYVJ4enVycnhvK3E2MzFnNStnYldIa0ZGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S2pjenNuNU1EU1JhQjE4ZDZqZ3QzelEreEJpdnJQcmNjQk9qQ1JsS0dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4U2RtYzhrQ3FDTlNNYS8yV0lUOFg2SS9iamdNSi93ZXI0L2pFaVRKMUZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFMmxJSFh2R0ZLRTBlQVFmVnM1clJWTyt2K1E4YXVIV011cEp0UENqWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNXUjl6eGx1a1o5dDY5Y3RtS0hvYm1mYURVT0JBZUNaTWlCMjg4ZUt2RkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFKeXFjUlJTWEl2ZUZONXp2VGFxdmRmbVQ2TGRGNkdXTFNSTmM5bklHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZk8xd3J6ZEhyV3dHVllwZndDbno2MUhNaXR4NklvWlQ3cENaeitUbWQwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNOckUzSzY1Y1NDb01UQU1YakttREh6SWpKN1NUMU12NTVJTDFXNE1IV0JXODM0WEI3RzZ1TU5xdDFMM2ljZWUycjlvdDZvb1BZSjkzRUtBU0FRQkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJTNFBlbVFHT1hCWVo3aXNBVmlEMkR3Q3hJMVpRK2g4V0VVQTduckhPbE93PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxOTQ5NTA2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2QUM1MTUwMUYzRDA2NzdFQzJFNEQzOERDMDIzRjUzMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3NDQxODgxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTk0OTUwNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTk0Mjc3NjI1MjM3MTY5M0Q5OUUwNUU2QkFEMjRFMjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzQ0MTg4Mn1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQWhzNXZIeERUZ3VCeWZLWl9vUGVEZyIsInBob25lSWQiOiI2ZGViMmZmZS00MmNlLTQxOGUtYjU4My0zNTEyZDg1MDg3ODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnNMNEpETFpON2hnWTByTVRQZEI2Zlg3SXpzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlzRHVJQmEwY29vWm1nWEpsQmphQ1BBdTVXTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxSDQyQ1o0WiIsIm1lIjp7ImlkIjoiMjYzNzE5NDk1MDY3OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNoYXNwZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lxam05NEZFTWlFdmJ3R0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IittUFdXbDdHSmhQRHBKUEdnQzJTMUV3a0dRSDAzalMxZmFHcnBmNW5DMVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhkV2Z3SlowL3ZYUm9kNTBjVHZ2dGRQV0tYdlVLOHdDUjZlN3N3KythYnJ3L2duSnE1MndwTlpDa1U5dnBWN1NxV2EvMlh0NDBkdDEycC80QnEwRUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxSzU1dHNvZ01jNHk2Z3dGNnlBZjBJYVluRVgySndFdHJ2OVprbFQ4YnpUSlFyR3FvcFhpVllDUWwrSDVnMzd6S1hsWlNWRnVuajNMTWljT0NsYjlCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxOTQ5NTA2NzoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmcGoxbHBleGlZVHc2U1R4b0F0a3RSTUpCa0I5TjQwdFgyaHE2WCtad3RXIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NDQxODc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUl0MyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
