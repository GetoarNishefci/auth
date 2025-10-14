"use client"

import * as z from "zod"
import { CardWrapper } from "./card-wrapper"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { useState, useTransition } from "react"
import { register } from "@/actions/register"

export const RegisterForm = () =>{

    const [isPendig, startTransition] = useTransition()

    const [error , setError] = useState<string | undefined>("")
    const [success , setSucces] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            email: "",
            password:"",
            name:""
        }
    })

    const onSubmit = (values:z.infer<typeof RegisterSchema>) =>{

          setError("")
        setSucces("")

        startTransition(()=>{
      register(values)
      .then((data)=>{
        setError(data.error)
        setSucces(data.success)
      })

            })
        }

    return(
        <CardWrapper headerLabel="Create an account" backButtonLabel="Already have an account?" backButtonHref="/auth/login" showSocial>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                                       >
                                           <div className="space-y-4">
                                            <FormField 
                                                control={form.control}
                                                name="name"
                                                 render={({field})=>(
                                                    <FormItem>
                                                        <FormLabel>Name</FormLabel>
                                                        <FormControl>
                                                            <Input disabled={isPendig} {...field} placeholder="Test Test"/>
                                                        </FormControl>
                                                        <FormMessage/>
                                                    </FormItem>
                                                 )}
                                            />
                                                      <FormField 
                                                control={form.control}
                                                name="email"
                                                 render={({field})=>(
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input disabled={isPendig} {...field} placeholder="test@example.com" type="email"/>
                                                        </FormControl>
                                                        <FormMessage/>
                                                    </FormItem>
                                                 )}
                                            />
                                               <FormField 
                                                control={form.control}
                                                name="password"
                                                 render={({field})=>(
                                                    <FormItem>
                                                        <FormLabel>Password</FormLabel>
                                                        <FormControl>
                                                            <Input disabled={isPendig} {...field} placeholder="******" type="password"/>
                                                        </FormControl>
                                                        <FormMessage/>
                                                    </FormItem>
                                                 )}
                                            />
                                            </div> 
                                            <FormError message={error}/>
                                            <FormSuccess message={success}/>
                                            <Button disabled={isPendig} type="submit" className="w-full">
                                                Create an account
                                            </Button>
                    </form>
            </Form>
        </CardWrapper>
    )
}
