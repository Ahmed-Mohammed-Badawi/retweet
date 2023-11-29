import {getDictionary} from "./dictionaries/dictionaries";

export default async function Home({params: {lang}}) {
    const dictionary = await getDictionary(lang);
    return (
        <div>
            <h1>{dictionary.home.title}</h1>
            <p>{dictionary.home.description}</p>
        </div>
    );
}
