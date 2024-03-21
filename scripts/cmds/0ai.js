const axios = require('axios');

const Prefixes = [
  '√ai',
  'Itachi',
  'Itachi',
  '+ai',
  'nemo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🔞Ｎ'ａｙｅｚ ｐａｓ ｐｅｕｒ ｄｅ ｐｏｓｅｒ ｄｅｓ ｑｕｅｓｔｉｏｎ. ｃ'ｅｓｔ ｌｅ ｍｏｙｅｎ ｌｅ ｐｌｕｓ ｓｕ̂ｕｒ ｄ" ａｐｐｒｅｎｄｒｅ😒.");
        return; de
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~~~~~~~
======================    
${answer}
======================`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
