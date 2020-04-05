import * as React from "react"
import fetch from "node-fetch"

export default function () {
    const [data, setData] = React.useState({state : "getting response from server...."})
    fetch("http://localhost:4500/weather")
        .then(setJson)
        .then(setData)

    function setJson(response) {
        return response.json()
    }
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}