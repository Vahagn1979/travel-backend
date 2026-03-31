
export default function notFoundErrorHandler(req, res, next) {

    // api errors
    if(req.originalUrl.startsWith("/api")) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: `Can not ${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl} `
        })
    }

    res.status(404).render("404", {
        status: 404,
        title: "The Page Not Found!",
        layout: false
    })
}