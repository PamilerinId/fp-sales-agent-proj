import { Plan } from './plan.model';
import { Agent } from './agent.model';


export class SalesLog {
    plan: Plan;
    agent: Agent;
    commission: number;
    date: string;
}
