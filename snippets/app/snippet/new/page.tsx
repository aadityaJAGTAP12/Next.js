import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

function CreateSnippidPage() {

    async function  createSnippet(formData: FormData) {
        "use server"
        const title = formData.get("title")as string;
        const code = formData.get("code")as string;
       await prisma.snippet.create({
            data: {
                title: title as string,
                code: code as string,
            }
    }
         );
         console.log("Snippet Created" + title + code);

        redirect("/");  //server side redirection


    }
    

    return (
        <form action={createSnippet}>
            <div className="space-y-10">
                <div className="space-y-2" >
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" type="text" placeholder="Enter snippet title"  name ="title"/>
                </div>
                <div className="space-y-2">
                    <Label >Code</Label>
                    <Textarea id="Code" placeholder="Enter your code" name ="code" />
                </div>
                <Button type="submit">NEW</Button>
            </div>
        </form>
    )
}

export default CreateSnippidPage
