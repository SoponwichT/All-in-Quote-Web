import {
    FormControl,
    FormLabel,
    Input,
    Button,
    RadioGroup,
    HStack,
    Radio,
    Select
} from '@chakra-ui/react'
import { useState } from 'react';

export default function addquote() {
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [color, setColor] = useState(0)
    const [category, setCategory] = useState("Motivational")
    const categories = ["Motivational",
        "Inspirational",
        "Positive",
        "Life",
        "Funny"]

    const submitQuote = (e) => {
        e.preventDefault();
        const data = {
            text: text,
            author: author,
            color: color,
            category: category
        };
        console.log(data);
        fetch('https://allinquote-server.herokuapp.com/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                window.location = "/"
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <>
            <div>
                <form onSubmit={submitQuote} className='flex flex-col gap-y-6 max-w-md my-6 bg-slate-50 rounded-md shadow-xl p-4 border-2'>
                    <FormControl isRequired>
                        <FormLabel htmlFor='text'>Quote</FormLabel>
                        <Input value={text} onChange={(e) => setText(e.target.value)} id='text' placeholder='Your quote' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='author'>Author</FormLabel>
                        <Input value={author} onChange={(e) => setAuthor(e.target.value)} id='author' placeholder='Your name' />
                    </FormControl>
                    <FormControl isRequired>
                        <RadioGroup value={color} onChange={(e) => setColor(parseInt(e))}>
                            <HStack spacing='24px'>
                                <Radio value={0} >
                                    <div
                                        style={{
                                            borderRadius: "40%",
                                            border: "2px solid lightgrey",
                                            backgroundColor: "#FEF3C7",
                                            width: "25px",
                                            height: "25px",
                                            margin: "2px",
                                        }}
                                    ></div>
                                </Radio>
                                <Radio value={1} >
                                    <div
                                        style={{
                                            borderRadius: "40%",
                                            border: "2px solid lightgrey",
                                            backgroundColor: "#DBEAFE",
                                            width: "25px",
                                            height: "25px",
                                            margin: "2px",
                                        }}
                                    ></div>
                                </Radio>
                                <Radio value={2} >
                                    <div
                                        style={{
                                            borderRadius: "40%",
                                            border: "2px solid lightgrey",
                                            backgroundColor: "#F3E8FF",
                                            width: "25px",
                                            height: "25px",
                                            margin: "2px",
                                        }}
                                    ></div>
                                </Radio>
                                <Radio value={3} >
                                    <div
                                        style={{
                                            borderRadius: "40%",
                                            border: "2px solid lightgrey",
                                            backgroundColor: "#292524",
                                            width: "25px",
                                            height: "25px",
                                            margin: "2px",
                                        }}
                                    ></div></Radio>
                                <Radio value={4} >
                                    <div
                                        style={{
                                            borderRadius: "40%",
                                            border: "2px solid lightgrey",
                                            backgroundColor: "#DCFCE7",
                                            width: "25px",
                                            height: "25px",
                                            margin: "2px",
                                        }}
                                    ></div></Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='category'>Category</FormLabel>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Select category'>
                            {categories.map(category => <option key={category} value={category}>{category}</option>)}
                        </Select>
                    </FormControl>
                    <Button type="submit" colorScheme='blue'>Share your quote!!</Button>
                </form>
            </div>
        </>
    )
}