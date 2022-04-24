import { useRouter } from "next/router"
import { QuoteCard } from "../../components/quotecard"
import { useState, useEffect } from 'react'
import { Grid } from 'react-loading-icons'

function Category() {
    const router = useRouter()
    const { categoryId } = router.query
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_URL = "https://allinquote-server.herokuapp.com/quotes/";
    

    const getQuotes = async () => {
        try {
            setLoading(true)
            const response = await fetch(API_URL+categoryId);
            const responsedata = await response.json();
            setQuotes(responsedata);
            setLoading(false)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (categoryId){
            getQuotes();
        }
    }, [categoryId])

    const quoteData = quotes.data;
    const quoteElements = quoteData?.map(data => {
        return <QuoteCard key={data.id} quote={data} />
    });

    return (
        <>
            <h1 className="text-5xl capitalize text-center">{categoryId}</h1>
            {
                (loading)
                    ?
                    <div className='flex justify-center pt-8'><Grid fill='rgba(6,188,238,1)'/></div>
                    :
                    <div className='quote-container flex flex-row max-w-7xl mx-auto gap-y-24 gap-x-4 flex-wrap justify-center pt-10 mb-16'>
                        {quoteElements}
                    </div>
            }

        </>
    )
}

export default Category


