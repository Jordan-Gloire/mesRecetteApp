import Image from "next/image";
import Entete from "../Entete/page";
export default async function Users() {
    const getUsers = async () => {
        const res = await fetch('https://dummyjson.com/recipes');
        return res.json();
    }
    const data = await getUsers();
    return (
        <>
            <Entete/>
            {
                data.recipes.map((elt, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <Image src={elt.image} alt="ok" width={200} height={200} className="w-80 rounded-2xl hover:grayscale ease-in-out duration-700 hover:scale-95"/>
                            
                            <div className="p-5 my-3">
                                <h1 className="text-2xl font-bold">{elt.name}</h1>
                                <p className="text-xl py-2">Ingrédients :{elt.ingredients}</p>
                                <p className="text-xl py-2">Instructions :{elt.instructions}</p>
                                <p className="text-xl py-2">Temps de préparation minutes {elt.prepTimeMinutes}</p>
                                <p className="text-xl py-2">Temps de cuisson minutes {elt.cookTimeMinutes}</p>
                                <p className="text-xl py-2">Type de cuisine :{elt.cuisine}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}