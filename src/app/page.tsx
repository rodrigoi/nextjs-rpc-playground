import { RPCTime } from "@/components/rpc-time";

export default function Home() {
  return (
    <main>
      <div>Server Time: {new Date().toISOString()}</div>
      <hr />
      <RPCTime />
    </main>
  );
}
