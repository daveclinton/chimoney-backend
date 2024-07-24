import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { LoadingScreen } from "~/components/loading-screen";
import { Participants } from "~/components/tournament/participants";

interface TournamentRequestsPageProps {
  params: {
    tournamentId: string;
  };
}

const TournamentParticipants = (params: TournamentRequestsPageProps) => {
  const { tournamentId: rawTournamentId } = params.params;
  const tournamentId = parseInt(rawTournamentId);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Link
        href={`/t/${tournamentId}`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute top-8 left-4"
        )}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />{" "}
        <span className="pt-1">Go Back</span>
      </Link>
      <Participants tournamentId={tournamentId} />
    </Suspense>
  );
};

export default TournamentParticipants;
