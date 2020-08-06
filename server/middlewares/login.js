module.exports = (req, res, next) => {
    if (req.path == "/login" && req.method == "POST"){
        let body = req.body;
        if (body.username == "demouser@macrosoft.com" && password == "Test_1234"){
            res.status(200).send({
                error: null,
                message: null,
                token: "hfjhfg2h3jf423f4hj3f24g234v23jhf4j23fbu4jf23j423jf4hj23b4jnfdsf8td7s8fnt8dsfmsdf"
            })
            return next();
        } else {
            res.status(401).send({
                error: 401,
                message: "Not authorized"
            });
        }
        
    } else {
        return next();
    }

}