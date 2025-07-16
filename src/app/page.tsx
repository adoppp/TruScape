import Status from "./components/Status/Status";

export default function Home() {
    return (
        <main>
            <h1>Hello my Next app</h1>
            <Status statusType='Active' />
        </main>
    );
};
