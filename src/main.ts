


function recursiveReconstructAll(inputString: string, words: string[]): string[][] {
    const lengths = words.map(x => x.length);
    const results: string[][] = [];

    for (let idx = 0; idx < lengths.length; idx++) {
        const currentSearchLength = lengths[idx];

        if (currentSearchLength > inputString.length) {
            continue;
        }

        const currentSubString = inputString.substr(0, currentSearchLength);
        if (currentSubString !== words[idx]) {
            continue;
        }

        if (currentSubString === inputString) {
            results.push([currentSubString]);
        }

        const newInputString = inputString.substr(currentSearchLength);
        const furtherMatches = recursiveReconstructAll(newInputString, words);
        if (!furtherMatches.length) {
            continue;
        }

        for (let foundWords of furtherMatches) {
            results.push([currentSubString, ...foundWords]);
        }
    }
    return results;
}


export function reconstructAll(inputString: string, words: string[]) {
    return recursiveReconstructAll(inputString, words);
}

function recursiveReconstructOne(inputString: string, words: string[]): string[] {
    const lengths = words.map(x => x.length);

    for (let idx = 0; idx < lengths.length; idx++) {
        const currentSearchLength = lengths[idx];

        if (currentSearchLength > inputString.length) {
            continue;
        }

        const currentSubString = inputString.substr(0, currentSearchLength);
        if (currentSubString !== words[idx]) {
            continue;
        }

        if (currentSubString === inputString) {
            return [currentSubString];
        }

        const newInputString = inputString.substr(currentSearchLength);
        const matches = recursiveReconstructOne(newInputString, words);
        if (!matches.length) {
            continue;
        }
        return [currentSubString, ...matches];

    }
    return [];
}

export function reconstructFirst(inputString: string, words: string[]) {
    return recursiveReconstructOne(inputString, words);
}
