'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { useEffect } from 'react';

import useAuth from '@/hooks/useAuth';
import { CardOption } from '@/components/ui/CardOption';
import SorteosContainer from '@/components/ui/SorteosContainer';

const Sorteos = () => {
	const router = useRouter();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (!isAuthenticated) router.push('/');
	}, [isAuthenticated, router]);
  
	return (
    <SorteosContainer moreClass="bg-hero-admin bg-cover bg-[80%_80%]">
      <main className="w-full min-h-[calc(100vh_-_10rem)] flex items-center justify-center p-4">
        <section
          className="w-full grid grid-cols-[repeat(autofit,minmax(0,1fr))]
        min-[700px]:grid-cols-[repeat(2,20rem)] place-content-center gap-8 p-2"
        >
          <CardOption>
            <h2 className="text-white text-2xl">Tú Puedes</h2>
            <Image src="/card-1.png" alt="card" width={200} height={200} />
            <Link
              href="sorteos/crear"
              className="py-2 px-4 mt-2 bg-yellow-app-400 rounded-full text-black text-lg"
            >
              Crear Sorteos
            </Link>
          </CardOption>

          <CardOption>
            <h2 className="text-white text-2xl">Lista de sorteos</h2>
            <Image src="/card-2.png" alt="card" width={250} height={250} />

            <Link
              href="/sorteos/lista"
              className="py-2 px-4 bg-purple-app-400 text-white rounded-full text-lg"
            >
              Ver Sorteos
            </Link>
          </CardOption>
        </section>
      </main>
    </SorteosContainer>
  );
		
};

export default dynamic(
  async () => Sorteos,
  { ssr: false }
);
