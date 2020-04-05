const app = require("express")()

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin" , "*")
    res.setHeader("Access-Control-Allow-Methods" , "GET")
    res.setHeader("Access-Control-Allow-Headers" , "CONTENT-TYPE,AUTHORIZATION")
    next()
})

app.get("/weather", (_, res) => {
    const resStr = getWeatherStaticContents()
    res.status(200).json(JSON.parse(resStr))
})

let data = null
function getWeatherStaticContents() {
    if (data) return data
    const mockJson = require("path").resolve(__dirname, "data", "weather.json")
    console.log(mockJson)
    data = require("fs").readFileSync(mockJson, { encoding: "utf-8" })
    return data
}

app.get("*", (req, res) => res.send("Hello World"))

const PORT = process.env.Port || 4500
app.listen(PORT, () => console.log("connected at : ", PORT))