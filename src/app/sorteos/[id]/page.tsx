"use client";

interface Params {
  params: { id: string };
}

const initialNumber = 0;

const Sorteo = ({ params }: Params) => {
  return (
    <div>
      <h1>Sorteo {params.id}</h1>
    </div>
  );
};

export default Sorteo;
