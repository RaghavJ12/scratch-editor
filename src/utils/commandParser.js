import {
    controlCommands,
    motionCommands,
    looksCommands
} from './commandMapping';

const commandParser = async (commands) => {
    for (const cmd of commands) {
        await commandRunner(cmd);
    }
};

const commandRunner = async (cmd) => {
    if (cmd.cmdID.includes('Control')) return controlCommands(cmd.cmdText, cmd.cmdVal);
    if (cmd.cmdID.includes('Events')) return motionCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Looks')) return looksCommands(cmd.cmdText, cmd.cmdVal);
    if (cmd.cmdID.includes('Motion')) return motionCommands(cmd.cmdText, cmd.cmdVal);
};

export default commandParser;
