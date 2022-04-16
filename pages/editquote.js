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
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function editquote() {
    const router = useRouter()
    const { id } = router.query
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [color, setColor] = useState(0)
    const [category, setCategory] = useState("Motivational")
    const API_URL = "https://allinquote-server.herokuapp.com/quotes";
    const categories = ["Motivational",
    "Inspirational",
    "Positive",
    "Life",
    "Funny"]

    const getQuotes = async () => {
        try {
            console.log(id);
            const response = await fetch(API_URL);
            const responsedata = await response.json();
            console.log(responsedata);
            const quote = responsedata.data.find(quote => quote.id === id)
            setText(quote.text)
            setAuthor(quote.author)
            setColor(quote.color)
            setCategory(quote.category)
            console.log(quote);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (id) {
            getQuotes();
        }
    }, [id])

    const editQuote = (e) => {
        e.preventDefault();
        const data = {
            id: id,
            text: text,
            author: author,
            color: color,
            category: category
        };
        console.log(data);
        fetch('https://allinquote-server.herokuapp.com/quote', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                window.location.href = "/";
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div>
                <form onSubmit={editQuote} className='flex flex-col gap-y-6 max-w-md my-6 bg-slate-50 rounded-md shadow-xl p-4 border-2'>
                    <FormControl isRequired>
                        <FormLabel htmlFor='text'>Quote</FormLabel>
                        <Input value={text} onChange={(e) => setText(e.target.value)} id='text' placeholder={text} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='author'>Author</FormLabel>
                        <Input value={author} onChange={(e) => setAuthor(e.target.value)} id='author' placeholder={author} />
                    </FormControl>
                    <FormControl isRequired>
                        <RadioGroup value={color} onChange={(e) => setColor(parseInt(e))}>
                            <HStack spacing='24px'>
                                <Radio value={0} >0</Radio>
                                <Radio value={1} >1</Radio>
                                <Radio value={2} >2</Radio>
                                <Radio value={3} >3</Radio>
                                <Radio value={4} >4</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='category'>Category</FormLabel>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Select category'>
                            {categories.map(category => <option key={category} value={category}>{category}</option>)}
                        </Select>
                    </FormControl>
                    <Button type="submit" colorScheme='blue'>Edit quote</Button>
                </form>
            </div>
        </>
    )
}