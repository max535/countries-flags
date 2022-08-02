import { useEffect, useState } from "react";
import { Search } from "./Search"

export const Controls = () => {
    const [search, setSearch] = useState();

    useEffect(() => {

    }, [search]);

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
        </div>
    );
}
