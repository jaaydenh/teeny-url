import { headers } from 'next/headers';
// import {} from 'next/navigation';

import CreateLink from './CreateLink';

export default function Home() {
  const headersList = headers();
  const domain = headersList.get('host') || '';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-32 pt-4 bg-gradient-to-b from-[#2a6eff] to-[#123070f4]">
      <div className="max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-7xl font-black mb-8">TeenyURL</h1>
        <div className="rounded-lg bg-white text-black">
          <div className="py-4 px-5">
            <CreateLink domain={domain} />
          </div>
        </div>
      </div>
    </main>
  );
}
