"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useMutationRaffle } from "@/hooks/useMutationRaffle";
import { useRaffle } from "@/hooks/useRaffle";

import { ROLES, getCurrentDate } from "@/utils/utils";

import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { TextareaWithLabel } from "@/components/ui/TextareaWithLabel";
import { SelectRaffle } from "@/components/ui/SelectRaffle";
import { LinkRaffle } from "@/components/ui/LinkRaffle";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";

const EditarSorteo = ({ params }: Params) => {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();

  const { queryRaffle } = useRaffle(params.id);
  const { mutationUpdate, dateError } = useMutationRaffle();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isAuthenticated || !user.role.includes(ROLES.ADMIN)) router.push("/");
  }, [isAuthenticated, router, user]);

  useEffect(() => {
    if (
      mutationUpdate.data &&
      (mutationUpdate.data as AxiosError).status === 400
    ) {
      setError("createAt", { message: dateError.error });
    }
  }, [dateError, setError, mutationUpdate]);

  useEffect(() => {
    if (queryRaffle.data) {
      const { name, description, prize, createAt, endAt } =
        queryRaffle.data as Raffle;

      reset({
        name,
        description,
        prize: prize.id,
        createAt: createAt.split("T")[0],
        endAt: endAt.split("T")[0],
      });
    }
  }, [queryRaffle.data, reset]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (Object.keys(errors).length > 0) return;
    mutationUpdate.mutateAsync({ id: params.id, raffle: data as RaffleCreate });
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-hero-sorteos bg-cover bg-[80%_80%] relative py-12 sm:py-0">
      <LinkRaffle />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 w-full flex flex-col justify-center items-center"
      >
        <div className="w-[90%] min-[480px]:w-96 flex flex-col items-center gap-4 bg-blue-dark-app-500 py-5  px-4 bg-opacity-50 rounded-md backdrop-blur-sm">
          <legend className="w-full text-center text-white text-4xl bg-white/30 backdrop-blur-sm rounded-md">
            Editar Sorteo
          </legend>

          <div className="w-full flex flex-col gap-4">
            <InputWithLabel
              labelText="title"
              name="name"
              type="text"
              placeholder="Digite el titulo"
              register={register}
              validacion={{
                required: "Este campo es requerido",
                minLength: {
                  value: 3,
                  message: "titulo debe tener más de 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "titulo no debe tener más de 50 caracteres",
                },
              }}
              messageError={errors.name ? `${errors.name.message}` : ""}
            />
            <TextareaWithLabel
              labelText="descripción del sorteo"
              name="description"
              placeholder="Describa el sorteo"
              register={register}
              validacion={{
                required: "Este campo es requerido",
                minLength: {
                  value: 50,
                  message: "descripción debe tener más de 50 caracteres",
                },
                maxLength: {
                  value: 320,
                  message: "descripción no debe tener más de 300 caracteres",
                },
              }}
              messageError={
                errors.description ? `${errors.description.message}` : ""
              }
            />
            <SelectRaffle
              labelText="Selecione el premio"
              name="prize"
              register={register}
              validacion={{
                required: "Este campo es requerido",
              }}
              messageError={errors.prize ? `${errors.prize.message}` : ""}
            />
            <InputWithLabel
              labelText="fecha de inicio"
              name="createAt"
              type="date"
              min={getCurrentDate()}
              register={register}
              validacion={{
                required: "Este campo es requerido",
              }}
              messageError={errors.createAt ? `${errors.createAt.message}` : ""}
            />
            <InputWithLabel
              labelText="fecha de finalización"
              name="endAt"
              type="date"
              min={getCurrentDate()}
              register={register}
              validacion={{
                required: "Este campo es requerido",
              }}
              messageError={errors.endAt ? `${errors.endAt.message}` : ""}
            />
          </div>
        </div>
        <footer className="flex gap-2 justify-end w-[90%] min-[480px]:w-96 mt-3">
          <button
            className="px-4 py-2 bg-gradient-to-r from-[#FFC327] to-[#FFF500] text-blue-app-700 rounded-lg font-bold"
            type="submit"
          >
            Editar
          </button>
        </footer>
      </form>
    </section>
  );
};

export default EditarSorteo;
