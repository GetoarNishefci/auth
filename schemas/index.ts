import * as Z from "zod";

export const LoginSchema = Z.object({
    email:Z.email({
        error:"Email is required"
    }),
    password:Z.string().min(1,{
        error:"Password is required"
    })
})

export const RegisterSchema = Z.object({
    email:Z.email({
        error:"Email is required"
    }),
    password:Z.string().min(6,{
        error:"Min 6 characters required"
    }),

    name:Z.string().min(1,{
        error:"Name is required"
    })

})