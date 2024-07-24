import { serverClient } from "~/trpc/server-client";
import { RequestSheet } from "~/components/sheets/request-sheet";

export const Requests = async () => {
  const userRequests = await serverClient.request.getUserRequests();

  return <RequestSheet data={userRequests} />;
};
