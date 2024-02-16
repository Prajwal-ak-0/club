"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import axios from "axios"
import { Label } from "@/components/ui/label"
import Heading from "@/components/Heading"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    department: z.string().min(2).max(50),
    semester: z.string().min(1).max(2),
    message: z.string().min(2).max(50),
})

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            department: "",
            semester: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        // const res = await axios.post('/api/subscribe', values);
        // console.log(res.data); 
        console.log(values);
        form.reset();
        setLoading(false);
    }
    return (
        <>
            <div className="flex flex-col bg-neutral-50/50 p-12 rounded-md shadow-md">
                <Heading title="Contact Us" />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <div className="py-4">
                            <Label className="text-black font-semibold px-2" htmlFor="name">Name</Label>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="John Doe"
                                                type="text"
                                                variant="secondary"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="py-4">
                            <Label className="text-black font-semibold px-2 " htmlFor="email">Email</Label>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="johndoe@gmail.com"
                                                type="email"
                                                variant="secondary"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="py-4">
                                <Label className="text-black font-semibold px-2 " htmlFor="department">Department</Label>
                                <FormField
                                    control={form.control}
                                    name="department"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={loading}
                                                    placeholder="CSE"
                                                    type="text"
                                                    variant="tertiary"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="py-4">
                                <Label className="text-black font-semibold px-2 " htmlFor="Semester">Semester</Label>
                                <FormField
                                    control={form.control}
                                    name="semester"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={loading}
                                                    placeholder="3"
                                                    type="text"
                                                    variant="tertiary"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="py-4">
                            <Label className="text-black font-semibold px-2 " htmlFor="message">Message</Label>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="3"
                                                type="text"
                                                variant="textArea"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className="w-20  h-10 bg-white text-bold" type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </>
    )
}

export default ContactForm