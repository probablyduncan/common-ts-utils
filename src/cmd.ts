import { execSync } from "child_process";

/**
 * Execute specified command in current nodejs process.
 */
export function cmd(command: string) {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Failed to execute: ${command}`);
        process.exit(1);
    }
}