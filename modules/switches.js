(async () => {
	switch (command) {
		case 'enable':
		case 'act':
			if (!querie) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)
			if (!isGroup) return citel.reply("This command is only for group")
			const privileges = isAdmins || isCreator
			if (!privileges) return citel.reply("❌ This command is only for admin")
			if (args[0] == "antilink") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, antilink: "true" })
								.save()
							return citel.reply(' Antilink Enabled Successfully')
						}
						else {
							if (gc.antilink == "true") return citel.reply("Antilink was alredy enabled is already enabled")
							await sck.updateOne({ id: citel.chat }, { antilink: "true" })
							return citel.reply('Enabled antilink in current chat.')
						}
					})
			}
			else if (args[0] == "events") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, events: "true" })
								.save()
							return citel.reply("Successfully Enabled *Events*")
						}
						else {
							if (gc.events == "true") return citel.reply("*Events* are already enabled")
							await sck.updateOne({ id: citel.chat }, { events: "true" })
							return citel.reply("Successfully Enabled *Events*")
						}
					})
			}
			else if (args[0] == "bot") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, botenable: "true" })
								.save()
							return citel.reply(`Successfully Enabled *${LangG.title}*`)
						}
						else {
							if (gc.botenable == "true") return citel.reply("*Bot* was already enabled")
							await sck.updateOne({ id: citel.chat }, { botenable: "true" })
							console.log(gc.botenable)
							return citel.reply(`Successfully Enabled *${LangG.title}*`)
						}
					})
			}
			else if (args[0] == "nsfw") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, nsfw: "true" })
								.save()
							return citel.reply("Successfully Enabled *NSFW*")
						}
						else {
							if (gc.nsfw == "true") return citel.reply("*NSFW* is already enabled")
							await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
							console.log(gc.invite)
							return citel.reply("Successfully Enabled *NSFW*")
						}
					})
			}
			else {
				citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
			}
			break
			//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
		case 'disable':
		case 'deact':
			if (!querie) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)
			if (!isGroup) return citel.reply("This feature in only for Group.")
			let privilegess = isAdmins || isCreator
			if (!privilegess) return citel.reply("❌ This Command is only for Admin")
			if (args[0] == "antilink") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("Antilink disabled")
						}
						else {
							if (usr.antilink !== "true") return citel.reply(" Antlinki was already disabled")
							await sck.updateOne({ id: citel.chat }, { antilink: "false" })
							return citel.reply("Disabled antilink Successfully.");
						}
					})
			}
			else if (args[0] == "events") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("Events were already disabled")
						}
						else {
							if (usr.events !== "true") return citel.reply("Events was already disabled")
							await sck.updateOne({ id: citel.chat }, { events: "false" })
							return citel.reply("Successfully Disabled *Events*");
						}
					})
			}
			else if (args[0] == "bot") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("*Bot* is already disabled")
						}
						else {
							if (usr.botenable !== "true") return citel.reply("*Bot* was already disabled")
							await sck.updateOne({ id: citel.chat }, { botenable: "false" })
							return citel.reply("🧩 Successfully Disabled *Bot*");
						}
					})
			}
			else if (args[0] == "nsfw") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("*NSFW* is already disabled")
						}
						else {
							if (usr.nsfw !== "true") return citel.reply("*NSFW* is already disabled")
							await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
							return citel.reply("Successfully Disabled *NSFW*");
						}
					})
			}
			else {
				citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
			}
			break
	}
})()
