const axios = require('axios');

const Prefixes = [
  '√ai',
  'itachi',
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
        await message.reply("⚠️𝑷𝒐𝒔𝒆𝒛 𝒗𝒐𝒔 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏,𝑶𝒖 𝒕𝒂𝒊𝒔𝒆𝒛 𝒗𝒐𝒖𝒔 𝒂 𝒋𝒂𝒎𝒂𝒊𝒔 𝒑𝒂𝒖𝒗𝒓𝒆 𝒎𝒐𝒓𝒕𝒆𝒍𝒍𝒆（︶^︶）=凸.");
        return; de
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `

(╬￣皿￣)凸 𝑰𝑻𝑨𝑪𝑯𝑰 𝑰𝑨
======================    
${answer}
======================𝑶𝑾𝑵𝑬𝑹 𝑩𝒀 𝑻𝒆𝑻𝒐ಢ‸ಢ `,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
