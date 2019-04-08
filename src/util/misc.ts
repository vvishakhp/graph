let idCounter = 0;

export function newId() {
    return idCounter++;
}

export let delay = async (ms: number) => new Promise((a, b) => setTimeout(a, ms));
