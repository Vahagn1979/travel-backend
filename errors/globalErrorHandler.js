const isProduction = process.env.NODE_ENV === "production";

export default function globalErrorHandler(err, req, res, next) {
    const statusCode = err.status || 500;

    if(!isProduction) {
        console.error(err)
    }

    // Api errors
    if(req.originalUrl.startsWith("/api")) {
        return res.status(statusCode).json({
            status: statusCode,
            error: "Internal Server Error"
        })
    }

    res.status(statusCode).render("500", {
        status: statusCode,
        title: "Internal Server Error",
        stack: isProduction ? null : err.stack,
        layout: false
    })
}