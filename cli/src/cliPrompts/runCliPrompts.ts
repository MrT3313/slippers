// COLORS

import { exit } from 'node:process';

// CLACK
import * as p from '@clack/prompts';
import * as color from 'colorette';
import { prompts } from './prompts.js';

interface PromptResults {
	time_to_boogie: boolean;
	project_name: string | symbol;
}

export const runCliPrompts = async () => {
	p.intro(
		`${color.bgMagenta(color.black('Welcome to the foot of your bed...'))}`,
	);

	const promptResults: PromptResults = await p.group(prompts, {
		onCancel: () => {
			p.cancel('Scaffolding cancelled.');
			exit(0);
		},
	});

	if (promptResults.time_to_boogie) {
		p.outro(
			`${color.bgGreen(color.black('Congratulations! You are now ready to boogie! 💃🎉'))}\n\n`,
		);
	} else {
		p.outro(
			`${color.bgRed(color.black('You have in fact declined the boogie 😢'))}\n\n`,
		);
	}

	return promptResults;
};
