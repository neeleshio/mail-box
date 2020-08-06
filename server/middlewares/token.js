module.exports = (req, res, next) => {
    if (!req.path.includes("/login")) {
        if (req.headers && req.headers.authorization) {
            let token;
            const parts = req.headers.authorization.split(' ');
            if (parts.length == 2) {
                const [scheme, credentials] = parts;

                if (/^Bearer$/i.test(scheme)) { // or any other scheme you are using
                    token = credentials;
                }

                if (token === undefined) {
                    // access token - missing
                    res.status(401).send({
                        error: 401,
                        message: "Not authorized"
                    });
                }
                // add something here to ensure the token is valid
                return next();
            }
        } else {
            // No authorization header => invalid credentials
            res.status(401).send({
                error: 401,
                message: "Not authorized"
            });
        }
    }
}