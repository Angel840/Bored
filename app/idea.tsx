import Image from 'next/image'

export default function Idea(idea: {name:string, price?:number, outside:boolean, description:string}) {
    return (<div className="bg-white rounded-xl flex flex-col items-center justify-center content-center space-y-4">
            <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/1200px-Tennis_Racket_and_Balls.jpg"
                alt="Tennis"
                width={500}
                height={500}
            />
            <h1>{idea.name}</h1>
            <p>{idea.description}</p>
        </div>);
}