'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover"
import { Textarea } from "@/app/_components/ui/textarea"
import { Calendar } from "@/app/_components/ui/calendar"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"

import { CalendarIcon } from "@radix-ui/react-icons"

import { TypographyH1 } from "@/app/_components/shared/typography"
import { raffleSchema } from "@/app/_schemas/raffle.schema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"

const EditPage = () => {
	const form = useForm<z.infer<typeof raffleSchema>>( {
		resolver: zodResolver( raffleSchema ),
		defaultValues: {
			title: "",
			prize: "",
			description: "",
			createAt: new Date(),
		},
	} )

	const onSubmit = (values: z.infer<typeof raffleSchema>) => {
		console.log(values)
	}

	return (
		<Form { ...form }>
			<form
				onSubmit={ form.handleSubmit( onSubmit ) }
				className="raffle-form-blur">

				<div className="bg-white/20 backdrop-blur-md rounded-md">
					<TypographyH1
						className="text-center lg:text-4xl">
						Editar Sorteo
					</TypographyH1>
				</div>

				<FormField
					control={ form.control }
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Titulo</FormLabel>
							<FormControl>
								<Input
									variant="raffle"
									placeholder="Ingresa un titulo"
									{ ...field } />
							</FormControl>
							<FormMessage className="text-sm" />
						</FormItem>
					) }
				/>

				<FormField
					control={ form.control }
					name="description"
					render={({ field, formState: { errors }}) => (
						<FormItem>
							<FormLabel>Descripción</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Ingresa una descripción"
									className="resize-none text-base border-2 
									border-gray-500 placeholder:text-gray-400"
									{ ...field }
								/>
							</FormControl>
							<FormMessage className="text-sm" />
						</FormItem>
					) }
				/>

				<FormField
          control={form.control}
          name="prize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seleccione el premio</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="border-2 border-gray-500">
                    <SelectValue placeholder="Selecciona un premio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-blue-dark-app-200/80 
								text-white backdrop-blur-md border-0 hover:bg-blue-dark-app-200">
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

				<FormField
					control={ form.control }
					name="createAt"
					render={ ( { field } ) => (
						<FormItem className="flex flex-col">
							<FormLabel>Fecha de creación</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className="pl-3 w-full bg-transparent hover:bg-transparent 
											hover:text-white text-left font-normal border-2 border-gray-500">
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span className="text-gray-400">Fecha de creación</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0 bg-blue-dark-app-200/80 
								text-white backdrop-blur-md border-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) => new Date() > date}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					) }
				/>

				<div className="flex justify-end gap-4 mt-4">
					<Button
						variant="raffleSecondary"
						size="lg"
						type="reset">
						Limpiar
					</Button>

					<Button
						variant="raffle"
						size="lg"
						type="submit">
						Crear
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default EditPage