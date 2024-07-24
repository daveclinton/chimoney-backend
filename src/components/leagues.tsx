import { serverClient } from "~/trpc/server-client";
import { ScrollArea } from "~/components/ui/scroll-area";
import { LeagueCard } from "~/components/card/league-card";

export const Leagues = async () => {
  const leagues = await serverClient.tournament.getUserParticipations();

  if (leagues.length === 0) {
    return (
      <p className="text-muted-foreground text-sm text-center">
        No leagues joined yet.
      </p>
    );
  }

  return (
    <ScrollArea className="h-[16rem] md:h-[28rem] pr-3 w-full rounded-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {leagues.map((league) => (
          <LeagueCard
            key={league.participation.id}
            league={league}
            winner={league.winner}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
