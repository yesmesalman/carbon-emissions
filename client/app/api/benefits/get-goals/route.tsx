import { ApiResponse, Encrypt } from "@/helpers";
import { NextRequest } from "next/server";
import db from "../../../../helpers/db";

export type DevelopmentGoalIndicatorType = {
  category?: string;
  description: string;
  development_goal_target_id: number;
  id: number;
  name: string;
};

export type DevelopmentGoalTargetType = {
  id: number;
  name: string;
  development_goal_id: number;
  indicators?: DevelopmentGoalIndicatorType[];
};

export type DevelopmentGoalType = {
  id: number;
  name: string;
  targets?: DevelopmentGoalTargetType[];
};

export async function POST(req: NextRequest) {
  try {
    const { development_goals } = await req.json();

    const developmnentGoals = await db.developmentGoal.findMany({
      where: {
        id: {
          in: development_goals,
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const data: DevelopmentGoalType[] = await Promise.all(
      developmnentGoals.map(async (d) => {
        let targets = await db.developmentGoalTarget.findMany({
          where: {
            development_goal_id: d.id,
          },
          select: {
            id: true,
            name: true,
            development_goal_id: true,
          },
        });

        targets = await Promise.all(
          targets.map(async (t) => ({
            ...t,
            indicators: await db.indicator.findMany({
              where: {
                development_goal_target_id: t.id,
              },
              select: {
                id: true,
                name: true,
                description: true,
                category: true,
                development_goal_target_id: true,
              },
            }),
          }))
        );

        return {
          ...d,
          targets,
        };
      })
    );

    return ApiResponse(true, "", data);
  } catch (error) {
    console.log(error);
    return ApiResponse(false, error, []);
  }
}
