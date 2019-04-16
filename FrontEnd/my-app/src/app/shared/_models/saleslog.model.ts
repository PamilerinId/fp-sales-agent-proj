import { Plan } from './plan.model';
import { Agent } from './agent.model';


export class SalesLog {
    agent: Agent;
    plan_sold: Plan;
    commission_made: number;
    init_date: string;
}
