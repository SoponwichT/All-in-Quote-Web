export const QuoteCard = ({quote}) => {
    if (quote.color === 0 ){
        return (
            <div className='flex flex-col bg-amber-100 rounded-md shadow-xl border-2 h-80 w-96 p-6'>
              <div className='quote font-delius text-2xl'>
                <p>{quote.text}</p>
              </div>
              <div className='author mt-auto ml-auto font-bold'>
                <p>{quote.author}</p>
              </div>
              <div className='category capitalize text-slate-400'>
                <p>{quote.category}</p>
              </div>
            </div>
        );
    }
    if (quote.color === 1 ){
        return (
            <div className='flex flex-col bg-blue-100 rounded-md shadow-xl border-2 h-80 w-96 p-6'>
              <div className='quote font-mali text-2xl'>
                <p>{quote.text}</p>
              </div>
              <div className='author mt-auto ml-auto font-bold'>
                <p>{quote.author}</p>
              </div>
              <div className='category capitalize text-slate-400'>
                <p>{quote.category}</p>
              </div>
            </div>
        );
    }
    if (quote.color === 2 ){
        return (
            <div className='flex flex-col bg-purple-100 rounded-md shadow-xl border-2 h-80 w-96 p-6'>
              <div className='quote font-delius text-2xl'>
                <p>{quote.text}</p>
              </div>
              <div className='author mt-auto ml-auto font-bold'>
                <p>{quote.author}</p>
              </div>
              <div className='category capitalize text-slate-400'>
                <p>{quote.category}</p>
              </div>
            </div>
        );
    }
    if (quote.color === 3 ){
        return (
            <div className='flex flex-col bg-stone-800 rounded-md text-white shadow-xl border-2 h-80 w-96 p-6'>
              <div className='quote font-delius text-2xl'>
                <p>{quote.text}</p>
              </div>
              <div className='author mt-auto ml-auto font-bold'>
                <p>{quote.author}</p>
              </div>
              <div className='category capitalize text-slate-400'>
                <p>{quote.category}</p>
              </div>
            </div>
        );
    }
    return (
        <div className='flex flex-col bg-green-100 rounded-md shadow-xl border-2 h-80 w-96 p-6'>
          <div className='quote font-delius text-2xl'>
            <p>{quote.text}</p>
          </div>
          <div className='author mt-auto ml-auto font-bold'>
            <p>{quote.author}</p>
          </div>
          <div className='category capitalize text-slate-400'>
            <p>{quote.category}</p>
          </div>
        </div>
    );
}