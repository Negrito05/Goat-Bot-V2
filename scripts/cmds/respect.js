module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 2,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["100050637524770"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "🔞 Maître vous êtes maintenant admin de ce meta📵",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `I respect you my bosvs! You are now admin in this thread.`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("An error occurred while promoting to admin.", event.threadID);
 }
 },
};
