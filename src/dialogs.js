const DIALOGS = {
	"CoffeeMachine": {
		"start_options": [1, 8],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_coffee_machine_fixed'));",
			"message": "The coffee machine shows an error message.",
			"replies": [
				{
					"message": "Press info.",
					"setflag": ["l1_error_seen"],
					"actions": ["machine_broken"],
					"goto": 4
				},
				{
					"message": "Walk away..",
					"actions": ["close_dialog"]
				}
			]
		}, {
			"id": 4,
			"message": "Grinder out of alignment. Error e1029. Please fix me!",
			"replies": [
				{
					"message": "Ok.",
					"actions": ["close_dialog"]
				},
				{
					"message": "How can I do this?",
					"goto": 7
				}
			]
		}, {
			"id": 7,
			"message": "Find a pc and log a call.",
			"replies": [{
				"message": "Ok.",
				"actions": ["close_dialog"]
			}]
		}, {
			"id": 8,
			"message": "What would you like to drink?",
			"replies": [{
				"message": "Coffee",
				"setflag": ["l1_get_coffee"],
				"goto": 9
			}, {
				"message": "Cappuccino",
				"goto": 9
			}, {
				"message": "Choco deluxe",
				"goto": 9
			}]
		}, {
			"id": 9,
			"message": "Do you want milk or sugar?",
			"replies": [{
				"message": "No thanks",
				"actions": ["pour_coffee"],
				"goto": 10
			}, {
				"message": "Milk",
				"actions": ["pour_coffee"],
				"goto": 10
			}, {
				"message": "Sugar",
				"actions": ["pour_coffee"],
				"goto": 10
			}, {
				"message": "Milk and Sugar",
				"actions": ["pour_coffee"],
				"goto": 10
			}]
		}, {
			"id": 10,
			"message": "The machine serves you your drink",
			"replies": [{
				"message": "Ok",
				"actions": ["close_dialog", "increase_energy"]
			}]
		}]
	},

	"wakeup1": {
		"start_options": [1],
		"messages": [
			{
				"condition": "return !(state.getFlag('l1_wake_up'));",
				"id": 1,
				"message": "Oof! What happened last night? I never remember these office parties. Oh well, maybe it's for the best",
				"replies": [{
					"message": "Press space to continue...",
					"goto": 2
				}]
			},
			{
				"id": 2,
				"message": "Wait, where did I put my keys? My wallet's gone too... Did I even lock my bike at all? I develop software for managing items for .. sake.",
				"replies": [{
					"message": "Continue...",
					"action": "close_dialog",
					"setflag": ["l1_wake_up"]
				}]
			}
		]
	},

	"headache": {
		"start_options": [1],
		"messages": [
			{
				"id": 1,
				"message": "I have a splitting headache... like someone's playing table tennis with my brain.",
				"replies": [{
					"message": "Continue...",
					"goto": 2
				}]
			},
			{
				"id": 2,
				"message": "Wait, where did I put my keys? My wallet's gone too... Did I even lock my bike at all? I develop software for managing items for .. sake.",
				"replies": [{
					"message": "Continue...",
					"action": "close_dialog"
				}]
			}
		]
	},
	"cleaninglady": {
		"start_options": [1, 5, 6],
		"messages": [
			{
				"id": 1,
				"condition": "return !(state.getFlag('l1_clean_dishes'));",
				"message": "Hey, this lady's been cleaning up. Maybe she found my wallet and keys",
				"replies": [{
					"message": "Excuse me...",
					"goto": 2
				}]
			},
			{
				"id": 2,
				"message": "I'm pretty busy. What's up?",
				"replies": [{
					"message": "I was wondering if you've found my keys and wallet?",
					"goto": 3
				}]
			},
			{
				"id": 3,
				"message": "I found some things, but I don't have time to set up a lost-and-found in this mess. Can you help me with those dirty dishes from the kitchen? Thanks a bunch",
				"replies": [{
					"message": "I guess...",
					"goto": 4
				}]
			},
			{
				"id": 4,
				"message": "When you are done, tell me",
				"replies": [{
					"message": "Ok",
					"action": "close_dialog",
					"setflag": ["l1_cleaning_lady_task"]
				}]
			},
			{
				"id": 5,
				"condition": "return !(state.getFlag('l1_storageroomkey'));",
				"message": "Thank you very much for helping. There are some lost-and-found things in the storage room. If the door is locked, just use this key.",
				"replies": [{
					"message": "You receive the key to the storage room.",
					"action": "close_dialog",
					"setflag": ["l1_storageroomkey"]
				}]
			},
			{
				"id": 6,
				"message": "Thank you very much for helping.",
				"replies": [
					{
						"message": "You are welcome",
						"action": "close_dialog"
					}
				]
			}
		]
	},
	"coffeeaddict": {
		"start_options": [1, 3],
		"messages": [
			{
				"id": 1,
				"condition": "return !(state.getFlag('l1_get_coffee'));",
				"message": "The coffee machine is not working again. I'd kill for a coffee.",
				"replies": [{
					"message": "Ok...",
					"goto": 2
				}]
			},
			{
				"id": 2,
				"message": "The last borrel I found something. I'll exchange it for a coffee",
				"replies": [{
					"message": "(This guy has a problem with the coffee)",
					"action": "close_dialog"
				}]
			},
			{
				"id": 3,
				"message": "Hey you have a coffee! I NEED IT!!!! ",
				"replies": [{
					"message": "Give the coffee to the addict guy",
					"goto": 4
				},
				{
					"message": "Keep the coffee for yourself",
					"action": "close_dialog"
				}]
			},
			{
				"id": 4,
				"message": "Thank you so much! Here you have something in return. I'll let you through now",
				"replies": [{
					"message": "The addict guy hands you your keys!",
					"actions": ["close_dialog", "move_around"]
				}]
			}
		]
	},
	"DirtyDishes": {
		"start_options": [1, 2],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_cleaning_lady_task'));",
			"message": "Here are some dirty dishes. I am wondering who is going to clean them.",
			"replies": [{
				"message": "Continue ...",
				"action": "close_dialog"
			}]
		},
		{
			"id": 2,
			"message": "When I said I was wondering who is going to clean them, I already knew the answer. Me!",
			"replies": [{
				"message": "Clean the dishes",
				"actions": ["dirtydishes"],
				"setflag": ["l1_clean_dishes"]
			},
			{
				"message": "I'll do it later.",
				"action": "close_dialog"
			}
			]
		}]
	},
	"mobile": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "HEY! This is my mobile phone. Now I just need to find the rest of my stuff. I should check the other floors",
			"replies": [{
				"message": "Continue ...",
				"actions": ["close_dialog", "pick_object"],
				"setflag": ["l1_mobile_picked"]
			}]
		}]
	},
	"chuck": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "HEY! It is Chuck. The plant!",
			"replies": [{
				"message": "Continue ...",
				"action": "close_dialog"
			}]
		}]
	},
	"PostIt1": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Ugh! I smell like a human",
			"replies": [{
				"message": "sniff.. sniff..",
				"action": "close_dialog"
			}]
		}]
	},
	"PostIt2": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "The post-it reads: Look behind you a three headed monkey!",
			"replies": [{
				"message": "WHERE!!!!",
				"action": "close_dialog"
			}]
		}]
	},
	"PostIt3": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Do you know the new emergencies phone number? ",
			"replies": [{
				"message": "0118 999 881 999 119 7253",
				"action": "close_dialog"
			}]
		}]
	},
	"postit21": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "The post-it reads: I hate baby Mario",
			"replies": [{
				"message": "Allrighty then...",
				"action": "close_dialog"
			}]
		}
		]
	},
	"postit22": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}
		]
	},
	"postit23": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}
		]
	},
	"postit24": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}
		]
	},
	"postit25": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}
		]
	},
	"postit26": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc21": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc22": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc23": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc24": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc25": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc26": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc27": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"pc28": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}
		]
	},
	"FirstAidKit": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "This may be helpful for my HUGE headache...",
			"replies": [{
				"message": "(glup,glup)",
				"action": "close_dialog"
			}]
		}]
	},
	"Lift": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "It reads: The lift has been inactive since that incident with the North-Korean spy...",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"l1_character1": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "I am Error",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"NoDropZone": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "Where do I put this? I can't just leave this here...",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"BeerCrateDropZone1": {
		"start_options": [
			1, 2
		],
		"messages": [{
			"id": 1,
			"condition": "return (!state.getFlag('l1_second_return') && state.player.canDropOff());",
			"message": "I'm tired carrying this around. Maybe I should put it back...",
			"replies": [{
				"message": "Continue...",
				"setflag": ["l1_second_return"],
				"action": "close_dialog"
			}]
		}, {
			"id": 2,
			"condition": "return (!state.getFlag('l1_second_pickup') && state.player.canPickup());",
			"message": "Okay, let's get these out of the way. Where do I take them?",
			"replies": [{
				"message": "Continue...",
				"setflag": ["l1_second_pickup"],
				"actions": ["close_dialog"]
			}]
		}]
	},
	"BeerCrateDropZone2": {
		"start_options": [
			1, 2
		],
		"messages": [{
			"id": 1,
			"condition": "return state.getFlag('l1_BeerCrateDropZone2_crates') === 4;",
			"message": "Phew, I guess I can drop the crate off here...",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}, {
			"id": 2,
			"condition": "return state.getFlag('l1_BeerCrateDropZone2_crates') === 6;",
			"message": "Okay, I can see where this is going. Let me finish the rest on automatic mode...",
			"replies": [{
				"message": "Phew, finally...",
				"actions": ["transfer_remaining_crates", "close_dialog"]
			}]
		}]
	},
	"l1_character2": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "Did you enjoy the party?",
			"replies": [{
				"message": "Continue...",
				"goto": 2
			}]
		}, {
			"id": 2,
			"message": "Those beercrates are blocking the way to the second floor. I hope someone will pick them up soon.",
			"replies": [{
				"message": "Continue..."
			}]
		}]
	},
	"l1_character3": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "Wow, that was some party last night, huh?",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"l2_character1": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "Are you lost? This is the Communications floor.",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"l2_character2": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "I can't wait to see the pictures of last night!",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"doorlocked": {
		"start_options": [
			1, 2
		],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_storageroomkey'));",
			"message": "This door is locked. You'll need to find a key",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}, {
			"id": 2,
			"condition": "return (state.getFlag('l1_storageroomkey'));",
			"message": "Great! The door opens with the key you got from the cleaning lady",
			"replies": [{
				"message": "Continue...",
				"actions": ["close_dialog", "unlock_door"]
			}]
		}]
	},
	"PC": {
		"start_options": [
			1
		],
		"messages": [{
			"id": 1,
			"message": "What would you like to do?",
			"replies": [{
				"message": "Check facebook",
				"goto": 6
			},
			{
				"message": "Check e-mail",
				"goto": 7
			},
			{
				"message": "Log a call",
				"goto": 10
			},
			{
				"condition": "return state.getFlag('l1_error_seen');",
				"message": "Search for error e1029",
				"goto": 14
			},
			{
				"message": "Leave...",
				"action": "close_dialog"
			}
			]
		},
		{
			"id": 6,
			"message": "One hour passed... You feel tired.",
			"replies": [{
				"message": "What a waste of time!",
				"actions": [
					"lower_energy"
				],
				"goto": 1
			}]
		},
		{
			"id": 7,
			"message": "You have 1 new email.",
			"replies": [{
				"message": "Open it.",
				"goto": 17
			},
			{
				"message": "Let's not go into this now. Log a call.",
				"goto": 10
			}
			]
		},
		{
			"id": 10,
			"message": "You are making a ticket in TOPerations. What seems to be the problem?",
			"replies": [{
				"condition": "return (state.getFlag('l1_error_seen') && !state.getFlag('l1_coffee_machine_fixed'));",
				"message": "The coffee machine is broken, it shows error e1029. Submit your call.",
				"goto": 13
			},
			{
				"condition": "return state.getFlag('phone_battery_missing');",
				"message": "I lost my phone battery.",
				"goto": 18
			},
			{
				"message": "On second thought, nevermind...",
				"goto": 1
			}
			]
		},
		{
			"id": 13,
			"message": "Thanks for registering your call. Our coffee machine repairmen will arrive within 15 minutes.",
			"replies": [{
				"message": "Thank you!",
				"setflag": [
					"l1_coffee_machine_fixed"
				],
				"actions": [
					"close_dialog"
				]
			}]
		},
		{
			"id": 14,
			"message": "You find 1 knowledge item.",
			"replies": [{
				"message": "Read it",
				"goto": 19
			},
			{
				"message": "I am too tired for this, log a call.",
				"goto": 10
			}
			]
		},
		{
			"id": 17,
			"message": "You see some pictures from yesterdays party. Apparently there were some uniformed police agents at the party. You wonder why?",
			"replies": [{
				"message": "Ok",
				"goto": 1,
				"actions": [
					"lower_energy"
				]
			}]
		},
		{
			"id": 18,
			"message": "Thanks for registering your call. You can get a new phone battery at our ICT department at the 14th floor.",
			"replies": [{
				"message": "Thank you!",
				"clearflag": "state.phone.battery_missing",
				"actions": [
					"close_dialog"
				]
			}]
		},
		{
			"id": 19,
			"message": "It says log a call, a repairman will come to fix this. The machine has to be opened up and a switch needs to be replaced. Let's log a call.",
			"replies": [{
				"message": "Ok.",
				"goto": 1
			}]
		}
		]
	},
	"KarioMart": {
		"start_options": [
			0
		],
		"messages": [{
			"id": 0,
			"message": "Choose a racer",
			"replies": [{
				"message": "Toad",
				"goto": 1
			}, {
				"message": "Baby Mario",
				"goto": 2
			}, {
				"message": "Donkey Kong",
				"goto": 3
			}]
		}, {
			"id": 1,
			"message": "With toad's fast acceleration, you start off well. But the heavier racers are starting to overtake you.\nThere is a risky shortcut over a narrow canyon on the left, or you can take the long road and collect some extra coins",
			"replies": [{
				"message": "Risky shortcut",
				"goto": 11
			}, {
				"message": "Extra coins",
				"goto": 12
			}]
		}, {
			"id": 11,
			"message": "phew, you take the shortcut without the help of Lakitu. But you're still being overtaken.",
			"replies": [{
				"message": "Continue...",
				"goto": 4
			}]
		}, {
			"id": 12,
			"message": "Good thinking, toad quickly swerves to collect extra coins and gain some extra speed",
			"replies": [{
				"message": "Continue...",
				"goto": 5
			}]
		}, {
			"id": 2,
			"message": "The race is going well for you. There is a risky shortcut on the left, or you can take the long road and collect some extra coins",
			"replies": [{
				"message": "Risky shortcut",
				"goto": 21
			}, {
				"message": "Extra coins",
				"goto": 22
			}]
		}, {
			"id": 21,
			"message": "Phew, you take the shortcut without the help of Lakitu. But you're still being overtaken.",
			"replies": [{
				"message": "Continue...",
				"goto": 4
			}]
		}, {
			"id": 22,
			"message": "Good thinking, toad quickly swerves to collect extra coins and gain some extra speed",
			"replies": [{
				"message": "Ok, you got some extra coins but you needed to swerve to get them.",
				"goto": 4
			}]
		}, {
			"id": 3,
			"message": "DK is a heavy racer, with slow acceleration. You start at the back of the back, but you're gaining speed. There is a risky shortcut on the left, or you can take the long road and collect some extra coins",
			"replies": [{
				"message": "Risky shortcut",
				"goto": 31
			}, {
				"message": "Extra coins",
				"goto": 32
			}]
		}, {
			"id": 31,
			"message": "Good thinking, you need to make up for a slow start. You take the shortcut without the help of Lakitu.",
			"replies": [{
				"message": "Continue...",
				"goto": 6
			}]
		}, {
			"id": 32,
			"message": "Ok, you got some extra coins but you needed to swerve to get them and now you lost speed",
			"replies": [{
				"message": "Continue...",
				"goto": 4
			}]
		}, {
			"id": 4,
			"message": "You're almost near the end. You managed to fight your way to first place! You hear a beeping noise coming from behind",
			"replies": [{
				"message": "Hold back",
				"goto": 41
			}, {
				"message": "Press on",
				"goto": 42
			}]
		}, {
			"id": 41,
			"message": "You hold back and are quickly overtaken. You lose the game.",
			"replies": [{
				"message": "Continue...",
				"goto": 7
			}]
		}, {
			"id": 42,
			"message": "You press on. A blue shield destroys you just before the finish. You lose the game",
			"replies": [{
				"message": "Continue...",
				"goto": 7
			}]
		}, {
			"id": 5,
			"message": "You're almost near the end. You managed to fight your way to first place! You hear a beeping noise coming from behind",
			"replies": [{
				"message": "Hold back",
				"goto": 51
			}, {
				"message": "Press on",
				"goto": 52
			}]
		}, {
			"id": 51,
			"message": "You hold back and are quickly overtaken by Baby Mario!. You lose the game.",
			"replies": [{
				"message": "Continue...",
				"goto": 7
			}]
		}, {
			"id": 52,
			"message": "You press on. A blue shield hits you just before the finish. However, with Toad's fast acceleration, you manage to just stay ahead. You win!",
			"replies": [{
				"message": "Yay!",
				"goto": 8
			}]
		}, {
			"id": 6,
			"message": "You're almost near the end. You managed to fight your way to first place! You hear a beeping noise coming from behind",
			"replies": [{
				"message": "Hold back",
				"goto": 61
			}, {
				"message": "Press on",
				"goto": 62
			}]
		}, {
			"id": 61,
			"message": "Good thinking! Baby mario zooms past you, but then a blue shield comes out of nowhere and blows that little bugger to kingdom come! You win easily!",
			"replies": [{
				"message": "Yay!",
				"goto": 8
			}]
		}, {
			"id": 62,
			"message": "You are hit by a blue shield. You try to get back into the race but it's too late - baby mario wins the game",
			"replies": [{
				"message": "Aww...",
				"goto": 7
			}]
		}, {
			"id": 7,
			"message": "You LOST!",
			"replies": [{
				"message": "Continue...",
				"actions": ["close_dialog"]
			}]
		}, {
			"id": 8,
			"message": "You WIN!",
			"replies": [{
				"message": "Continue...",
				"actions": ["close_dialog"]
			}]
		}]

	}
};
export default DIALOGS;