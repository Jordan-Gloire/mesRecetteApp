import Image from "next/image";
export default async function Produits() {
    const getProduit = async () => {
        const res = await fetch('https://dummyjson.com/products');
        return res.json();
    }
    const mesProduits = await getProduit()
    return (
        <>
            <h1 className="text-center text-3xl pt-11 font-bold">PRODUITS ICI !</h1>
            
                {
                    mesProduits.products.map((elt, index) => {
                        return (
                            <div  key={index} className="flex flex-col justify-center items-center my-8">
                                <Image src={elt.thumbnail} alt={elt.title} width={200} height={200}/>
                                <h1 className="text-2xl">{elt.title}</h1>
                                <p>{elt.description}</p>
                                <p>Prix:{elt.price}$</p>
                                <p>{elt.stock}</p>
                        </div>
                        )
                        
                    })
                }
        </>
    )
}