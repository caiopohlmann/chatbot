'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";



export function Chat() {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/chat',
    })

    return (
        <div className="flex min-h-screen bg-slate-50 items-center justify-center">
            <Card className="w-[440px]">
                <CardHeader>
                    <CardTitle>Chat IA</CardTitle>
                    <CardDescription>Using Vercel SDK to create a ChatBot.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[640px] w-full space-y-4">
                        {messages.map(message => {
                            return (
                                <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                                    {message.role === 'user' && (
                                        <Avatar>
                                            <AvatarFallback>CP</AvatarFallback>
                                            <AvatarImage src="https://github.com/caiopohlmann.png" />
                                        </Avatar>
                                    )}
                                    {message.role === 'assistant' && (
                                        <Avatar>
                                            <AvatarFallback>GPT</AvatarFallback>
                                            <AvatarImage src="https://github.com/openai.png" />
                                        </Avatar>
                                    )}
                                    <p className="leading-relaxed">
                                        <span className="block font-bold text-slate-700">
                                            {message.role === 'user' ? 'Usuário' : 'IA'}
                                        </span>
                                        {message.content}
                                    </p>
                                </div>)
                        })}
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                        <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
                        <Button type="submit">Send</Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
}