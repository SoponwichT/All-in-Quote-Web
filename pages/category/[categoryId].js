import { useRouter } from "next/router"
import { QuoteCard } from "../../components/quotecard"
import { useState, useEffect } from 'react'

function Category() {
    const router = useRouter()
    const { categoryId } = router.query
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(false);

    if (categoryId == "work") {
        var API_URL = "https://allinquote-server.herokuapp.com/quotes/work";
    } else if (categoryId == "life") {
        var API_URL = "https://allinquote-server.herokuapp.com/quotes/life";
    }

    const getQuotes = async () => {
        try {
            setLoading(true)
            const response = await fetch(API_URL);
            const responsedata = await response.json();
            setQuotes(responsedata);
            setLoading(false)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getQuotes();
    }, [categoryId])

    const quoteData = quotes.data;
    const quoteElements = quoteData?.map(data => {
        return <QuoteCard quote={data} />
    });

    return (
        <>
            <h1 className="text-5xl capitalize">{categoryId}</h1>
            {
                (loading)
                    ?
                    <div className='quote-container flex flex-row max-w-7xl mx-auto gap-y-24 gap-x-12 flex-wrap justify-left pt-10'>
                        <p className="text-2xl">Loading . . .</p>
                    </div>
                    :
                    <div className='quote-container flex flex-row max-w-7xl mx-auto gap-y-24 gap-x-12 flex-wrap justify-left pt-10'>
                        {quoteElements}
                    </div>

            }

        </>
    )
}

export default Category


