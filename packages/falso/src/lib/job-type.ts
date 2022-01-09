import { rand } from './core';

export function jobType() {
  return rand([
    'Director',
    'Representative',
    'Officer',
    'Coordinator',
    'Engineer',
    'Designer',
    'Developer',
    'Specialist',
    'Analyst',
    'Orchestrator',
    'Technician',
    'Executive',
    'Assistant',
    'Producer',
    'Liaison',
    'Consultant',
    'Architect',
    'Associate',
    'Manager',
    'Agent',
    'Facilitator',
    'Planner',
    'Administrator',
    'Supervisor',
  ]);
}
