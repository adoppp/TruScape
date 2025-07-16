import { Status } from "@/app/components/Status/Status";
import { CompanyForm } from "./sections/CompanyForm/CompanyForm";

export default function Home() {
    return (
        <main>
            <h1>Hello my Next app</h1>
            <Status statusType='Active' />
            <CompanyForm />
        </main>
    );
};
