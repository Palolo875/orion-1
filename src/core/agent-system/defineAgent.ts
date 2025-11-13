// src/core/agent-system/defineAgent.ts
import { AgentRuntime } from './AgentRuntime';

export interface AgentDefinition {
    init: (runtime: AgentRuntime) => void;
}

// Cette fonction est le point d'entrée de chaque fichier de worker.
export function runAgent(definition: AgentDefinition): void {
    // Le nom de l'agent est défini par le contexte qui crée le worker.
    const agentName = self.name;
    if (!agentName) {
        throw new Error("Agent must be created with a 'name' option.");
    }
    const runtime = new AgentRuntime(agentName);
    definition.init(runtime);

    // Signaler que l'initialisation est terminée.
    self.postMessage({ type: 'READY' });
}
