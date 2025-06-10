module.exports = (err, req, res, next) => {
    const status = err.statusCode || 400;
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({ error: 'Validation Error', messages });
    }

    res.status(status).json({
        error: err.message || 'An unexpected error occurred',
    });
};  