import { useRouter } from "next/router";
import { details } from "./index";

function developer() {
    const pr = useRouter();
    const id = pr.query.devId;
    const dev = details.find((index) => index.id === id);

    console.log(dev);

    return (
        <div>
            {dev ? (
                <>
                    <h1>{dev.name}</h1>
                    <p>{dev.role}</p>
                </>
            ): (
                <p>Developer doesn't exist</p>
            )}
        </div>
    );
}

export default developer;